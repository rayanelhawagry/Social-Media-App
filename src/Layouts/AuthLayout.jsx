import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <>
            <div className="bg-[#E3F2FD] h-screen flex justify-center items-center">
                <Outlet />
            </div>
        </>
    )
}
