import React, { useEffect, useState } from "react"
//import axios from 'axios'
import styles from '../styles/fetchApi.module.css'
import { toast } from "react-toastify"

export interface Joke {
    id: number | null | undefined
    joke: string
    response: string
}

interface FetchApiProps {
    jokes?: Joke | null
    onSuccess: (data: Joke, action: 'add' | 'delete') => void
}

const FetchApi: React.FC<FetchApiProps> = ({ jokes, onSuccess }) => {
    const [joke, setJoke] = useState(jokes?.joke || '')
    const [response, setResponse] = useState(jokes?.response || '')

    useEffect(() => {
        if(jokes) {
            setJoke(jokes.joke)
            setResponse(jokes.response)
        }
    }, [jokes])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newJoke = {id: jokes?.id, joke, response}
        if(newJoke.joke.trim() === '' || newJoke.response.trim() === '') {
            toast.error("Não se pode fazer uma piada sem a piada ou muito menos a resposta.")
            return
        }
        //if(jokes) { onSuccess(newJoke, 'update') }
        onSuccess(newJoke, 'add')

        setJoke('')
        setResponse('')
    }

    return (
       <form onSubmit={handleSubmit}>
        <div>
            <textarea
            value={joke}
            placeholder="Digite a pergunta da piada..."
            onChange={(e) => setJoke(e.target.value)}>
            </textarea>
        </div>
        <div>
            <textarea 
            value={response} 
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Digite a resposta da piada..."></textarea>
        </div>
            <button type="submit" className={styles.addBtn}>{jokes ? 'Atualizar piada' : 'Adicionar nova piada'}</button>
       </form>
    )
}

export default FetchApi
