import React from 'react';
import Footer from '../Footer/Footer';
import Stat from '../Shared/Stat/Stat';
import Advertisement from './Advertisement/Advertisement';
import Brands from './Brands/Brands';
import CatagoryShow from './CatagoryShow/CatagoryShow';
import Feedback from './Feedback/Feedback';
import HeaderBanner from './HeaderBanner/HeaderBanner';
import './Home.css'
import SecureBanner from './Securebanner/SecureBanner';
const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='container   mx-auto'>

                <h1 className="text-3xl   bebus p-3  " data-aos="fade-right">BROWSE BY CAR TYPE </h1>
                <hr />
            </div>
            <div className='	'>

                <CatagoryShow></CatagoryShow>
                <Advertisement></Advertisement>
                <SecureBanner></SecureBanner>
            </div>
            <div className='container   mx-auto'>

                <h1 className="text-3xl   bebus p-3  " data-aos="fade-right">TOP brands of the month </h1>
                <hr />
            </div>
            <Brands></Brands>
            <Feedback></Feedback>
            <div className='grid justify-items-center'>
                <Stat className="my-5"></Stat>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;