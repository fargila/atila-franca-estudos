import { useContext  } from "react"
import { TemaContext } from "../contexts/TemContext"

const BarrraFerramentas = () => {
  const contexoTema = useContext(TemaContext)
    
  return (
    <div style={{background: contexoTema?.tema === 'claro' ? '#fff' : '#000', 
    color: contexoTema?.tema === 'claro' ? '#000' : '#fff'}}>
      <button onClick={contexoTema?.alternarTema}>Alterar tema</button>
    </div>
  )
}

export default BarrraFerramentas
