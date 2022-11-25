import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ProductCard from '../Shared/ProductCard/ProductCard';
import logo from '../../assets/logo.png'
import useSeller from '../../hooks/UseSeller/useSeller';
import useAdmin from '../../hooks/UseAdmin/UseAdmin';
const AllCars = () => {
    const allcars = useLoaderData();
    const { userRoll, user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    console.log(allcars)
    return (

        <div className="drawer drawer-mobile">
            <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
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
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>
                    {
                        allcars.map(car => <ProductCard key={car._id} product={car}>{(userRoll === 'Buyer' && user) && <div className=' flex justify-between'>
                            <button className='btn btn-secondary  mx-2'>Book Now</button>
                            <button className='btn btn-gray '>Add on WishList</button>
                        </div>}</ProductCard>)
                    }
                </div>

                <div className='relative h-full'>


                    <label tabIndex={0} className="btn fixed bg-slate-800  text-white top-1/2 left-0 w-16  lg:hidden" htmlFor="dashboardDrawer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                <ul className="menu p-4  bg-white w-64  md:w-80 divide-y divide-slate-200 ">
                    <li className="text-3xl bebus bg-black rounded p-2 text-white">Catagory</li>

                    <li className=' text-black'><Link to={`/catagory/SUV`} >SUV</Link></li>
                    <li className=' text-black'><Link to={`/catagory/SEDAN`} >SEDAN</Link></li>
                    <li className=' text-black'><Link to={`/catagory/SPORTS`}>SPORTS CAR</Link></li>




                </ul>

            </div>
        </div >
    );
};

export default AllCars;