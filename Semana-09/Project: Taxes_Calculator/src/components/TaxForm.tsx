import { TextField, Container, Button, } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'

const TaxForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            income: ''
        },
        validate: (values) => {
            const errors = {}
            

            if(!values.name) { errors.name = 'O campo nome é obrigatório' }
            if(!values.age) { errors.age = 'O campo nome é obrigatório' }
            if(!values.income) { errors.income = 'O campo nome é obrigatório' }
        
            return errors
        },
        onSubmit: (values) => {
            onSubmit(values)
        }
    })

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <TextField onChange={formik.handleChange} value={formik.values.name} helperText={formik.errors.name} fullWidth label='Name' name='name' type='text' style={{marginBottom: '16px'}}/>
                <TextField onChange={formik.handleChange} value={formik.values.age} helperText={formik.errors.age} fullWidth label='Age' name='age' type='number' style={{marginBottom: '16px'}}/>
                <TextField onChange={formik.handleChange} value={formik.values.income} helperText={formik.errors.income} fullWidth label='Income' name='income' type='number' style={{marginBottom: '16px'}}/>

                <Button type='submit' variant='contained' color='primary'>Calcular</Button>
            </form>
        </Container>
    )
}

export default TaxForm
