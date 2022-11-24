import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Dashboards from '../Pages/Dashboards/Dashboards';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';

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
            element: <Dashboards></Dashboards>,

        }


    ]
)

export default router;