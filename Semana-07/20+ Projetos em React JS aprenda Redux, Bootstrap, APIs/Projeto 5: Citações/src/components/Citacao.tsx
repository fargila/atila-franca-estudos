import React from "react"
import { useState, useEffect } from "react"

interface CitacaoProps {
    text: string
    author: string
}

const Citacao: React.FC<CitacaoProps> = ({text, author}) => {
    const [translation, setTranslation] = useState('')

    async function translateQuote(language: string) {
        try
        {
            //Fui negado ao fetchear :^(
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://libretranslate.de/translate`, {
                method: 'POST',
                body: JSON.stringify({
                    q: text,
                    source: 'pt',
                    target: language
                }),
                headers: {'Content-Type': 'application/json'}
            })

            const data = await response.json()
            setTranslation(data.translatedText)
        }
        catch (error) { alert('Erro ao traduzir:' + error) }
    }

    useEffect(() => {
        setTranslation('')
    }, [text])
    
    return (
        <div>
            <blockquote className="blockquote">
                <p>{translation ? translation : text}</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
            <button className="btn btn-primary m-1" onClick={() => translateQuote('en')}>Translate to english</button>
            <button className="btn btn-primary m-1" onClick={() => translateQuote('es')}>Traducir para español</button>
        </div>
    )
}

export default Citacao
