import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CounterContext } from '../Context/CounterContext'

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') != null)
    const navigate = useNavigate()
    let {counter} = useContext(CounterContext)

    function logOut() {
        localStorage.removeItem('token')
        navigate('/login')
    }


    return (
        <>
            <nav className="bg-neutral-primary fixed w-full z-20 top-0 inset-s-0 border-b border-default">
                <div className="max-w-5xl flex items-center justify-between mx-auto p-4">
                    <Link className="text-xl text-heading font-semibold">FakeIntimacy, {counter}</Link>
                    <div className="flex gap-6">
                        <NavLink className="py-2 font-medium" to={'/login'}>Sign In</NavLink>
                        <NavLink className="py-2 font-medium" to={'/register'}>Sign Up</NavLink>
                        <Link className="py-2 font-medium cursor-pointer" onClick={logOut}>Log Out</Link>
                        <NavLink className="py-2 font-medium" to={'/profile'}>Profile</NavLink>

                        {/* {isLoggedIn ? <Link className="py-2 font-medium cursor-pointer">Log Out</Link> :
                            <>
                                <NavLink className="py-2 font-medium" to={'/login'}>Sign In</NavLink>
                                <NavLink className="py-2 font-medium" to={'/register'}>Sign Up</NavLink>
                            </>} */}
                    </div>
                </div>
            </nav>
        </>
    )
}
