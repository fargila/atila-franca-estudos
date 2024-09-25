import React, { useState } from 'react'

const TextInput = () => {
    const [text, setText] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Formulário enviado!')
    }

  return (
    <form action="">
        <input type="text" value={text} onChange={handleChange}/>
        <p>{text}</p>
        <button type='submit' onClick={handleSubmit}>Enviar</button>
    </form>
  )
}

export default TextInput
