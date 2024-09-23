import React, { useState } from 'react'
import { Joke } from './FetchApi'

interface ShowResponseProps {
    joke: Joke
}

const ShowResponse: React.FC<ShowResponseProps> = ({ joke }) => {
  const [showRes, setShowRes] = useState(false)

  const toggleDivRes = () => {
    setShowRes(prev => !prev)
  }
  
    return (
        <>
            <div style={{display: showRes ? 'block' : 'none'}}>
                <p>{joke.response}</p>
            </div>
            <button onClick={toggleDivRes}>{showRes ? 'Esconder resposta' : 'Ver resposta'}</button>
        </>
  )
}

export default ShowResponse
