import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const uri = `http://localhost:5000/product?email=${user.email}`
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user.email],
        queryFn: async () => {
            try {


                const res = await fetch(uri, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }

    })
    console.log(products)
    if (isLoading) {
        console.log("here")
        return <Spinner></Spinner>
    }
    const handleDelete = car => {
        fetch(`http://localhost:5000/car/${car._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Data deleted')

                }
            })
    }
    const handleAvailable = car => {
        fetch(`http://localhost:5000/available`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(car),
        })
            .then(res => res.json())
            .then(data => {
                refetch()

            })
    }
    const handleSold = car => {
        fetch(`http://localhost:5000/sold`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(car),
        })
            .then(res => res.json())
            .then(data => {
                refetch()

            })
    }
    const handleToAddvertise = car => {
        const advertise = {
            name: car.name,
            email: car.email,
            price: car.price,
            img: car.img,
            catagory: car.catagory,
            orginalprice: car.orginalprice,
            year: car.year,
            location: car.location,
            phone: car.phone,
            serial: car._id,
            condition: car.condition,
            description: car.description,
            sellername: car.displayName,
            verifiedSeller: car.verifiedSeller,
            issold: false,
            newOwner: "",
            txnid: ""

        }

        fetch('http://localhost:5000/advertise', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Added to advertisement")

                } else {


                }
            })

    }

    return (
        <div>
            <h1 className='text-6xl bebus my-3 mx-3'>My Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>

                {
                    products.map(product => <ProductCard key={product._id} product={product}>

                        {
                            (product?.issold) ? <div className='w-full'> <p className='text-xs gray-text'> Status: Already Sold</p> <button className='m-1 p-1 w-full bg-blue-400 rounded btn-circle text-xl text-white text-center ' onClick={() => handleAvailable(product)}>Mark As Available</button> <div> <button className='btn btn-primary w-full  m-1 p-1' onClick={() => handleDelete(product)}>DELETE</button></div></div> : <div className='w-full'> <p className='text-xs gray-text'> Status: Available</p> <p className='m-1 btn p-1 w-full bg-blue-400 rounded btn-circle text-xl text-white text-center ' onClick={() => handleSold(product)}> Mark As Sold</p> <div> <button className='btn btn-primary w-full  m-1 p-1' onClick={() => handleDelete(product)}>DELETE</button></div><div> <button className='btn btn-secondary w-full  m-1 p-1' onClick={() => handleToAddvertise(product)}>Advertise</button></div></div>
                        }
                    </ProductCard>)
                }

            </div>


        </div>
    );
};

export default MyProducts;