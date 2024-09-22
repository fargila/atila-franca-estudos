import React, { useCallback, useState } from 'react'

interface BtnProps {
    onClick: () => void
    children: React.ReactNode
}

const Btn: React.FC<BtnProps> = React.memo(({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>
})

const CallBack: React.FC = () => {
    const [counter, setCounter] = useState(0)
    const add = useCallback(()=> {    
        setCounter((pCounter) => pCounter + 1)
}, [])

    return (
        <div>
        <p>Contagem: {counter}</p>
        <Btn onClick={add}>Aumentar</Btn>
        </div>
    )
}

export default CallBack
