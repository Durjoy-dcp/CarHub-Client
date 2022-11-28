import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const useToken = (email) => {
    const { logOut } = useContext(AuthContext)
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://car-hub-server-pi.vercel.app/jwt?email=${email}`)
                .then(res => {
                    if (res.status === 403) {
                        toast.error('Your account was deleted ,and you will not able to login or crate account with that email')
                        logOut()
                            .then(() => { })
                            .catch(er => console.log(er))
                        localStorage.removeItem("accessToken");

                    }
                    else {
                        return res.json()
                    }
                })
                .then(data => {
                    console.log(data)
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken);
                    }
                })
        }

    }, [email])
    return [token];

};

export default useToken;