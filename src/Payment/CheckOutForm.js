import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const CheckOutForm = ({ booking }) => {
    const stripe = useStripe();
    const { user } = useContext(AuthContext)
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const { displayName } = user
    const [transactionID, setTransactionID] = useState('')
    const { price } = booking
    console.log(price)
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('')
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: displayName,
                        email: user.email,

                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {

            const payment = {
                transactionID: paymentIntent.id,
                email: user.email,
                bookingId: booking._id


            }
            fetch(`http://localhost:5000/payment`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setTransactionID(paymentIntent.id)
                    setSuccess('Congrats your payment completed')
                    toast.success("Congratulation You own the car")

                })
        }


    }
    console.log("we are here")
    return (
        <div className=" flex justify-center">
            <div className='w-96' >


                <div>

                    <form onSubmit={handleSubmit} className=" shadow-lg  border p-3  rounded-lg">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                        <div className='w-full text-center'>

                            <button type="submit" className='btn btn-sm  mt-4 btn-primary text-center' disabled={!stripe}>
                                Pay
                            </button>
                        </div>
                    </form>

                    <p className='text-red-600'>{cardError}</p>
                    {
                        success && <div className='w-full'>
                            <p className='text-green-500'>{success}</p>
                            <p>Your transactionID :<span className='font-bold'>{transactionID}</span></p>
                        </div>
                    }

                </div>
            </div>

        </div >
    );
};

export default CheckOutForm;