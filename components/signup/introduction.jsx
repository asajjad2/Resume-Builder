import React from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { InputField } from '../ui/input-field'


export default function Introduction() {
  return (

      <div className='w-screen min-h-screen bg-white px-20 pt-10'>

        <div id="headings" className='flex flex-col gap-4'>
          <h2 className='text-display-md font-bold text-gray-800 font-pd'>Introduction</h2>
          <p className='text-text-md font-normal text-gray-500'>Give us a brief about yourself!</p>
        </div>
        
        <form className='pt-6 flex gap-[7rem]'>

          <div className='flex flex-col gap-6 w-[50%]'>
            <div className='flex gap-6'>
              <InputField label={'First Name'} placeholder={'Enter First Name'} id={'fname'}/>
              <InputField label={'Last Name'} placeholder={'Enter Last Name'} id={'lname'}/>
            </div>

            <div className='space-y-[6px]'>
              <Label htmlFor='bio'>Bio</Label>
              <Textarea id='bio' placeholder='Write a short bio about yourself'/>
            </div>
            <div className='flex gap-6'>

              <InputField 
                label={'Linkedin'}
                placeholder={'Enter Profile link'}
                id={'linkedinln'}
              />
             
              <InputField
                label={'Portfolio'}
                placeholder={'Enter Profile link'}
                id={'portfolioln'}
              />

            </div>
          </div>

          <div className='flex flex-col gap-6 flex-wrap w-[50%]'>
            <div className='flex gap-6'>

              <InputField
                label={'City'}
                placeholder={'Enter City'}
                id={'city'}
              />

              <InputField
                label={'Postal Code (if applicable)'}
                placeholder={'Enter Postal Code'}
                id={'postalcode'}
              />

            </div>
            <div className='w-[48%]'>

              <InputField
                label={'Phone Number'}
                placeholder={'Enter Phone Number'}
                id={'phone'}
              />
              
            </div>
          </div>

        </form>

        {/* below things are common */}
        <div className='absolute top-6 right-20'>
          <Button size={'sm'} variant={'tertiary'} >Skip to Resume Builder</Button>
        </div>

      </div>
    )
}
