import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Common/Header';
import { Footer } from '../../Components/Common/Footer';

const Index = () => {
    return (
       <>
        <Header />
        <Outlet />
        <Footer />
        <Footer/>
       </>
    );
}

export default Index;
