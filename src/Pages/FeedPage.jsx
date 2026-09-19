import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

export default function FeedPage() {
    let { counter, setCounter } = useContext(CounterContext)


    return (
        <>
            <button className='bg-amber-800 p-5 m-5' onClick={() => setCounter(counter += 1)}>Click</button>
            <h1 className='text-6xl'>{counter}</h1>
        </>
    )
}
