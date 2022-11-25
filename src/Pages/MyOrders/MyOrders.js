import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import OrderCard from '../Shared/OrderCard/OrderCard';
import Spinner from '../Shared/Spinner/Spinner';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const uri = `http://localhost:5000/bookinglist?email=${user.email}`
    const { data: cars = [], isLoading } = useQuery({
        queryKey: ['wishlist', user.email],
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
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1 className='text-6xl bebus my-3 mx-3'>My Orders</h1>

            <div className="w-full ">
                {
                    cars.map((car, idx) => <OrderCard key={car._id} idx={idx} car={car}></OrderCard>)
                }

            </div>
        </div>
    );
};

export default MyOrders;