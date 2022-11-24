import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const { saveUser } = useContext(AuthContext)
    const handleToSignIn = () => {
        googleSignIn()
            .then(res => {
                saveUser(res.user.displayName, res.user.email, 'Buyer', res.user.photoURL)
                    .then(result => result.json())
                    .then(success => {
                        console.log(success)
                        console.log(res.user)

                    })
                    .catch(err => console.log(err))
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