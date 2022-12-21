import React from 'react';
import brand1 from '../../../assets/brand1.png'
import brand2 from '../../../assets/brand2.png'
import brand3 from '../../../assets/brand3.png'

const Brands = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-around' >
                <img src={brand1} alt="" style={{ width: "190px", height: "140px" }} />
                <img src={brand2} alt="" style={{ width: "190px", height: "140px" }} />
                <img src={brand3} alt="" style={{ width: "190px", height: "140px" }} />

            </div>

        </div>
    );
};

export default Brands;