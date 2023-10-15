"use client"

import React from 'react'

import Image from 'next/image'
import Google from '@/public/google.svg'

import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Register = () => {

    const router = useRouter();

  return (
    <div action="" className='bg-white px-[104px] flex items-center justify-center py-20'>
            <div className='flex flex-col justify-between items-center gap-14'>
                <div className='flex flex-col gap-6 w-96 '>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-display-md font-bold text-gray-800'>Create an account</h2>
                        <p className='text-md font-normal text-gray-500'>Let's get started to building the perfect resume!</p>
                    </div>
                    <form className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-4'>
                            <div className='space-y-[6px]'>
                                <Label htmlFor='email'>Email</Label>
                                <Input id='email' placeholder='Enter email' />
                            </div>

                            <div className='space-y-[6px]'>
                                <Label htmlFor='password'>Password</Label>
                                <Input id='password' placeholder='Enter password' type='password' />
                            </div>

                            <div className='space-y-[6px]'>
                                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                                <Input id='confirmPassword' placeholder='Enter password' type='password' />
                            </div>
                        </div>
                        <div id="btns" className='flex flex-col gap-4'>

                            <Button onClick={()=>{console.log(1)}}>Create my Account</Button>
                            <Button variant={'secondary'}>
                                    <Image src={Google} className='mr-4'/>
                                    Sign up with Google
                            </Button>

                        </div>
                    </form>
                </div>
                <div className='text-gray-400 text-sm font-medium'>Already have an account?
                    <Button variant={'link'}  className='pl-1 text-blue-gray-600 cursor-pointer' onClick={()=>{
                        router.push('/login')
                    }}> Sign in</Button>
                </div>
            </div>
        </div>
  )
}

export default Register