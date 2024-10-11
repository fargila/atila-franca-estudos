import './App.css'
import BmiCalc from './components/BMI/BmiCalc'
import { useState } from 'react'
import { data } from './data/data'
import BmiTable from './components/Table/BmiTable'

function App() {
  const [bmi, setBmi] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')


  const calcBmi = (e, height, weight) => 
  {
    e.preventDefault()
    console.log(height, weight)
    if(!weight || !height) { return }
    const weightFloat = +weight.replace(',', '.')
    const heightFloat = +height.replace(',', '.')
    
    const bmiResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
    setBmi(bmiResult)

    data.forEach((item) =>
    {
      if(bmiResult >= item.min && bmiResult <= item.max)
      {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }

      // if(!info) { return }
    })
  }

  const resetCalc = (e) =>
  {
    e.preventDefault()

    setBmi('')
    setInfo('')
    setInfoClass('')
  }

  return (
    <div className='container'>
      {!bmi ? 
      (
        <BmiCalc calcBmi={calcBmi}/>
      ): 
      (
        <BmiTable data={data} bmi={bmi} resetCalc={resetCalc} 
        info={info} infoClass={infoClass}/>
      )}
    </div>
  )
}

export default App
