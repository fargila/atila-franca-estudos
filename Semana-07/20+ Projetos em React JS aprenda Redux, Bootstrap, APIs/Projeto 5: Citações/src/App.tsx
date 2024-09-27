import Citacao from "./components/Citacao"
import citacoes from "./data"
import { useState } from "react"

function App(){
  const [index, setIndex] = useState(0)
  
  const nextQuote = () => {
    setIndex((currentIndex) => (currentIndex + 1) % citacoes.length)
  }

  return (
    <div className="container mt-5">
    <Citacao text={citacoes[index].texto} author={citacoes[index].autor}/>
      <button className="btn btn-success mt-2" onClick={nextQuote}>Próxima citação</button>
    </div>
  )
}

export default App
