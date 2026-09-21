import React from 'react'
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-200 pt-5">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
