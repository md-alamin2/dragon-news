import React from 'react';
import Navbar from '../Components/NavBar/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200 h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 lg:container mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Auth;