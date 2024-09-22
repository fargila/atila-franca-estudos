import { useReducer } from "react"

interface State {
    counter: number
}
interface Action {
    type: "incrementar" | "decrementar" | "resetar"
}

const initialState: State = { counter: 0 }

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case "incrementar":
            return { counter: state.counter + 1 }
            break
        case "decrementar":
            return { counter: state.counter - 1 }
            break
        case "resetar":
            return { counter: 0 }
            break
        default:
            throw new Error('The action is not supported!')
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Contagem: { state.counter }</p>
            <button onClick={()=> dispatch({type: "incrementar"})}>Incrementar</button>
            <button onClick={() => dispatch({ type: "decrementar" })}>Decrementar</button>
            <button onClick={() => dispatch({ type: "resetar" })}>Resetar</button>
        </div>
    )
    
}

export default Counter
