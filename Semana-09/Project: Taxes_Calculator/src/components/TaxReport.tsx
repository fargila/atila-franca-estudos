import { Container, Typography } from '@mui/material'
import React from 'react'

const TaxReport = ({ taxData }) => {

    return (
        <Container>
            <Typography variant='h5'>Taxes Form</Typography>
            <Typography variant='body1'>Name: {taxData.name}</Typography>
            <Typography variant='body1'>Age: {taxData.age} years</Typography>
            <Typography variant='body1'>Income: $
            {parseFloat(taxData.income).toLocaleString('pt-BR',
                {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Typography>
            <Typography variant='body1'>Taxes to pay: {' '}
            {parseFloat(taxData.tax).toLocaleString('pt-BR',
                {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Typography>
        </Container>
    )
}

export default TaxReport
