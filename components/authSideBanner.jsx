import React from 'react'
import Image from 'next/image'

import Basket from '@/public/basket.svg'

export default async function AuthSidebar(){
    return (
        <div className="bg-blue-gray-100 flex flex-1 justify-center">
            <div className='w-[576px] flex flex-col gap-6 pt-[32.6%] '>
                <div id="text" className='text-text-xl font-semibold text-gray-800'>
                    “This is the new era of building resumes, we've been told to create resumes again and again everytime we are applying for a different position. This will end that misery once and for all!”
                </div>
                <div id="icons" className='flex justify-between items-center '>
                    <div className='flex gap-4'>
                        <img src="https://images.unsplash.com/photo-1677103216895-59fb1b6a4fcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt="" className='rounded-full h-[46px] w-[46px] object-cover'/>
                        <div className='flex flex-col gap-1'>
                            <h5 className='text-text-md font-medium text-gray-800'>Areeb Sajjad</h5>
                            <h5 className='text-text-xs font-normal text-gray-500'>CEO, Basket Co</h5>
                        </div>
                    </div>
                    <Image src={Basket}/>
                </div>
            </div>
        </div>
    )
}