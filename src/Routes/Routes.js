import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main/Main';
import AllCars from '../Pages/AllCars/AllCars';
import Blog from '../Pages/Blog/Blog';
import AddAProduct from '../Pages/Dashboards/AddAProduct/AddAProduct';
import AllBuyers from '../Pages/Dashboards/AllBuyers/AllBuyers';
import AllSellers from '../Pages/Dashboards/AllSellers/AllSellers';
import MyProducts from '../Pages/Dashboards/MyProducts/MyProducts';
import MyWishList from '../Pages/Dashboards/MyWishList/MyWishList';
import ReportedItem from '../Pages/Dashboards/ReportedItem/ReportedItem';
import Welcome from '../Pages/Dashboards/WelCome/Welcome';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyOrders from '../Pages/MyOrders/MyOrders';
import Signup from '../Pages/Signup/Signup';
import Payment from '../Payment/Payment';
import AdminRoute from './AdminRoute';
import Private from './Private/Private';
import SellerRoute from './SellerRoute';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
                },
                {
                    path: '/catagory/:id',
                    element: <AllCars></AllCars>,
                    loader: async ({ params }) => fetch(`https://car-hub-server-pi.vercel.app/catagory/${params.id}`)
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                }

            ]
        },
        {
            path: '/dashboard',
            element: <Private><DashboardLayout></DashboardLayout></Private>,
            children: [
                {
                    path: '/dashboard',
                    element: <Welcome></Welcome>
                },
                {
                    path: '/dashboard/allsellers',
                    element: <AdminRoute><AllSellers></AllSellers> </AdminRoute>
                },
                {
                    path: '/dashboard/allbuyers',
                    element: <AdminRoute><AllBuyers></AllBuyers> </AdminRoute>
                },
                {
                    path: '/dashboard/reporteditem',
                    element: <AdminRoute><ReportedItem></ReportedItem> </AdminRoute>
                },
                {
                    path: '/dashboard/addaproduct',
                    element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
                },
                {
                    path: '/dashboard/mywishlist',
                    element: <Private><MyWishList></MyWishList></Private>
                },
                {
                    path: '/dashboard/myorders',
                    element: <Private> <MyOrders></MyOrders></Private>
                },
                {

                    path: '/dashboard/payment/:id',
                    element: <Payment></Payment>,
                    loader: async ({ params }) => fetch(`https://car-hub-server-pi.vercel.app/bookings/${params.id}`)
                },
            ]

        }


    ]
)

export default router;