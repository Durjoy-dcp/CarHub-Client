import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../assets/logo.png'

const Payment = () => {
    const booking = useLoaderData();

    const { name, price } = booking;
    console.log(booking)
    return (
        <div>
            <h3 className="text-6xl bebus my-3 mx-3"> Payment</h3>

            <div className="chat chat-start animate-pulse flex justify-center w-full">
                <div className="chat-image avatar">
                    <div className="w-20 rounded-full">
                        <img src={logo} className="bg-slate-400 " />
                    </div>
                </div>
                <div className=''>

                    <div className="chat-bubble"><h4 className="text-2xl bebus">You are Paying   <strong>${price}</strong>  for {name}</h4></div>
                </div>

            </div>
            <div className='w-96 my-6'>
                {/* <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booking} />
                </Elements> */}

            </div>
        </div>
    );

};

export default Payment;