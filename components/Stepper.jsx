import React from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Check, CheckCircle, UserCheck } from 'feather-icons-react/build/IconComponents'

export default function Stepper({text, number, variant, onClick}) {

    let colorStyling = 'bg-gray-100 text-blue-gray-600';
    let spanStyling = 'bg-blue-gray-400 text-white';

    if(variant=='current'){
        colorStyling = 'bg-blue-gray-600 text-white';
    } else if(variant=='completed'){
        colorStyling = 'bg-success-400 text-white';
        spanStyling = 'bg-success-600 text-white';
    }


  return (
        <div onClick={onClick}  className={`h-9 max-w-fit  py-1.5 px-3 ${colorStyling} flex items-center gap-2 rounded-[35px] text-text-sm font-medium`}>
           
            <span className={`${spanStyling} h-6 w-6 p-2 flex justify-center items-center rounded-full`}>
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
