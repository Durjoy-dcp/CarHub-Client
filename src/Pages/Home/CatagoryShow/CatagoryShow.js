import React, { useContext } from 'react';
import sub from '../../../assets/sub.png';
import sedan from '../../../assets/sedan.png';
import sports from '../../../assets/sports.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import useSeller from '../../../hooks/UseSeller/useSeller';
import useAdmin from '../../../hooks/UseAdmin/UseAdmin';
import { AuthContext } from '../../../context/AuthProvider';

const CatagoryShow = () => {

    const subname = 'SUV';
    const sportsname = 'SPORTS';
    const sedanname = 'SEDAN'
    return (
        <div className=' md:grid grid-cols-3 gap-3 '>

            <Link to={`/catagory/${subname}`} className='catagory-link   '>

                <motion.div className="hero my-5  min-h-[500px]  min-w-[600px]  lg:min-w-[400px] md:min-w-[200px] " style={{ backgroundImage: `url(${sub})` }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,


                    }}
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="hero-overlay bg-opacity-60   "></div>
                    <div className="hero-content text-center text-neutral-content ">
                        <div className="max-w-md  ">
                            <h1 className="mb-5 text-5xl font-bold bebus">SUV</h1>


                        </div>
                    </div>
                </motion.div>
            </Link>
            <Link to={`/catagory/${sedanname}`} className='catagory-link '>

                <motion.div className="hero my-5 min-h-[500px] min-w-[600px]  lg:min-w-[400px] md:min-w-[200px] " style={{ backgroundImage: `url(${sedan})` }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,


                    }}
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-white font-bold bebus">SEDAN</h1>


                        </div>
                    </div>
                </motion.div>
            </Link>
            <Link to={`/catagory/${sportsname}`} className='catagory-link '>

                <motion.div className="hero my-5 min-h-[500px] min-w-[600px]  lg:min-w-[400px] md:min-w-[200px] " style={{ backgroundImage: `url(${sports})` }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,


                    }}
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold bebus ">SPORTS</h1>


                        </div>
                    </div>
                </motion.div>
            </Link>



        </div>
    );
};

export default CatagoryShow;