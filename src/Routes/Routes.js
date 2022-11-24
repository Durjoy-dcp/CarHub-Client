import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main/Main';
import AddAProduct from '../Pages/Dashboards/AddAProduct/AddAProduct';
import AllBuyers from '../Pages/Dashboards/AllBuyers/AllBuyers';
import AllSellers from '../Pages/Dashboards/AllSellers/AllSellers';
import MyProducts from '../Pages/Dashboards/MyProducts/MyProducts';
import MyWishList from '../Pages/Dashboards/MyWishList/MyWishList';
import Welcome from '../Pages/Dashboards/WelCome/Welcome';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import AdminRoute from './AdminRoute';
import Private from './Private/Private';
import SellerRoute from './SellerRoute';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
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
                    path: '/login',
                    element: <Login></Login>
                }

            ]
        },
        {
            path: '/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children: [
                {
                    path: '/dashboard',
                    element: <Welcome></Welcome>
                },
                {
                    path: '/dashboard/allsellers',
                    element: <AllSellers></AllSellers>
                },
                {
                    path: '/dashboard/allbuyers',
                    element: <AllBuyers></AllBuyers>
                },
                {
                    path: '/dashboard/addaproduct',
                    element: <AddAProduct></AddAProduct>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <MyProducts></MyProducts>
                },
                {
                    path: '/dashboard/mywishlist',
                    element: <MyWishList></MyWishList>
                },
            ]

        }


    ]
)

export default router;