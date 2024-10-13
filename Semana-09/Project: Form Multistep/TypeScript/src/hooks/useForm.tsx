import { useState } from "react";
import { ReactElement, FormEvent } from "react";

export function UseForm(steps: ReactElement[]) 
{
    const [currentStep, setCurrentStep] = useState(0)
    
    function changeStep(i: number, e?: FormEvent)
    {
        if(e) { e.preventDefault() }
        if(i < 0 || i >= steps.length) { return }

        setCurrentStep(i)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }
}