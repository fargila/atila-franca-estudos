import { useDispatch } from "react-redux"
import { addTodo } from "../slices/todoSlice"
import { useState } from "react"
import React from "react"

const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch() 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(input.trim() === '') { return }
    dispatch(addTodo(input))
    setInput('')
  }
  return (
   <form onSubmit={handleSubmit}>
    <input type="text" value={input} onChange={ (e) => setInput(e.target.value) } placeholder="Adicione uma tarefa..." />
    <button type="submit">Enviar</button>
   </form>
  )
}

export default AddTodo
