import React from 'react'
import { Button } from "@/components/ui/button"
import { InputField } from '@/components/ui/input-field'

import { Search } from 'lucide-react'

export default function Skills() {


    const skills = [
        "Visual Design", "Interaction Design", "User Research", "Interviewing", "Surveys", "Usability Testing", "Prototyping", "Wireframing", "User Flows", "User Personas", "User Journeys", "User Stories", "User Scenarios", "User Testing", "User Interviews", "User Surveys", "User Feedback", "User Research" 
    ]

  return (
    <div className='px-20 pt-10 flex flex-col gap-11'>
        <div id="headings" className='flex flex-col gap-4'>
          <h2 className='text-display-md font-bold text-gray-800 font-pd'>Skills</h2>
          <p className='text-text-md font-normal text-gray-500'>What are some things you’re highly experienced in?</p>
        </div>
        <div className='space-y-6 w-[25rem]'>
            <InputField placeholder='Search for a skill' label='Your Skills' icon='search'/>
            <div className='flex flex-wrap gap-4'>
                {
                    skills.map((skill, index) => {
                        return <div key={index} className='text-text-xs font-medium flex items-center justify-center py-1 px-2.5 bg-blue-gray-25 border border-solid border-blue-gray-200 rounded-full text-blue-gray-700'>{skill}</div>
                    })
                }
            </div>
        </div>

          {/* below things are common */}
          <div className='absolute top-6 right-20'>
              <Button size={'sm'} variant={'tertiary'}>Skip to Resume Builder</Button>
          </div>

    </div>
  )
}
