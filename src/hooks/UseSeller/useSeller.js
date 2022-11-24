import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoadin] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/user/seller?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                setSellerLoadin(false)
            })

    }, [email])
    return [isSeller, sellerLoading]

};

export default useSeller;