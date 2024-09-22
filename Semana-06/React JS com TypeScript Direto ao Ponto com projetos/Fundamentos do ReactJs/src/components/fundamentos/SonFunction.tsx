import React from 'react'

interface SonFunctionPros {
    onChildClick: () => void
}

const SonFunction: React.FC<SonFunctionPros> = ({ onChildClick }) => {
  return (
    <>
        <button onClick={onChildClick}>Botão Filho</button>
    </>
  )
}

export default SonFunction
