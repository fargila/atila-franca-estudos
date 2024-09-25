import React, { useState } from 'react'

const FormularioLogin = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if(name.trim()==='' || password.trim()==='') {  
            alert('Preencha ambos os campos!')
            return
        }
        alert(`Nome: ${name}, senha: ${password}`)
    }

  return (
    <form action="" className='formLogin'>
        <label htmlFor="name">Nome do usuário:</label>
        <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="password">Senha:</label>
        <input type="text" value={password} name='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Enviar</button>
    </form>
  )
}

export default FormularioLogin
