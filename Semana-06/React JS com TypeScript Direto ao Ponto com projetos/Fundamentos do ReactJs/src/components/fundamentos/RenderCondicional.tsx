import React from "react"

interface RenderCondicionalProps {
    user: string
}

const RenderCondicional: React.FC<RenderCondicionalProps> = ({user}) => {
  return (
    <div>
        { user && <h1>Bem-vindo de volta, {user}.</h1> }
    </div>
  )
}

export default RenderCondicional
