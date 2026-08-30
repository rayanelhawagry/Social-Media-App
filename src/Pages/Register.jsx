import { Button, Input, ListBox, Select } from '@heroui/react'
import React from 'react'

export default function Register() {
    return (
        <>
            <div className='bg-[#90CAF9] rounded-2xl shadow-2xl py-10 px-6 min-w-md'>
                <h2 className='text-center mb-4 font-medium text-3xl'>Register Now!</h2>
                <form className='flex flex-col gap-4'>
                    <Input aria-label="Name" type='text' placeholder="Name" name='name' />
                    <Input aria-label="Email" type='email' placeholder="Email" name='email' />
                    <Input aria-label="Password" type='password' placeholder="Password" name='password' />
                    <Input aria-label="RePassword" type='password' placeholder="Re-Password" name='rePassword' />
                    <div className='flex justify-between gap-3'>
                        <Input aria-label="DateOfBirth" type='date' className='w-[50%]' placeholder="Birth Date" name='dateOfBirth' />
                        <Select placeholder="Select your gender" variant="primary" className='w-[50%]' name='gender'>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item key={'male'} textValue="Male">
                                        Male
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item key={'female'} textValue="Female">
                                        Female
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                    <Button variant="tertiary" className='w-full'>Register</Button>
                </form>
            </div>
        </>
    )
}
