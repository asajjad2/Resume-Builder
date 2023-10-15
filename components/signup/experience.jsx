import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { InputField } from '@/components/ui/input-field'
import { Textarea } from "@/components/ui/textarea"
import { Label } from '@/components/ui/label'
import { Dropdown } from '@/components/ui/dropdown'
import ExperienceCard from '../experienceCard'




export default function Experience() {

  const [selectedStatus, setSelectedStatus] = useState(null);

  return (
    <div className='px-20 pt-10 mb-2 flex flex-col gap-8'>


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

              <div className="space-y-[6px]">
                <Label htmlFor="emp-status">Employment Status</Label>
                <Dropdown 
                  title={'Select a Status'}
                  options={[
                    {label: 'Full-time', value: 'full-time'},
                    {label: 'Part-time', value: 'part-time'},
                    {label: 'Internship', value: 'internship'},
                    {label: 'Freelance', value: 'freelance'},
                    {label: 'Contract', value: 'contract'},
                  ]}
                  onSelectedChange={(option) => setSelectedStatus(option)}
                />
              </div>

              <InputField label={'Company Name'} placeholder={'Enter company name'}/>

              <div className="space-y-[6px]">
                <Label htmlFor="location">Location</Label>
                <Dropdown
                  title={'Select a Location'}
                  options={[
                    {label: 'Canada', value: 'canada'},
                    {label: 'USA', value: 'usa'},
                    {label: 'India', value: 'india'},
                    {label: 'Australia', value: 'australia'},
                    {label: 'UK', value: 'uk'},
                  ]}
                  onSelectedChange={(option) => setSelectedStatus(option)}
                />
              </div>

              <div className='space-y-[6px]'> 
                <Label htmlFor="emp-type">Employment Type</Label>
                <Dropdown
                  title={'Select a Type'}
                  options={[
                    {label: 'Full-time', value: 'full-time'},
                    {label: 'Part-time', value: 'part-time'},
                    {label: 'Internship', value: 'internship'},
                    {label: 'Freelance', value: 'freelance'},
                    {label: 'Contract', value: 'contract'},
                  ]}
                  onSelectedChange={(option) => setSelectedStatus(option)}
                />
              </div>
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
