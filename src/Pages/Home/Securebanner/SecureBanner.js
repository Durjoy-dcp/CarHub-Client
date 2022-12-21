import React from 'react';
import './SecureBanner.css'
import { AiFillCar } from "react-icons/ai";
const SecureBanner = () => {
    return (
        <div className='securebanner'>
            <div className=''>


                <div className="flex flex-col ">
                    <div data-aos="zoom-in" >

                        <h1 className="text-6xl text-white bebus flex align-middle  justify-center text-center p-3" >We Provide secure payment System</h1>
                    </div>
                    <div className="divider "><AiFillCar className='text-6xl' /> </div>
                    <h1 className=' text-xl font-bold text-white  flex align-middle justify-center text-center p-3'>Explore your dream Car with us.We ensure 100% secure transaction.</h1>
                </div>
            </div>

        </div>
    );
};

export default SecureBanner;