import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import OrderCard from '../../Shared/OrderCard/OrderCard';
import Spinner from '../../Shared/Spinner/Spinner';

const MyWishList = () => {
    const { user, setUserRoll, logOut } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const uri = `https://car-hub-server-pi.vercel.app/wishlist?email=${user.email}`
    const { data: cars = [], isLoading } = useQuery({
        queryKey: ['wishlist', user.email],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (res.status === 403) {
                setUserRoll('Buyer')
                logOut()
                    .then(() => {
                        navigate(from, { replace: true })
                        localStorage.removeItem("accessToken");
                    })


            }
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(cars)
    return (
        <div>
            <h1 className='text-6xl bebus my-3 mx-3'>My Wishlist</h1>

            <div className="w-full ">
                {
                    cars.map((car, idx) => <OrderCard key={car._id} idx={idx} car={car}></OrderCard>)
                }

            </div>
        </div>
    );
};

export default MyWishList;