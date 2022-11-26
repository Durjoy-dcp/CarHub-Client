import React from 'react';
import Stat from '../Shared/Stat/Stat';
import Advertisement from './Advertisement/Advertisement';
import CatagoryShow from './CatagoryShow/CatagoryShow';
import HeaderBanner from './HeaderBanner/HeaderBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='grid justify-items-center	'>

                <h1 className="text-5xl bebus">SELECT ANY TO EXPLORE YOUR DREAM CAR</h1>
                <CatagoryShow></CatagoryShow>
                <Stat className="my-5"></Stat>
                <Advertisement></Advertisement>
            </div>
        </div>
    );
};

export default Home;