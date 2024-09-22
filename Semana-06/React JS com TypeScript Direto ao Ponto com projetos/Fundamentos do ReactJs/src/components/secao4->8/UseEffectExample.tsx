import { useEffect, useState } from "react"

const UseEffectExample = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`
  })

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={()=> setContador(contador)}>Botão</button>
    </div>
  )
}

export default UseEffectExample
