import React from 'react'
import { Button } from "@/components/ui/button"
import { InputField } from '@/components/ui/input-field'
import { Textarea } from "@/components/ui/textarea"
import { Label } from '@radix-ui/react-dropdown-menu'
import Dropdown from '@/components/ui/dropdown-menu'
import ExperienceCard from '../experienceCard'


export default function Experience() {
  return (
    <div className='w-screen min-h-screen px-20 pt-10 mb-2 flex flex-col gap-8 bg-white '>


        <div id="headings" className='flex flex-col gap-4'>
          <h2 className='text-display-md font-bold text-gray-800 font-pd'>Work Experience</h2>
          <p className='text-text-md font-normal text-gray-500'>What are some exciting places you've worked at?</p>
        </div>

        <div className='grid grid-cols-2 gap-56'>
          <div className='space-y-4'>
            <h2 className='text-text-lg font-semibold'>Your Work Experiences</h2>
            <ExperienceCard title={'UI/UX Designer'} companyName={"YouPal Group"} startDate = {new Date('3-16-2022')}  endDate = {new Date()} status="Part-time" />
            <ExperienceCard title={'UI/UX Designer'} companyName={"YouPal Group"} startDate = {new Date('3-16-2022')}  endDate = {new Date()} status="Part-time" />
            <ExperienceCard title={'UI/UX Designer'} companyName={"YouPal Group"} startDate = {new Date('3-16-2022')}  endDate = {new Date()} status="Part-time" />
            <ExperienceCard title={'UI/UX Designer'} companyName={"YouPal Group"} startDate = {new Date('3-16-2022')}  endDate = {new Date()} status="Part-time" />
          </div>
          <form className='flex flex-col gap-6'>
            <div className='grid grid-cols-2 gap-6'>
              <InputField label={'Title'} placeholder={'Enter title'}/>
              <InputField label={'Employment Status'} placeholder={'Select a Status'}/>
              <InputField label={'Company'} placeholder={'Enter company name'}/>
              <InputField label={'Location'} placeholder={'Select a Location'}/>
              <InputField label={'Employment Type'} placeholder={'Select a Date'}/>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              <InputField label={'Start Date'} placeholder={'Select a Date'}/>
              <InputField label={'End Date'} placeholder={'Select a Date'}/>
            </div>

            <div className='space-y-[6px]'>
              <Label htmlFor='desc'>Description</Label>
              <Textarea id='desc' placeholder='Write a short description about your experience'/>
            </div>
            <div className='flex justify-end'>
              <div className='w-[30%]'>
                <Button size={'sm'} variant={'primary'}>Save Experience</Button>
              </div>
            </div>
          </form>
        </div>

         {/* below things are common */}
         <div className='absolute top-6 right-20'>
              <Button size={'sm'} variant={'tertiary'}>Skip to Resume Builder</Button>
          </div>

        {/* <SignupFooter/> */}
   
    </div>
    )
}
