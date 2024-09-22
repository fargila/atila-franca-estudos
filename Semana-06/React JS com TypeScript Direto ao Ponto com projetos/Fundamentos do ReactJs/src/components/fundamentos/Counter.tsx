import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    

    return <>
        <div>Você clicou {count} vezes.</div>
        <button onClick={() => {setCount(count+1)}}>Aumentar</button>
    </>
}

export default Counter