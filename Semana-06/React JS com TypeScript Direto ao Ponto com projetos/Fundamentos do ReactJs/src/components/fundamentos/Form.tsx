import React, { useState } from "react"

const Form = () => {
    const [value, setValue] = useState('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        console.log("Formulário enviado: ", value)
    }

  return (
    <form action="" onSubmit={ handleSubmit }>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Preencha o campo" />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form
