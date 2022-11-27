import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useToken from '../../../hooks/useToken/useToken';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const { saveUser } = useContext(AuthContext)
    const [loggedUserEmail, setLoggedUserEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(loggedUserEmail);
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (token) {
            toast('Logged in  Succesfully');
            navigate(from, { replace: true })
            console.log("dhukse")
        }
    }, [token])
    const handleToSignIn = () => {
        googleSignIn()
            .then(res => {
                saveUser(res.user.displayName, res.user.email, 'Buyer', res.user.photoURL)
                    .then(result => result.json())
                    .then(success => {
                        console.log(success)
                        console.log(res.user)
                        setLoggedUserEmail(res.user.email)
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