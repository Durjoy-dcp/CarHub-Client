import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import Moment from 'react-moment';
import { AuthContext } from '../../../context/AuthProvider';
const ProductCard = ({ product, children }) => {
    const { currentYear } = useContext(AuthContext);
    const { condition, date, name, location, img, orginalprice, price, sellername, year, catagory, _id, description, verifiedSeller } = product
    const used_year = currentYear - year;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl max-w-sm">
            <figure><img src={img} className=" h-64  " alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.length > 60 ? description.slice(0, 60) + '...' : description}</p>
                <div className='flex justify-between '>
                    <div className=' '>
                        <p className=''><FaMapMarkerAlt className=' mr-1 inline ' />{location}</p>
                    </div>

                    <div>
                        <p className='px-1 mx-2'>{used_year === 0 ? '1 Year Running ' : used_year + 1 + ' years Running '}</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl font-bold">${price}
                        <span className="text-xs font-bold bg-blue-500 mx-1 rounded text-white p-1"> Orginal : ${orginalprice} </span></p>
                </div>
                <div>
                    <p>Condition : {condition}</p>
                    <p >Catagory:<span className='bg-blue-500 text-white mx-1 p-1 text-xs rounded'>{catagory}</span> </p>
                </div>
                <div >
                    <p className='gray-text'>{sellername}<span>{verifiedSeller && <FaCheckCircle className=" mx-2 text-blue-600 inline " />}</span> </p>
                    <p className='text-xs text-end'>Posted <Moment fromNow>{date}</Moment></p>

                </div>
                <div className="card-actions justify-center ">

                    {
                        children
                    }
                </div>
            </div>
        </div >
    );
};

export default ProductCard;