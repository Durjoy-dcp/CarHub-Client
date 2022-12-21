import React from 'react';
import './SwiperSingleCard.css'

const SwiperSingleCard = ({ feedback }) => {
    const { name, post, heading, img } = feedback;
    return (
        <div className='p-3  mt-3 mb-4 rounded  text-center ' >
            <div className='flex  items-center   justify-center'>

                <div>
                    <img className='feedback-img  mr-4  border  rounded-full border-8' src={img} alt="" />
                </div>

            </div>
            <div className='mt-4'>
                <h4 className='text-info text-3xl font-bold'>
                    {heading}
                </h4>
            </div>
            <div>
                <p className='text-white max-w-sm mx-auto text-xl '>
                    {post}
                </p>
                <div>
                    <h3 className=' text-yellow-500 text-2xl  bebus '>--{name} <span className='text-xl text-white'>Happy Customer</span></h3>
                </div>
            </div>

        </div>
    );
};

export default SwiperSingleCard;