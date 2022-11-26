import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/UseAdmin/UseAdmin';
import useSeller from '../../../hooks/UseSeller/useSeller';
import BookingModal from '../../AllCars/BookingModal/BookingModal';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import logo from '../../../assets/logo.png'
const Advertisement = () => {
    const [adcars, setAdCars] = useState([])
    const { userRoll, user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    const [selectedData, setSelectedData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/advertise')
            .then(data => setAdCars(data.data))
    }, [])
    const handleWishlist = car => {
        car.email = user.email;

        fetch('http://localhost:5000/wishlist', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => console.log(data, "add to wishlist"))
    }
    return (
        <div >
            {
                adcars.length > 0 && <>



                    <h1 className='text-5xl bebus text-center my-10 '>Advertisements</h1>

                    <div>
                        {
                            selectedData && <BookingModal selectedData={selectedData} setSelectedData={setSelectedData}></BookingModal>
                        }
                    </div>
                    <div>
                        {
                            (userRoll !== 'Buyer' || !user) &&
                            <div className="chat chat-start animate-pulse">
                                <div className="chat-image avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={logo} className="bg-slate-400 " />
                                    </div>
                                </div>

                                <div className="chat-bubble">{userRoll === 'Seller' ? "You are Seller ." : "To add Product You should Login as a Seller & "} To Book You must Login as a Buyer</div>

                            </div>


                            // <div className="chat-bubble my-5">To Book You must Login as a Buyer</div>
                        }

                        <div className=' container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-3'>
                            {
                                adcars.map(car => <ProductCard key={car._id} product={car}>{(userRoll === 'Buyer' && user) && <div className=' flex justify-between'>
                                    <p>
                                        <label htmlFor="booking-model" className='btn btn-secondary  mx-2 my-2' onClick={() => setSelectedData(car)}>Book Now</label>
                                        <button className='btn btn-gray mx-2 my-2 ' onClick={() => handleWishlist(car)}>Add on WishList</button></p>
                                </div>}</ProductCard>)
                            }
                        </div>
                    </div>

                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>
                {
                    adcars.map(car => <ProductCard key={car._id} product={car}></ProductCard>)
                }
            </div> */}
                </>
            }
        </div>
    );
};

export default Advertisement;