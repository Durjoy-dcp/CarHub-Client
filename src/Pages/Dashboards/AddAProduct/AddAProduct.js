import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddAProduct = () => {
    // console.log("here")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, isverified, setUserRoll, logOut } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imgbb;

    console.log(isverified)
    console.log(user);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleAddProduct = (data) => {
        console.log(data.img[0])

        console.log(data)
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {


                if (imageData.success) {

                    const product = {
                        name: data.name,
                        email: user.email,
                        price: data.price,
                        img: imageData.data.url,
                        catagory: data.catagory,
                        orginalprice: data.orginalprice,
                        year: data.year,
                        location: data.location,
                        phone: data.phone,
                        condition: data.condition,
                        description: data.description,
                        sellername: user.displayName,
                        verifiedSeller: isverified,
                        issold: false,
                        newOwner: "",
                        txnid: ""

                    }

                    fetch('https://car-hub-server-pi.vercel.app/productadd', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => {
                            if (res.status === 403) {
                                setUserRoll('Buyer')
                                logOut()
                                    .then(() => {
                                        localStorage.removeItem("accessToken");
                                        navigate(from, { replace: true })
                                    })
                            }
                            return res.json()
                        })
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/myproducts')

                        })
                }
            })
    }

    return (
        <div>
            <h1 className='text-6xl bebus my-3 mx-3'>Add A Product</h1>
            <div className='border rounded-lg  m-3.5 container mx-auto max-w-md p-3'>


                <form onSubmit={handleSubmit(handleAddProduct)}>


                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Product Name</span>

                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered w-full "  {...register("name", {
                            required: "Provide a Name",

                        })} />
                        {errors.name && <p className='text-red-600 py-2' role="alert">{errors.name?.message}</p>}


                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered w-full "  {...register("price", {
                            required: "Provide a Price",

                        })} />
                        {errors.price && <p className='text-red-600 py-2' role="alert">{errors.price?.message}</p>}

                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Orginal Price</span>

                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered w-full "  {...register("orginalprice", {
                            required: "Provide a Price",

                        })} />
                        {errors.price && <p className='text-red-600 py-2' role="alert">{errors.price?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>

                        <select className="select select-bordered  w-full my-2 " {...register("condition")}>
                            <option >Excellent</option>
                            <option defaultValue>Good</option>
                            <option>Fair</option>

                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Year Of purchase</span>
                        </label>

                        <select className="select select-bordered  w-full my-2 " defaultValue={'2019'}  {...register("year", { required: true })}>
                            <option value="2018" >2018</option>
                            <option value="2019" >2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>

                            <option value="2022" >2022</option>

                        </select>
                        <p className='text-sm gray-text'>We don't recommend to sell a car which is used more than 5years</p>


                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>

                        <select className="select select-bordered  w-full my-2 " {...register("location")}>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Sylhet</option>
                            <option>Dinajpur</option>

                        </select>


                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Catagory</span>
                        </label>

                        <select className="select select-bordered  w-full my-2 " {...register("catagory")}>
                            <option>sedan</option>
                            <option>sports</option>
                            <option>suv</option>


                        </select>


                    </div>


                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Phone Number</span>

                        </label>
                        <input type="text" placeholder="Number" className="input input-bordered w-full "  {...register("phone", {
                            required: "Provide a phone number",

                        })} />
                        {errors.phone && <p className='text-red-600 py-2' role="alert">{errors.phone?.message}</p>}

                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Add a Profile Picture</span>
                        </label>
                        <input className="file-input file-input-bordered mb-5 file-input-sm w-full" {...register("img", {
                            required: "Provide a Image"
                        })} type="file" placeholder="image" />


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio" {...register("description", {
                            required: "Provide Some informations",

                        })}></textarea>

                    </div>
                    <div className='w-full text-center my-2'>

                        <input type="submit" className='btn btn-gray   w-full ' value="Add" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddAProduct;