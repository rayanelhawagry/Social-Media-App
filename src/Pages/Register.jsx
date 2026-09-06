import { Button, FieldError, Input, Spinner, TextField } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { signUp } from '../Services/AuthServices'
import { useNavigate } from 'react-router-dom'


const schema = zod.object({
    name: zod.string().nonempty('Name is Required').min(3, 'Name must be at least 3 letters').max(20, 'Name must be less than 20'),
    email: zod.string().nonempty('Email is Required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid Email'),
    password: zod.string().nonempty('Password is Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Invalid Password'),
    rePassword: zod.string().nonempty('Re-Password is Required'),
    dateOfBirth: zod.coerce.date('Date is Required'),
    gender: zod.string().nonempty('Gender is Required')
}).refine((data) => data.password === data.rePassword, { path: ['rePassword'], message: `Passwords don't match` })


export default function Register() {
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const navigate = useNavigate()

    let { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            dateOfBirth: '',
            gender: ''
        },
        resolver: zodResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onBlur'
    })

    async function sendData(userData) {
        setLoading(true)
        const response = await signUp(userData)
        setLoading(false)

        if (response.success === true) {
            navigate('/Login')
        } else {
            setApiError(response.errors)
        }
    }


    return (
        <>
            <div className='bg-[#90CAF9] rounded-2xl shadow-2xl py-10 px-6 min-w-md'>
                <h2 className='text-center mb-4 font-medium text-3xl'>Register Now!</h2>
                <form onSubmit={handleSubmit(sendData)} className='flex flex-col gap-4'>
                    <TextField aria-label="NameTextBox" isInvalid={Boolean(errors.name)}>
                        <Input aria-label="Name" type='text' placeholder="Name" {...register('name')} />
                        <FieldError>{errors.name?.message}</FieldError>
                    </TextField>
                    <TextField aria-label="EmailTextBox" isInvalid={Boolean(errors.email)}>
                        <Input aria-label="Email" type='email' placeholder="Email" {...register('email')} />
                        <FieldError>{errors.email?.message}</FieldError>
                    </TextField>
                    <TextField aria-label="PasswordTextBox" isInvalid={Boolean(errors.password)}>
                        <Input aria-label="Password" type='password' placeholder="Password" {...register('password')} />
                        <FieldError>{errors.password?.message}</FieldError>
                    </TextField>
                    <TextField aria-label="RePasswordTextBox" isInvalid={Boolean(errors.rePassword)}>
                        <Input aria-label="RePassword" type='password' placeholder="Re-Password" {...register('rePassword')} />
                        <FieldError>{errors.rePassword?.message}</FieldError>
                    </TextField>
                    <div className='flex justify-between gap-3'>
                        <TextField className='w-[50%]' aria-label="TextBox" isInvalid={Boolean(errors.dateOfBirth)}>
                            <Input className='w-full' aria-label="DateOfBirth" type='date' placeholder="Birth Date" {...register('dateOfBirth')} />
                            <FieldError>{errors.dateOfBirth?.message}</FieldError>
                        </TextField>
                        <TextField className='w-[50%] ' aria-label="TextBox" isInvalid={Boolean(errors.gender)}>
                            <select {...register('gender')} className='w-full outline-[#0485F6] focus:outline-2 bg-white rounded-xl py-2 px-3 text-[0.85rem] flex justify-center hover:bg-gray-200 focus:bg-white duration-500'>
                                <option value="" disabled hidden>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <FieldError>{errors.gender?.message}</FieldError>
                        </TextField>
                    </div>
                    <Button type='submit' variant="tertiary" className='w-full' isDisabled={loading}>
                        {loading ? (
                            <>
                                <Spinner size="sm" color="current" />
                                <span>Loading...</span>
                            </>
                        ) : (
                            "Register"
                        )}
                    </Button>
                    {apiError && <span className='text-center text-red-500'>{apiError}</span>}
                </form>
            </div>
        </>
    )
}
