import { Button, FieldError, Input, Spinner, TextField } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from '../Services/AuthServices'
import { Link, useNavigate } from 'react-router-dom'
import { schema } from '../Schema/LoginSchema'
import { AuthContext } from '../Context/AuthContext'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const { setIsLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    let { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onBlur'
    })

    async function sendData(userData) {
        setLoading(true)
        navigate('/')
        setLoading(false)

        // setLoading(true)
        // const response = await signIn(userData)
        // setLoading(false)

        // if (response.success === true) {
        //     localStorage.setItem('token', response.token)
        //     setIsLoggedIn(response.token)
        //     navigate('/login')
        // }
        // else
        //     setApiError(response.errors)
    }


    return (
        <>
            <div className='bg-[#90CAF9] rounded-2xl shadow-2xl py-10 px-6 min-w-md'>
                <h2 className='text-center mb-4 font-medium text-3xl'>Login Now!</h2>
                <form onSubmit={handleSubmit(sendData)} className='flex flex-col gap-4'>
                    <TextField aria-label="EmailTextBox" isInvalid={Boolean(errors.email)}>
                        <Input aria-label="Email" type='email' placeholder='Email' {...register('email')} />
                        <FieldError>{errors.email?.message}</FieldError>
                    </TextField>
                    <TextField aria-label="PasswordTextBox" isInvalid={Boolean(errors.password)}>
                        <Input aria-label="Password" type='password' placeholder='Password' {...register('password')} />
                        <FieldError>{errors.password?.message}</FieldError>
                    </TextField>
                    <Button type='submit' variant="tertiary" className='w-full' isDisabled={loading}>
                        {loading ? (
                            <>
                                <Spinner size="sm" color="current" />
                                <span>Loading...</span>
                            </>
                        ) : (
                            "Login"
                        )}
                    </Button>
                    <div className='font-medium'>Don't Have an Account? Please, <Link className='text-blue-700' to={'/register'}>register</Link></div>
                    {apiError && <span className='text-center text-red-500'>{apiError}</span>}
                </form>
            </div>
        </>
    )
}
