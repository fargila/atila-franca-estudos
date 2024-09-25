import React, { ChangeEvent, useState } from 'react'

const ListaDeCompras = () => {
    const [items, setItems] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(inputValue.trim() === '') { return }
        setItems([...items, inputValue])
        setInputValue('')
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
    <form action="" className='formLogin'>
        <label htmlFor="item">Adicione um item à compra: </label>
        <input type="text" name='item' value={inputValue} onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Adicionar</button>
        <ul>
            {items.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    </form>
  )
}

export default ListaDeCompras
