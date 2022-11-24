import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { signup, login, user, loading, logOut, updateInfo } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imgbb;
    const [signUpError, setSignUpError] = useState('');
    const handleToSubmit = data => {
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
                    signup(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imageData.data.url
                            }

                            updateInfo(userInfo)
                                .then(() => {
                                    console.log(user)
                                })
                                .catch(() => { })

                        })
                        .catch(error => {
                        })
                }
            })

    }
    const [buyorseller, setBuyOrSerller] = useState('Buyer');
    return (
        <div>
            <form onSubmit={handleSubmit(handleToSubmit)} className='border rounded-lg  m-3.5 container mx-auto max-w-md p-3'>
                <h4 className="text-2xl text-center my-2 popin font-bold">Sign Up</h4>

                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered w-full "  {...register("name")} />

                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered w-full" {...register("email", {
                        required: "Provide a email",

                    })} type="email" placeholder="Email" />
                    {errors.email && <p className='text-red-600 py-2' role="alert">{errors.email?.message}</p>}


                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input className="input input-bordered w-full  " {...register("password",
                        {
                            minLength: { value: 6, message: "Provide at least 6 characters" },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message: "Password Must Strong"
                            }
                        }
                    )} type="password" placeholder="Password" />
                    {errors.password && <p className=' text-red-600 py-2' role="alert">{errors.password?.message}</p>}

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Select what you are</span>
                    </label>
                    <div className='flex justify-evenly my-2'>


                        <div className='flex'>
                            <input {...register("buyeorseller")} onClick={(e) => setBuyOrSerller
                                (e.value)} className="radio radio-primary mx-2" type="radio" value="Buyer" defaultChecked={buyorseller === 'Buyer' ? true : false} />
                            <p>Buyer</p>

                        </div>
                        <div className='flex'>
                            <input {...register("buyeorseller")} onClick={(e) => setBuyOrSerller
                                (e.value)} className="radio radio-primary mx-2" type="radio" value="Seller" defaultChecked={buyorseller === 'Seller' ? true : false} />

                            <p>Seller</p>

                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Add a Profile Picture</span>
                        </label>
                        <input className="file-input file-input-bordered mb-5 file-input-sm w-full" {...register("img", {
                            required: "Provide a Image"
                        })} type="file" placeholder="image" />


                    </div>

                </div>

                <div className='w-full text-center my-2'>

                    <input type="submit" className='btn btn-gray   w-full ' value="Sign Up" />
                </div>
                <p className='mt-3 text-center'>Already have an account?<Link to='/login' className='text-secondary mx-2'>Login</Link></p>
                {
                    signUpError && <p className='text-red-600'>{signUpError}</p>
                }
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Signup;