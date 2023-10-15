import React from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Check, CheckCircle, UserCheck } from 'feather-icons-react/build/IconComponents'

export default function Stepper({text, number, variant, onClick}) {
  return (
        <div onClick={onClick}  className={`h-9 max-w-fit  py-1.5 px-3 stepper-${variant} flex items-center gap-2 rounded-[35px] text-text-sm font-medium`}>
           
            <span className='h-6 w-6 p-2 flex justify-center items-center rounded-full'>
                {
                    variant=='completed'?
                    <FeatherIcon icon={Check} size={14}/>
                    : number? number : null
                }
            </span>


            {text}
        </div>
    )
}
