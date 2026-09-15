import * as zod from 'zod'

export const schema = zod.object({
    name: zod.string().nonempty('Name is Required').min(3, 'Name must be at least 3 letters').max(20, 'Name must be less than 20'),
    email: zod.string().nonempty('Email is Required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid Email'),
    password: zod.string().nonempty('Password is Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Invalid Password'),
    rePassword: zod.string().nonempty('Re-Password is Required'),
    dateOfBirth: zod.coerce.date('Date is Required'),
    gender: zod.string().nonempty('Gender is Required')
}).refine((data) => data.password === data.rePassword, { path: ['rePassword'], message: `Passwords don't match` })
