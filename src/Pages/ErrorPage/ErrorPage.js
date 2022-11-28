import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto'>


                <img src={error} className='mx-auto object-cover rounded-lg my-5 ' alt="" />
                <div className='w-full text-center'>

                    <Link to='/' className='btn btn-primary mx-auto'>Go home</Link>
                </div>

            </div>

        </div>
    );
};

export default ErrorPage;