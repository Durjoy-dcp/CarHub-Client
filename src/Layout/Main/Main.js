import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../../Pages/Shared/NavHeader/NavHeader';
import '../../Pages/Shared/shared.css'

const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;