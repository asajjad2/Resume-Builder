"use client"

import React from 'react'

import Image from 'next/image'
import Google from '@/public/google.svg'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useRouter } from 'next/navigation'

export const Login = () => {

    const router = useRouter();

  return (
    <div action="" className='h-screen bg-white px-[104px] flex items-stretch justify-center py-20'>
            <div className='flex flex-col justify-between items-center gap-14'>
                <div className='flex flex-col gap-6 w-96'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-display-md font-bold text-gray-800'>Welcome Back</h2>
                        <p className='text-md font-normal text-gray-500'>Glad to have you back.</p>
                    </div>
                    <form className='flex flex-col gap-10' onSubmit={(e)=>{
                        e.preventDefault();
                    }}>
                        <div className='flex flex-col gap-4'>
                            <div className='space-y-[6px]'>
                                <Label htmlFor='email'>Email</Label>
                                <Input id='email' placeholder='Enter email' />
                            </div>

                            <div className='space-y-[6px]'>
                                <Label htmlFor='password'>Password</Label>
                                <Input id='password' placeholder='Enter password' type='password' />
                            </div>

                            <Button variant={'link'} className='text-primary text-sm font-medium ml-auto cursor-pointer' onClick={()=>{
                                router.push('/forgot-password')
                            }}>Forgot my password</Button>

                        </div>
                        <div id="btns" className='flex flex-col gap-4'>

                            <Button onClick={()=>{console.log(1)}}>Login to my account</Button>
                            <Button variant={'secondary'}>
                                    <Image src={Google} className='mr-4'/>
                                    Sign in with Google
                            </Button>

                        </div>
                    </form>
                </div>
                <div className='text-gray-400 text-sm font-medium'>Don't have an account?
                    <Button variant={'link'}  className='pl-1 text-blue-gray-600 cursor-pointer' onClick={()=>{
                        router.push('/register')
                    }}> Sign up</Button>
                </div>
            </div>
        </div>
  )
}

export default Login