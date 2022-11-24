import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, login } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const handleToLogin = (data) => {
        login(data.email, data.password)
            .then(res => console.log(res.user))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleToLogin)} className='border rounded-lg  m-3.5 container mx-auto max-w-md p-3'>
                <h4 className="text-2xl text-center my-2 popin font-bold">Login</h4>



                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered w-full" {...register("email", {
                        required: "Provide a email",

                    })} type="email" placeholder="Email" />



                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input className="input input-bordered w-full  " {...register("password", {
                        required: "Provide a password",

                    })} type="password" placeholder="Password" />


                </div>


                <div className='w-full text-center my-2'>

                    <input type="submit" className='btn btn-gray   w-full ' value="Sign Up" />
                </div>
                <p className='mt-3 text-center'>New to CarHub?<Link to='/signup' className='text-secondary mx-2'>SignUp</Link></p>
                {
                    signUpError && <p className='text-red-600'>{signUpError}</p>
                }
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;