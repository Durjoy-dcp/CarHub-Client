import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handleToSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log('successfully loggd in ')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button className='btn btn-outline  w-full' onClick={handleToSignIn}>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;