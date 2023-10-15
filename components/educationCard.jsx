import React from 'react'
import { useState } from 'react';
import { Edit3, Trash } from 'feather-icons-react/build/IconComponents';


export default function EducationCard({institute, degree, startDate, endDate, location}) {

  if(institute.length > 43) {
    institute = institute.slice(0, 43) + '...'
  }

  if(!endDate)
    endDate = new Date();

  startDate = startDate.toLocaleString('default', { month: 'short' }) + ', ' + startDate.getFullYear();
  endDate = endDate.toLocaleString('default', { month: 'short' }) + ', ' + endDate.getFullYear();

  const [isHovered, setIsHovered] = useState(false);



  return (

        <div className='max-w-[29.5rem] h-[7rem] flex' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
          <div className='w-[91%] bg-gray-50 py-4 px-6 rounded-[6px] flex flex-col gap-2 border-solid border border-gray-200'>
            <h2 className='text-text-md font-semibold text-gray-700 overflow-hidden whitespace-nowrap'>{institute}</h2>
            <h3 className='text-text-sm font-normal text-gray-600'>{degree}</h3>
            <div className='flex gap-2 text-text-sm font-normal text-gray-500'>
              <p>{startDate} - {endDate}</p>
              <p>.</p>
              <p>{location}</p>
            </div>
          </div>
          <div id="xp-card-btns" className={!isHovered?'hidden':'flex flex-col gap-2 justify-center mx-auto'}>
            <div className='w-8 h-8 bg-gray-50 rounded-full flex justify-center items-center cursor-pointer'>
              <Edit3 className='text-gray-600' size={16}/> 
            </div>
            <div className='w-8 h-8 bg-error-50 rounded-full flex justify-center items-center cursor-pointer border-error-500 border-solid border-[1.5px]'>
              <Trash  className='text-error-500' size={16}/> 
            </div>
          </div>
        </div>
    
  )
}
