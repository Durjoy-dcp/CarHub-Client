import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../assets/logo.png'

const NavHeaderDashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleToLogOut = () => {
        console.log("it is clicked")
        logOut()
            .then((res) => {
                console.log('logout')
                // console.log(user)
            })
            .catch(() => { })
    }

    const menu = <>
        <li className='my-2 mx-2 font-bold text-white md:text-black'><Link to='/blog'>Blog</Link></li>
        <li className='my-2 mx-2 font-bold text-white md:text-black'><Link to='/catagory'>Catagory</Link></li>
        <li className='my-2 mx-2 font-bold text-white md:text-black'><Link to='/dashboard'>Dashboard</Link></li>
        {
            (user && user?.uid) ?
                < li className='my-2 mx-2 font-bold text-white md:text-black'><button className='btn btn-accent  rounded-lg  btn-outline' onClick={handleToLogOut} >Log Out</button></li> :
                <>

                    <li className='my-2 mx-2 font-bold text-white md:text-black'><Link to='/login'>Login</Link></li>
                    <li className='my-2 mx-2 font-bold text-white md:text-black'><Link to='/signup'>Sign Up</Link></li>
                </>
        }

    </>
    return (
        <div className='  text-white bg-slate-800 md:bg-white  shadow-lg'>
            <div className=" navbar  container mx-auto">
                <div className="navbar-start " >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className=" my-2 flex md:hidden items-center font-bold text-white text-xl"> <img src={logo} alt="" className='h-14 w-14' />Car<span className=' text-yellow-500 '>Hub</span></Link>
                </div>
                <div className=" navbar-center lg:navbar-end hidden  md:flex">
                    <ul className="menu menu-horizontal  p-0">
                        {menu}
                    </ul>
                </div>
                {/* <div className="">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default NavHeaderDashboard;