import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/UseAdmin/UseAdmin';
import useSeller from '../../hooks/UseSeller/useSeller';


const Dashboards = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            {
                isSeller && <h1>This is seller</h1>

            }
            {
                isAdmin && <h1>This is Admin</h1>

            }
            {
                (!isAdmin && !isSeller) && <h1>This is Buyer</h1>

            }

        </div>
    );
};

export default Dashboards;