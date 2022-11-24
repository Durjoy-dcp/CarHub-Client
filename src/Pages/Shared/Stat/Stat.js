import React from 'react';

const Stat = () => {
    return (
        <div className="stats shadow  ">

            <div className="stat ">
                <div className="stat-figure text-primary">

                </div>
                <div className="stat-title font-medium ">Total Visitors</div>
                <div className="stat-value text-primary ">25.6K</div>
                <div className="stat-desc  font-medium">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title font-medium">Buy & Selles Up to</div>
                <div className="stat-value text-secondary">$ 2.6M</div>
                <div className="stat-desc font-medium">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">

                    </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title font-medium">Good Reviews</div>

            </div>

        </div>
    );
};

export default Stat;