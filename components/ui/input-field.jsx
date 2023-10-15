import React from 'react'
import { Label } from './label'
import { Input } from './input'

const InputField = ({label, placeholder, id, type}) => {

    id = id || label.toLowerCase().replace(' ', '-');

    return (
        <div className='space-y-[6px] flex-1'>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} placeholder={placeholder} type={type?type:'text'}/>
        </div>
    )
}

export { InputField }