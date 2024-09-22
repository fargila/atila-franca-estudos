import { useState } from "react"

const Counter = () => {
    const [value, setValue] = useState(0)
  
    return (
        <div>
            <div>Clicastes no botão: {value} vezes</div>
            <button onClick={()=> {setValue(value+1)}}>Botão Contador</button>
        </div>
    )
}

export default Counter
