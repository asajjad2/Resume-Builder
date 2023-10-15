import React from 'react'
import Button from '@/components/ui/button'
import InputField from '@/components/ui/input'

export default function Misc() {
  return (
    <div className='w-screen min-h-screen px-20 pt-10 mb-2 flex flex-col gap-8 bg-white'>
        <div id="headings" className='flex flex-col gap-4'>
            <h2 className='text-display-md font-bold font-pd text-gray-800'>One Last Step</h2>
            <p className='text-text-md font-normal text-gray-500'>What are some things you’re highly experienced in?</p>
        </div>

        <div className='grid grid-cols-2 gap-28'>
            {/* Languages */}
            <div className='space-y-4'>
                <h2 className='text-text-lg font-semibold'>Your Languages</h2>
                <div className="grid grid-cols-2 gap-6">
                    <InputField label={'Language'} placeholder={'Select a langauge'}/>
                    <InputField label={'Expertise'} placeholder={'Select an option'}/>
                </div>
                <div className='w-[39%]'>
                    <Button iconLeft={'plus'} variant={'tertiary'} size={'sm'}>Add Another Language</Button>
                </div>
            </div>


            {/* Refrences */}
            <div className='space-y-4'>
                <h2 className='text-text-lg font-semibold'>Your Refrences</h2>
                <div className="grid grid-cols-2 gap-6">
                    <InputField label={'Contact Name'} placeholder={'Enter contact name'}/>
                    <InputField label={'Contact Company'} placeholder={'Enter contact company'}/>
                    <InputField label={'Contact Phone'} placeholder={'Enter contact phone'}/>
                    <InputField label={'Contact Email'} placeholder={'Enter contact email'}/>
                </div>
                <div className='w-[39%]'>
                    <Button iconLeft={'plus'} variant={'tertiary'} size={'sm'}>Add Another Refrence</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
