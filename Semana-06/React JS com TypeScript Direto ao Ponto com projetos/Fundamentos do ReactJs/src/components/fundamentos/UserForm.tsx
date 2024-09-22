import React, { useState } from "react";

const UserForm: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return <>
        <form onSubmit={ handleSubmit }>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Digite seu nome: "/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Digite seu email: "/>
            <button type="submit">Enviar</button>
        </form>
    </>
}

export default UserForm