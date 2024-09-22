import React from "react";

interface DescriptionProps {
    nome: string
    idade: number
}

const Description:  React.FC<DescriptionProps> = ({nome, idade }) => {
    return <>
        <div>
            <p>Seu nome é: {nome}</p>
            <p>E você tem: {idade} anos de idade.</p>
        </div>
        </>
}

export default Description