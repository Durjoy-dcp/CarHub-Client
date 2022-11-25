import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const uri = `http://localhost:5000/product?email=${user.email}`
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', user.email],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(products)
    if (isLoading) {
        console.log("here")
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h1 className='text-6xl bebus my-3 mx-3'>My Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>

                {
                    products.map(product => <ProductCard key={product._id} product={product}><button>ME</button> </ProductCard>)
                }

            </div>


        </div>
    );
};

export default MyProducts;