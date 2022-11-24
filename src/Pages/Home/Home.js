import React from 'react';
import Stat from '../Shared/Stat/Stat';
import HeaderBanner from './HeaderBanner/HeaderBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='grid justify-items-center	'>

                <Stat></Stat>
            </div>
        </div>
    );
};

export default Home;