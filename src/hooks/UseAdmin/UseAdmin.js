import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoadin] = useState(true);
    const { userRoll, setUserRoll } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/user/admin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setIsAdmin(data.isAdmin)
                if (data.isAdmin) {
                    setUserRoll('Admin')
                }
                setAdminLoadin(false)
            })

    }, [email])
    return [isAdmin, adminLoading]
};

export default useAdmin;