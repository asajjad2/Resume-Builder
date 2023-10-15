import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { Button } from "./button"

import ChevronDown from 'feather-icons-react/build/IconComponents/ChevronDown'


const Dropdown = ({ title, options, onSelectedChange }) => {

    const renderedOptions = options.map((option) => {
        return (
            <DropdownMenuItem key={option.value} onClick={() => onSelectedChange(option)}>
                <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
            </DropdownMenuItem>
        )
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant={"outline"}  className="text-gray-400 w-[17rem] flex justify-between  ">
                    {title}
                    <ChevronDown className="ml-2" size={16} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='font-normal w-[17rem]'>
                {renderedOptions}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export { Dropdown } 