"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

import Intro from '@/components/signup/introduction';
import Experience from '@/components/signup/experience';
import Skills from '@/components/signup/skills';
import Education from '@/components/signup/education';
import Misc from '@/components/signup/misc';
import Stepper from '@/components/signup/stepper'; 

const steps=['Introduction', 'Experience', 'Skills', 'Education', 'Finalizing'];

export default function SignUp(){

    const router = useRouter();
    const currentStep = parseInt(router.query?.step) || 0;
    const [step, setStep] = useState(currentStep);

    useEffect(() => {
        router.push(`/onboarding?step=${step}`, undefined, { shallow: true });
        console.log(step)
    }, [step]);

    const onPrev = () => {
        if(step > 1) {
            setStep(step - 1);
        }
    }

    const onNext = () => {
        if(step < steps.length + 1) {
            setStep(step + 1);
        }
    }

  return (
    <div className='max-w-screen min-h-screen bg-white'>
        {step === 0 && <Intro/>}
        {step === 1 && <Experience/>}
        {step === 2 && <Skills/>}
        {step === 3 && <Education/>}
        {step === 4 && <Misc/>}
        {
            <Stepper
            steps={steps}
            currentStep={step}
            onPrev={onPrev}
            onNext={onNext}
            onStepChange = {(index) => setStep(index+1)}
            />
        }
        
    </div>
  )
}
