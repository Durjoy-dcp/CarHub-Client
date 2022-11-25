import React, { useContext } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider';
const ProductCard = ({ product, children }) => {
    const { currentYear } = useContext(AuthContext);
    const { condition, date, name, location, img, orginalprice, price, sellername, year, _id, description, verifiedSeller } = product
    const used_year = currentYear - year;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl max-w-sm">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.length > 60 ? description.slice(0, 60) + '...' : description}</p>
                <div className='grid grid-cols-2 '>
                    <div className=' '>

                        <p className='text-xs'><FaMapMarkerAlt className=' mr-1 inline ' />{location}</p>
                    </div>

                    <div>
                        <p className='text-xs px-2'>{used_year === 0 ? '1 Year Running ' : used_year + 1 + ' years Running '}</p>

                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;