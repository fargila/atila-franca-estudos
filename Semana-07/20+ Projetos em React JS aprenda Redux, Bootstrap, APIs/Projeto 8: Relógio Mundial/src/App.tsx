import { useState } from "react"
import TimeZoneClock from "./components/TimeZoneClock"

function App() {
  const fusosHorarios = [
    'UTC',
    'GMT',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Berlin',
    'Asia/Tokyo'
  ]

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([
    fusoHorarioLocal,
  ])

  const addFusoHorario = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novoFuso = e.target.value
    
    if(novoFuso && !fusosHorariosSelecionados.includes(novoFuso)) {
      setFusosHorariosSelecionados((prev) => [...prev, novoFuso])
    }
  }

  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select onChange={(e) => addFusoHorario(e)}>
        <option value="" disabled selected>Selecione um fuso horário</option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>{fuso}</option>
        ))}
      </select>
      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso}/>
        ))}
      </div>
    </div>
  )
}

export default App
