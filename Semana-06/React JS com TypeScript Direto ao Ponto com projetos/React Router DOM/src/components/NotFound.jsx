import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Página não encontrada!</p>
      <Link to="/home"> Voltar para Home</Link>
    </div>
  )
}

export default NotFound
