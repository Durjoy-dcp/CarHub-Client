import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/UseAdmin/UseAdmin';
import useSeller from '../hooks/UseSeller/useSeller';
import NavHeader from '../Pages/Shared/NavHeader/NavHeader';
import NavHeaderDashboard from '../Pages/Shared/NavHeaderDashboard/NavHeaderDashboard';
import logo from '../assets/logo.png'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <NavHeaderDashboard></NavHeaderDashboard>
                    <Outlet></Outlet>

                    <div className=''>
                        <label tabIndex={0} className="btn fixed bg-slate-800  text-white top-1/2 left-0 w-16  lg:hidden" htmlFor="dashboardDrawer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-64  md:w-80 bg-[#1D212B]    text-white ">
                        <li>  <Link to='/' className=" my-2 flex items-center font-bold text-white text-3xl"> <img src={logo} alt="" className=' h-14 w-14 md:h-20 md:w-20' />Car<span className=' text-yellow-500 '>Hub</span></Link></li>

                        {
                            isSeller &&
                            <>


                                <h1>This is seller</h1>
                                <li className='hover-li'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='hover-li'><Link to='/dashboard/addaproduct'>Add A Product</Link></li>

                            </>

                        }
                        {
                            isAdmin && <>
                                <li className='hover-li'><Link to='/dashboard/allbuyers'>All Buyers </Link></li>
                                <li className='hover-li'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='hover-li'><Link to='/dashboard/reporteditem'>Reported Items</Link></li>
                            </>


                        }
                        {
                            (!isAdmin && !isSeller) &&
                            <>
                                <li className='hover-li'><Link to='/dashboard/mywishlist'>My WishList </Link></li>
                                <li className='hover-li'><Link to='/dashboard/myorders'>My Orders </Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;