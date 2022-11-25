import React, { Children, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState('');
    const [loading, seLoading] = useState(true);
    const [isverified, setIsVerified] = useState(false);
    console.log(isverified)
    const gProvider = new GoogleAuthProvider();

    const signup = (email, password) => {
        seLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        seLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const updateInfo = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, gProvider)
    }
    const saveUser = (name, email, role, img) => {
        const user = {
            name,
            email,
            role,
            img
        }
        return fetch('http://localhost:5000/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setuser(currentUser)
            seLoading(false)

        })
        return () => unsubscribe();
    }, [])

    const authInfo = { signup, login, user, loading, logOut, updateInfo, googleSignIn, saveUser, isverified, setIsVerified }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>

    );
};

export default AuthProvider;