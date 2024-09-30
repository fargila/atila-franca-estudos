import React, { useEffect, useState } from "react"
import styles from '../styles/AxiosAPI.module.css'
import { toast } from "react-toastify"
import axios from "axios"
import ShowResponse from "./ShowResponse"
import Loader from "./Loader"

export interface Joke
{
    id: number
    joke: string
    response: string
}

const AxiosApi = () =>
{
    const [jokes, setJokes] = useState<Joke[]>([])
    const [newJoke, setNewJoke] = useState<string>('')
    const [newResponse, setNewResponse] = useState<string>('')
    const [isLoading1, setIsLoading1] = useState<boolean>(false)
    const [isLoading2, setIsLoading2] = useState<boolean>(false)

    useEffect (() => 
    {
        const axiosFetchjokes = async() =>
        {
            setIsLoading1(true)
            try
            {
                const response = await axios.get(`http://localhost:3100/Jokes`)
                setJokes(response.data)
                setIsLoading1(false)
            }
            catch(error){ toast.error('Ocorreu um erro ao buscar as piadas: ' + error + '.') }
        } 
        
        axiosFetchjokes()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => 
    {
        setIsLoading2(true)
        e.preventDefault()
        if(newJoke && newResponse)
        {
            try
            {
                const newId = jokes.length ? Math.max(...jokes.map(joke => joke.id)) + 1 : 0;
                const response = await axios.post(`http://localhost:3100/Jokes`,
                {
                    id: newId.toString,
                    joke: newJoke,
                    response: newResponse
                })
                setNewJoke('')
                setNewResponse('')
                setJokes(prevJoke => [...prevJoke, response.data])
                toast.success('Piada enviada com sucesso!')
            }
            catch(error){ toast.error('Ocorreu um erro ao enviar a piada: ' + error + '.') }
        }
        else{ toast.error('Não se pode fazer uma piada sem a piada, muito menos uma resposta...') }
        setIsLoading2(false)
    }

    const axiosDeleteJoke = async (id: number) => 
    {
        if(id)
        {
            try
            {
                await axios.delete(`http://localhost:3100/Jokes/${id}`)
                setJokes(prevJokes => prevJokes.filter(joke => joke.id !== id))
                toast.success('Piada deletada com sucesso!')
            }
            catch(error){ toast.error('Erro ao deletar a piada: ' + error +'.') }
        }
    }

    return (
       <div>
            {isLoading1 ? <Loader /> : 
                <form onSubmit={handleSubmit}>
                    <div>
                        <textarea
                        value={newJoke}
                        placeholder="Digite a pergunta da piada..."
                        onChange={(e) => setNewJoke(e.target.value)}>
                        </textarea>
                    </div>
                    <div>
                        <textarea 
                        value={newResponse} 
                        onChange={(e) => setNewResponse(e.target.value)}
                        placeholder="Digite a resposta da piada..."></textarea>
                    </div>
                        <button type="submit" className={styles.addBtn}>Adicionar nova piada</button>
                </form>
            }

            <div>
                {isLoading2 ? <Loader /> : (Array.isArray(jokes) && jokes.map((joke)=> 
                (
                    <div key={joke.id} className={styles.jokeDiv}>
                        <h3>{joke.joke}</h3>
                        <ShowResponse joke={joke}/>
                        <button onClick={() => axiosDeleteJoke(joke.id)}>Deletar piada</button>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default AxiosApi
