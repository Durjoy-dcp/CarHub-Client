import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModalofAd = ({ setSelectedOption, setSelectedData, selectedData }) => {
    const { user } = useContext(AuthContext);
    console.log(selectedData)
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            price: selectedData.price,
            buyer: name,
            email,
            phone,
            catagory: selectedData.catagory,
            location,
            name: selectedData.name,
            serial: selectedData.serial,
            img: selectedData.img,
            issold: selectedData.issold,
            newOwner: selectedData.newOwner,
            txnid: selectedData.txnid

        }
        // console.log(booking)
        fetch('https://car-hub-server-pi.vercel.app/booking', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success("Booked Successfully , You can see and Pay for this on Your dashboard > My Order")
                    setSelectedData(null)

                } else {
                    toast.error(data.msg)
                    setSelectedData(null)

                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-model" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-model" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setSelectedData(null)}>✕</label>
                    <h3 className="text-lg font-bold">{selectedData.name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>

                        <input name="name" type="text" placeholder="Your Name " defaultValue={user?.displayName} disabled className="input input-bordered w-full " />
                        <input name="price" type="text" placeholder="Price " defaultValue={`Price : ${selectedData.price}`} disabled className="input input-bordered w-full " />
                        <input name='email' type="text" placeholder="Email Address" defaultValue={user?.email} disabled className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full " />
                        <input type="submit" value="Submit" className=' btn m-2 w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModalofAd;