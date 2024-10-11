import './BmiCalc.css'
import Button from '../Button/Button'
import { useState } from 'react'

const BmiCalc = ({ calcBmi }) => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const clearForm = (e) => {
        e.preventDefault()
        setHeight('')
        setWeight('')
    }

    const validDigits = (text) =>
    { return text.replace(/[^0-9,]/g, '') }

    const handleHeightChange = (e) =>
    {
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue)
    }

    const handleWeightChange = (e) =>
    {
        const updatedValue = validDigits(e.target.value)
        setWeight(updatedValue)
    }

    return (
        <div id='calc-container'>
            <h2>BMI Calculator</h2>
            <form id='bmi-form'>
                <div className='form-inputs'>
                    <div className='form-control'>
                        <label htmlFor="height">Height:</label>
                        <input type="text" name='height' value={height || ''}
                        id='height' placeholder='Your height'
                        onChange={(e) => handleHeightChange(e)}/>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="weight">Weight:</label>
                        <input type="text" name='weight' value={weight || ''}
                        id='weight' placeholder='Your weight'
                        onChange={(e) => handleWeightChange(e)}/>
                    </div>
                </div>
                <div className='action-control'>
                    <Button id='calc-btn' text='Resolve' action={(e) => calcBmi(e, height, weight)}></Button>
                    <Button id='clear-btn' text='Clean' action={clearForm}></Button>
                </div>
            </form>
        </div>
    )
}

export default BmiCalc
 