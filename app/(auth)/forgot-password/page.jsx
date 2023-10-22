"use client"

import React from 'react'

import Image from 'next/image'
import Google from '@/public/google.svg'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useRouter } from 'next/navigation'

export const ForgotPWD= () => {

    const router = useRouter();

  return (
    <div action="" className='h-screen bg-white px-[104px] flex items-stretch justify-center py-20'>
            <div className='flex flex-col justify-between items-center gap-14'>
                <div className='flex flex-col gap-6 w-96 '>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-display-md font-bold text-gray-800'>Forgot your pad?</h2>
                        <p className='text-md font-normal text-gray-500'>Don’t worry, we have your back!</p>
                    </div>
                    <form className='flex flex-col gap-10'>
                            <div className='space-y-[6px]'>
                                <Label htmlFor='email'>Email</Label>
                                <Input id='email' placeholder='Enter email' />
                            </div>
                            <Button onClick={()=>{console.log(1)}}>Reset my password</Button>
                    </form>
                </div>
                <div className='text-sm font-medium'>
                <Button variant={'link'}  className='pl-1 text-blue-gray-600 cursor-pointer' onClick={()=>{
                        router.push('/login')
                    }}>Back to Sign in</Button>
                </div>
            </div>
        </div>
  )
}

export default ForgotPWD