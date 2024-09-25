import { useState } from "react"
import useInterval from "../hooks/useInterval"

const PauseCounter = () => {
    const [counter, setCounter] = useState(0)
  
    useInterval(() => {
        setCounter(counter + 1)
    }, 5000)

    return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}

export default PauseCounter
