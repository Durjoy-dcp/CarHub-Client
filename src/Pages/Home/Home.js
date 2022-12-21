import React from 'react';
import Footer from '../Footer/Footer';
import Stat from '../Shared/Stat/Stat';
import Advertisement from './Advertisement/Advertisement';
import CatagoryShow from './CatagoryShow/CatagoryShow';
import Feedback from './Feedback/Feedback';
import HeaderBanner from './HeaderBanner/HeaderBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='grid justify-items-center	'>

                <h1 className="text-5xl  bebus m-5 text-center">SELECT ANY TO EXPLORE YOUR DREAM CAR</h1>
                <CatagoryShow></CatagoryShow>
                <Advertisement></Advertisement>
                <Stat className="my-5"></Stat>
            </div>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;