import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useSeller from '../hooks/UseSeller/useSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email)

    const location = useLocation();
    if (user && isSeller) {
        return children;
    }
    if (loading || sellerLoading) {
        return <progress className="progress w-56"></progress>
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;