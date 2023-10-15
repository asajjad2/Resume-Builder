import React from 'react'
import { Button } from '@/components/ui/button'
import { InputField } from '@/components/ui/input-field'
import { Label } from '@/components/ui/label'
import { Dropdown } from '@/components/ui/dropdown'

import { Plus } from 'lucide-react'

export default function Misc() {
  return (
    <div className='px-20 pt-10 mb-2 flex flex-col gap-8'>
        <div id="headings" className='flex flex-col gap-4'>
            <h2 className='text-display-md font-bold font-pd text-gray-800'>One Last Step</h2>
            <p className='text-text-md font-normal text-gray-500'>What are some things you’re highly experienced in?</p>
        </div>

        <div className='grid grid-cols-2 gap-28'>
            {/* Languages */}
            <div className='space-y-4'>
                <h2 className='text-text-lg font-semibold'>Your Languages</h2>
                <div className="grid grid-cols-2 gap-6">
                    
                    <div className='space-y-[6px]'>
                        <Label>Language</Label>
                        <Dropdown
                            title={'Select a Language'}
                            options={[
                                {label: 'English', value: 'english'},
                                {label: 'French', value: 'french'},
                                {label: 'German', value: 'german'},
                                {label: 'Spanish', value: 'spanish'},
                                {label: 'Chinese', value: 'chinese'},
                            ]}
                        />
                    </div>

                    <div className='space-y-[6px]'>
                        <Label>Proficiency</Label>
                        <Dropdown
                            title={'Select a Proficiency'}
                            options={[
                                {label: 'Native', value: 'native'},
                                {label: 'Fluent', value: 'fluent'},
                                {label: 'Intermediate', value: 'intermediate'},
                                {label: 'Basic', value: 'basic'},
                            ]}
                        />
                    </div>
                </div>
                <div className='w-[39%]'>
                    <Button variant={'tertiary'} size={'sm'}>
                        <Plus className='mr-[6px] text-gray-900'/>
                        Add Another Language
                    </Button>
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
                    <Button variant={'tertiary'} size={'sm'}>
                        <Plus className='mr-[6px] text-gray-900'/>
                        Add Another Refrence
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
