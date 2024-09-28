import React from 'react'
import '../index.css'

interface SquareProps {
    value: number | null
    onClick: () => void
}

const verifyValue = (value: number | null) => {    
    if(value === 1) { return 'X' }
    else if (value === 0) { return 'O' }
    else { return '' }
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className='square'  onClick={onClick}>{verifyValue(value)}</button>
  )
}

export default Square
