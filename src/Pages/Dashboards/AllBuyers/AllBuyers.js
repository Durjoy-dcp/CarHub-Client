import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const uri = `https://car-hub-server-pi.vercel.app/user?email=${user.email}&&role=Buyer`
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['user', user.email],
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
    const handleVerify = seller => {
        fetch(`https://car-hub-server-pi.vercel.app/verify?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                if (data.msg) {
                    toast.success("verified")
                    refetch()
                }
            })
    }
    const handleToDelete = seller => {
        fetch(`https://car-hub-server-pi.vercel.app/userdelet?email=${user.email}&&selleremail=${seller.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.msg) {
                    toast.success("Deleted")
                    refetch()
                }
            })
    }
    console.log(sellers)
    return (
        <div className='m-5 font'>
            <h1 className='text-5xl bebus my-10 '>All sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, idx) => <tr className='' key={seller._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={seller.img} />
                                        </div>
                                    </div>
                                </td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-primary btn-sm' onClick={() => handleToDelete(seller)}>Delete</button></td>

                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;