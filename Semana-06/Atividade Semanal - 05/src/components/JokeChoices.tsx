import React from "react";
import FetchApi, { Joke } from "./FetchApi";
import { toast } from 'react-toastify'
import ShowResponse from '../components/ShowResponse'
import styles from '../styles/jokeChoices.module.css'

interface JokeChoicesProps {
    jokes: Joke[]
    onAdd: (joke: Joke) => void
    //onUpdate: (joke: Joke) => void
    onDelete: (id: number | undefined | null) => void
}

const JokeChoices: React.FC<JokeChoicesProps> = ({ jokes, onAdd, onDelete }) => {

    const handleSuccess = (joke: Joke, operation: 'add' | 'update' | 'delete') => {
        if(operation === 'add') {
            if(jokes.length === 10) {
                toast.error('Já estou cheio dessas piadas! Literalmente, delete uma piada para poder adicionar outra.')
                return
            }
            onAdd(joke)
            toast.success('Piada adicionada com sucesso!')
        }
        // else if(operation === 'update') { 
        //     onUpdate(joke)
        //     toast.success('Piada atualizada com sucesso!')
        // }
        else if(operation === 'delete') { 
            onDelete(joke.id)
            toast.success('Piada deletada com sucesso!')
        }
    }

    return (
        <div>
        <FetchApi  onSuccess={handleSuccess}/>
        {(jokes.map((joke)=> (
          <div key={joke.id} className={styles.jokeDiv}>
            <h3>{joke.joke}</h3>
            <ShowResponse joke={joke}/>
            <button onClick={() => onDelete(joke.id)}>Deletar piada</button>
          </div>
        )))}</div>
    )
}

export default JokeChoices
