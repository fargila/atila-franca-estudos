import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const handleLogin = (event) =>  {
        event.preventDefault()

        console.log("Usuário logado!")

        navigate('/')
    }
   
    return (
    <div>
      <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
      <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
