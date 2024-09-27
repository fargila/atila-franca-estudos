import React from "react"
import { BuscaContainer, InputCidade, BotaoBuscar } from "../styles/SearchStyles";

interface SearchProps  {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    searchWeather: () => void;
}

const Search: React.FC<SearchProps> = ({city, setCity, searchWeather}) => {
    return (
        <BuscaContainer>
            <InputCidade value={city} type="text" onChange={(e) => setCity(e.target.value)} placeholder="Digite uma cidade..."/>
            <BotaoBuscar onClick={searchWeather}>Buscar</BotaoBuscar>
        </BuscaContainer>
    )
}

export default Search
