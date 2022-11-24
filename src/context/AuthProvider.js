import React, { Children, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState();
    const [loading, seLoading] = useState(true);

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
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setuser(currentUser)
                seLoading(false)
            }
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { signup, login, user, loading, logOut, updateInfo }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>

    );
};

export default AuthProvider;