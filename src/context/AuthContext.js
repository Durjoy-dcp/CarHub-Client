import React, { Children, createContext } from 'react';

const AuthProviderContext = createContext();

const AuthContext = ({ children }) => {


    const authInfo = {}

    return (
        <AuthProviderContext.Provider value={authInfo}>
            {
                children
            }

        </AuthProviderContext.Provider>

    );
};

export default AuthContext;