import React from 'react'
import EducationCard from '@/components/educationCard'
import { Button } from '@/components/ui/button'
import { InputField } from '@/components/ui/input-field'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dropdown } from '@/components/ui/dropdown'

export default function Education() {
  return (
    <div className='px-20 pt-10 mb-2 flex flex-col gap-8 bg-white'>
        <div id="headings" className='flex flex-col gap-4'>
            <h2 className='text-display-md font-bold font-pd text-gray-800'>Education</h2>
            <p className='text-text-md font-normal text-gray-500'>What are some things you’re highly educated in?</p>
        </div>

        <div className='grid grid-cols-2 gap-56'>
            <div className="space-y-4">
                <h2 className='text-text-lg font-semibold'>Your Education</h2>
                <EducationCard institute={'National University of Computing & Emerging Sciences'} degree={'Bachelor’s in Computer Science'}
                    startDate={new Date('3-16-2022')} endDate={new Date()} location={"Islamabad, Pakistan"} 
                />
                <EducationCard institute={'National University of Computing & Emerging Sciences'} degree={'Bachelor’s in Computer Science'}
                    startDate={new Date('3-16-2022')} endDate={new Date()} location={"Islamabad, Pakistan"} 
                />
                <EducationCard institute={'National University of Computing & Emerging Sciences'} degree={'Bachelor’s in Computer Science'}
                    startDate={new Date('3-16-2022')} endDate={new Date()} location={"Islamabad, Pakistan"} 
                />
                <EducationCard institute={'National University of Computing & Emerging Sciences'} degree={'Bachelor’s in Computer Science'}
                    startDate={new Date('3-16-2022')} endDate={new Date()} location={"Islamabad, Pakistan"} 
                />
            </div>
            <form action="">
                <div className="flex flex-col gap-6">
                    <InputField label={'School'} placeholder={'e.g. Oxford University'}/>
                    <div className="grid grid-cols-2 gap-6">
                        <InputField label={'Field of Study'} placeholder={'e.g. Computer Science'}/>
                        
                        <div className='space-y-[6px]'>
                            <Label>Degree</Label>
                            <Dropdown
                                title={'Select a Degree'}
                                options={[
                                    {label: 'Bachelor’s', value: 'bachelors'},
                                    {label: 'Master’s', value: 'masters'},
                                    {label: 'Doctorate', value: 'doctorate'},
                                    {label: 'Associate', value: 'associate'},
                                    {label: 'Diploma', value: 'diploma'},
                                ]}
                            />
                        </div>

                        <InputField label={'Starting Date'} placeholder={'Select a Date'}/>
                        <InputField label={'Ending Date'} placeholder={'Select a Date'}/>
                    </div>

                    <div className='space-y-[6px]'>
                        <Label>Description</Label>
                        <Textarea label={'Description'} placeholder={'Mention your achievements and contributions'} />
                    </div>
                    <div className='flex justify-end'>
                        <div className='w-[30%]'>
                            <Button size={'sm'} variant={'primary'}>Save Education</Button>
                        </div>
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
