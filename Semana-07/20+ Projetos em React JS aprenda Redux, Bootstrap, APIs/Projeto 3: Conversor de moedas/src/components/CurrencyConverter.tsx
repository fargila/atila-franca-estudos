import styles from '../styles/CurrencyConverter.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

interface Rates {
    [key: string]: number
}

const CurrencyConverter = () => {
    const [rates, setRates] = useState<Rates>({})
    const [fromCurrency, setFromCurrency] = useState<string>('USD')
    const [toCurrency, setToCurrency] = useState<string>('EUR')
    const [amount, setAmount] = useState<number>(0)
    const [convertedAmount, setConvertedAmount] = useState<number>(0)
    
    useEffect(() => {
        axios.get(`https://v6.exchangerate-api.com/v6/5bbac9585c3357188f8b2c12/latest/USD`).then((response) => {
            //console.log(response.data.conversion_rates)
            setRates(response.data.conversion_rates)
        }).catch ((error) => {
            alert(`Ocorreu um erro: ${error}`)
        })
    }, [])

    useEffect(() => {
        if(rates) 
        { 
            const rateFrom: number = rates[fromCurrency] || 0 
            const rateTo: number = rates[toCurrency] || 0
            const converted = (amount / rateFrom) * rateTo
            setConvertedAmount(converted)
        }
    }, [amount, rates, fromCurrency, toCurrency])

    return (
        <div className={styles.converter}>
            <h2>Conversor de Moedas</h2>
            <input type='number' placeholder='Digite o valor...' value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))}></input>
            <span>Selecione as moedas</span>
            <select value={toCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {Object.keys(rates).map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>
                ))}
            </select>
            <span>para</span>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {Object.keys(rates).map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>
                    ))}
            </select>
            <h3>{convertedAmount.toFixed(2)} {toCurrency}</h3>
            <p>{amount.toFixed(2)} {fromCurrency} valem {convertedAmount.toFixed(2)} {toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter
