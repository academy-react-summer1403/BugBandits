import React from 'react';
import { Log } from '../../Components/Common/Register&Login';
import { Outlet } from 'react-router-dom';

const LogLayout = () => {
    return (
        <>
            <Log/>
            <Outlet/>
        </>
    );
}

export default LogLayout;
