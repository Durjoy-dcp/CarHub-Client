import React from 'react';

const OrderCard = ({ car }) => {

    return (

        <div className=''>


            <div className="card card-side bg-base-100 shadow-xl  mx-autov snap-center  my-2 mx-3">
                <figure><img src={car.img} className="h-64 w-64" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{car.name}</h2>
                    <p>Catagory:{car.catagory}</p>
                    <p>Price : <span className='font-bold'>${car.price}</span></p>
                    <div className="card-actions justify-end">
                        {
                            (car?.issold && car?.newOwner === car.email) ? <div className='text-end'><p className='text-3xl font-bold  bg-blue-300  rounded-lg shadow-lg text-center'>Paid <br /> </p> <p className='text-xl'>I am the new Owner</p></div> : (car?.issold) ? <div><p className='text-3xl bg-blue-300  rounded-lg  font-bold text-end px-3'>Sold Out</p></div> :
                                < button className="btn btn-primary ">Pay</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCard;