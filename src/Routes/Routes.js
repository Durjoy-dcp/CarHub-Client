import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home';
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
                }
            ]
        }


    ]
)

export default router;