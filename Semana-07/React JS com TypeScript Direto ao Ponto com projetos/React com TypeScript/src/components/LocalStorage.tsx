import { useState } from "react"
// import useLocalStorage from "../hooks/useLocalStorage"

const LocalStorage = () => {
  const [nome, setNome] = useState<string>('')
    return (
    <div>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <p>O nome armazenado é: {nome}</p>
    </div>
  )
}

export default LocalStorage
