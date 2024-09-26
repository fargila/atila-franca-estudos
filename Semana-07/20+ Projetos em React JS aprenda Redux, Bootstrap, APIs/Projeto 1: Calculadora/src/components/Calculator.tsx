import styles from '../styles/Calculator.module.css'
import { useState } from 'react'

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState<string>('0')
    const [pendingOperation, setPendingOperation] = useState<string | null>(null)
    const [pendingValue, setPendingValue] = useState<string | null>(null)
    const [completeOperation, setCompleteOperation] = useState<string>('')

    const handleClick = (value: string) => {
        setCurrentValue(prevValue => {
            if(prevValue ==='0') { return value }
            else { return prevValue + value }
        })
        setCompleteOperation((prevOperation) => prevOperation + value)
    }
    const handleOp = (op: string) => {
        setCompleteOperation(currentValue + ' ' + op + ' ')
        setPendingOperation(op)
        setPendingValue(currentValue)
        setCurrentValue('0')
    }

    const handleClear = () => {
        setCurrentValue('0')
        setPendingOperation(null)
        setPendingValue(null)
        setCompleteOperation('')
    }

    const handleCalculate = () => {
        if(!pendingOperation || !pendingValue) { return }

        const num1 = parseFloat(pendingValue)
        const num2 = parseFloat(currentValue)

        let result: number
        switch (pendingOperation) {
            case '+':
                result = num1 + num2
                break
            case '-':
                result = num1 - num2
                break
            case '*':
                result = num1 * num2
                break
            case '/':
                result = num2 !== 0 ? num1 / num2 : NaN
                break
            default:
                return
        }
        setCompleteOperation(pendingValue + ' ' + pendingOperation + ' ' + currentValue + ' = ' + result.toFixed(5))
        setCurrentValue(result.toFixed(5)!.toString())
        setPendingOperation(null)
        setPendingValue(null)
    }

    const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const operations = ['+', '-', '*', '/']


    return (
        <div className={styles.calculator}>
            <div className={styles.complete_operation}>{completeOperation}</div>
            <div className={styles.display}>{currentValue}</div>
            <div className={styles.btns}>
                <button onClick={handleClear}>AC</button>
                {keypadNumbers.map((num) => (
                    <button onClick={()=> handleClick(num)} key={num}>{num}</button>
                ))}
                 {operations.map((op) => (
                    <button onClick={()=> handleOp(op)}  key={op}>{op}</button>
                ))}
                <button onClick={ handleCalculate }>=</button>
            </div>
        </div>
    )
}

export default Calculator
