import React from 'react';
import Footer from '../Footer/Footer';
import Stat from '../Shared/Stat/Stat';
import Advertisement from './Advertisement/Advertisement';
import CatagoryShow from './CatagoryShow/CatagoryShow';
import Feedback from './Feedback/Feedback';
import HeaderBanner from './HeaderBanner/HeaderBanner';
import './Home.css'
const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='container   mx-auto'>

                <h1 className="text-3xl   bebus p-3  ">BROWSE BY CAR TYPE </h1>
                <hr />
            </div>
            <div className='	'>

                <CatagoryShow></CatagoryShow>
                <Advertisement></Advertisement>
                <div className='grid justify-items-center'>

                    <Stat className="my-5"></Stat>
                </div>
            </div>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;