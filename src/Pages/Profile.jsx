import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

export default function Profile() {
    let { counter, setCounter } = useContext(CounterContext)


    return (
        <>
            <h1 className='text-6xl'>{counter}</h1>
        </>
    )
}
