import { useState } from 'react'
import TaxForm from './components/TaxForm'
import TaxReport from './components/TaxReport'
import { Container, Typography } from '@mui/material'

function App() {
  const [taxData, setTaxData] = useState(null)
  const calculateTax = (values) =>
  {
    let tax = 0
    const income = parseFloat(values.income)
    if(income <= 10000) { tax = income * 0.05 }
    else if(income <= 20000) { tax = income * 0.1 }
    else { tax = income * 0.15 }

    const taxData = {
      ...values,
      tax,
    }

    setTaxData(taxData)
  }

  return (
    <>
      <Container className='max-w-800 m-0'>
        <Typography variant='h3' align='center' className='mb-4'>
          Taxes Calculator
        </Typography>
        <TaxForm onSubmit={calculateTax}/>
        {taxData && <TaxReport taxData={taxData}/>}
      </Container>
    </>
  )
}

export default App
