import React from 'react'
import { Label } from './label'
import { Input } from './input'
import FeatherIcon from 'feather-icons-react';

const InputField = ({label, placeholder, id, type, icon}) => {

    id = id || label.toLowerCase().replace(' ', '-');

    return (
        <div className='space-y-[6px] flex-1'>
            <Label htmlFor={id}>{label}</Label>
            {
                icon ? 
                <div className='relative'>
                    <Input id={id} placeholder={placeholder} type={type}/>
                    <span className='absolute right-4 top-1/2 transform -translate-y-1/2'>
                        <FeatherIcon icon={icon} size='20' color='#98A2B3'/>
                    </span>
                </div>
                 : 
                <Input id={id} placeholder={placeholder} type={type} className='placeholder:text-gray-400'/>
            }
        </div>
    )
}

export { InputField }