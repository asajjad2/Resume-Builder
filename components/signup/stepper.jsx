// Stepper.js
import React from 'react';
import { Button } from '@/components/ui/button';
import StepperElement from '../Stepper';
import { ArrowRight } from 'feather-icons-react'

function Stepper({ steps, currentStep, onNext, onPrev, onStepChange }) {

    let isLast = currentStep === steps.length;

  return (
    <div className='fixed bottom-0 left-0 w-screen'>
    <div className='flex justify-between items-center px-20 py-4 bg-gray-25 border-t border-gray-200 border-solid'>
        <Button variant={'outline'} onClick={onPrev} disabled={currentStep === 0}>
            Go Back
        </Button>
        <ul className='flex justify-center gap-6'>
            {steps.map((step, index) => (
            <li key={step}>
                <StepperElement
                variant={
                    index === currentStep-1
                    ? 'current'
                    : index < currentStep
                    ? 'completed'
                    : 'default'
                }
                number={index + 1}
                text={step}
                onClick = {() => onStepChange(index)}
                />
            </li>
            ))}
        </ul>   
        <Button onClick={onNext} disabled={isLast}>
            {isLast?'Done':'Next'} 
            <ArrowRight className='ml-2' size={20} />
        </Button>
    </div>
    </div>
    
  );
}

export default Stepper;
