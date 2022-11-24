import { useEffect, useState } from "react";


const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoadin] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/user/admin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setIsAdmin(data.isAdmin)
                setAdminLoadin(false)
            })

    }, [email])
    return [isAdmin, adminLoading]
};

export default useAdmin;