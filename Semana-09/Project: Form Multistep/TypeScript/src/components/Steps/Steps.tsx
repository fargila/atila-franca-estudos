import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import React from 'react'
import './Steps.css'

interface stepsProps { currentStep: number }

const Steps: React.FC<stepsProps> = ({ currentStep }) =>
{
    return (
        <div className='steps'>
            <div className='step active'>
                <AiOutlineUser/>
                <p>Identification</p>
            </div>
            <div className={`step  ${currentStep >= 1 ? 'active' : ''}`}>
                <AiOutlineStar/>
                <p>Score</p>
            </div>
            <div className={`step  ${currentStep >= 2 ? 'active' : ''}`}>
                <FiSend/>
                <p>Submit</p>
            </div>
        </div>
    )
}

export default Steps
