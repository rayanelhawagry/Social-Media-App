import { Button, FieldError, Input, ListBox, Select, TextField } from '@heroui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
    let { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            dateOfBirth: '',
            gender: ''
        }
    })

    function sendData(userData) {
        console.log(userData);
    }

    return (
        <>
            <div className='bg-[#90CAF9] rounded-2xl shadow-2xl py-10 px-6 min-w-md'>
                <h2 className='text-center mb-4 font-medium text-3xl'>Register Now!</h2>
                <form onSubmit={handleSubmit(sendData)} className='flex flex-col gap-4'>
                    <TextField aria-label="TextBox" isInvalid={Boolean(errors.name)}>
                        <Input aria-label="Name" type='text' placeholder="Name" {...register('name', { required: 'Name is Required', minLength: { value: 3, message: 'name must be at least 3 letters' } })} />
                        <FieldError>{errors.name?.message}</FieldError>
                    </TextField>
                    <Input aria-label="Email" type='email' placeholder="Email" {...register('email')} />
                    <Input aria-label="Password" type='password' placeholder="Password" {...register('password')} />
                    <Input aria-label="RePassword" type='password' placeholder="Re-Password" {...register('rePassword')} />
                    <div className='flex justify-between gap-3'>
                        <Input aria-label="DateOfBirth" type='date' className='w-[50%]' placeholder="Birth Date" {...register('dateOfBirth')} />
                        {/* Should handle "select gender" UI later... */}
                        <select {...register('gender')}>
                            <option value="male">Male</option>
                            <option value="female">female</option>
                        </select>
                        {/* <Select aria-label="Gender" placeholder="Select your gender" variant="primary" className='w-[50%]' name='gender'>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox {...register('gender')}>
                                    <ListBox.Item value='male' textValue="Male">
                                        Male
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item value='female' textValue="Female">
                                        Female
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select> */}
                    </div>
                    <Button type='submit' variant="tertiary" className='w-full'>Register</Button>
                </form>
            </div>
        </>
    )
}
