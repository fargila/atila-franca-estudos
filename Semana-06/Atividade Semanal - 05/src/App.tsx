import { ToastContainer } from 'react-toastify'
import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css'
import JokeChoices from './components/JokeChoices'
import React, { useState } from 'react'
import { Joke } from './components/FetchApi'

const App: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([
      {id: 1, joke:"Qual parte do corpo que te torna um deus?", response: "BE-GODE!"},
      {id: 2, joke:"Por que a maçã não queria para de correr na corrida?", response: "Porque, se não, a uva passa!"},
      {id: 3, joke:"O que o cavalo foi fazer no orelhao?", response: "Passar um trote!"},
      {id: 4, joke:"O que o exterminador do futuro falou quando o seu tecnico de informática perguntou: instala o XP?", response: "Instala vista baby!"},
      {id: 5, joke:"Quando os americanos comeram carne pela primeira vez?", response: "Quando chegou Cristovao COM LOMBO!"},
      {id: 6, joke:"O que o Vegeta falou pro abacate quando foi come-lo?", response: "Maldito Kakaroço!"},
      {id: 7, joke:"Qual o nome do filho do magneto?", response: "Magbisneto!"},
      {id: 8, joke:"Um pato chamou outros patos pra jogar bola, como terminou o jogo?", response: "Empatado"},
      {id: 9, joke:"O que aconteceu com a baleia quando tomou um tiro?", response: "Ficou BALEADA"}
  ])

  const handleAddJoke = (newJoke: Joke) => {
    setJokes((prevJokes) => [...prevJokes, newJoke])
  }

  // const handUpdateJoke = (updateJoke: Joke) => {
  //   setJokes((prevJokes) => prevJokes.map((joke) => (joke.id === updateJoke.id ? updateJoke : joke)))
  // }

  const handlDeleteJoke = (id: number | null | undefined) => {
    setJokes((prevJokes) => prevJokes.filter((joke) => joke.id !== id))
  }

  return (
   
  <>
  <div >
    <h1>Compass piadas</h1>
    <JokeChoices 
    jokes={jokes}
    onAdd={handleAddJoke}
    //onUpdate={handUpdateJoke}
    onDelete={handlDeleteJoke}/>
  </div>
    <ToastContainer/>
  </>
  )
}

export default App
