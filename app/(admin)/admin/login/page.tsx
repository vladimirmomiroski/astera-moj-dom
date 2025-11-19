"use client"

import React, { FormEvent } from 'react'
import Logo from '@/shared/ui/logo/logo'

const Login = () => {

    const validateLoginCredentials = (e: FormEvent) => {
        e.preventDefault()
        console.log("on submit")
    }

    return (
        <section className='h-screen flex flex-row items-center'>
            <form onSubmit={validateLoginCredentials} className="max-w-sm mx-auto w-56 sm:w-96">
                <div className='mb-8 flex justify-center'>
                    <Logo width={170} height={170} src={"/logo1.png"} />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                    <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                    <input type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
                </div>
                <button type="submit" className="btn bg-gold text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>
        </section>
    )
}

export default Login