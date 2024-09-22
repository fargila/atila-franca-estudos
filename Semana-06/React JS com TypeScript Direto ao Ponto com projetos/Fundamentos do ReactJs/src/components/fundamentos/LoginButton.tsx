import React from "react"

interface LoginButtonProps {
    loggedIn: boolean
}

const LoginButton: React.FC<LoginButtonProps> = ({loggedIn}) => {
  return (
        <div>
            {loggedIn ? <button>Sair</button> : <button>Entrar</button>}
        </div>
    )
}

export default LoginButton
