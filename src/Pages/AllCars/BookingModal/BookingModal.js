import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ setSelectedOption, setSelectedData, selectedData }) => {
    const { user } = useContext(AuthContext);
    console.log(selectedData)
    const handleBooking = (event) => {

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

export default BookingModal;