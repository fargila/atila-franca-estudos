import React from "react"
import { ClimaInfo } from "../styles/CurrentWeatherStyles";

interface Weather {
    name: string
    main: { temp: number }
    weather: 
    Array<{
        description: string
        icon: string
    }>
}

type CurrentWeatherProps = {
    weather: Weather | null 
};

const  CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {

    if(!weather) {
        return <></>
    }
    return (
        <ClimaInfo>
           <h3>{weather.name}</h3>
            <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}  
            alt={`${weather.weather[0].description}`}/> 
            <p>{Math.round(weather.main.temp - 273.15)}ºC</p>
            <p>{weather.weather[0].description}</p>
        </ClimaInfo>
    )
}

export default CurrentWeather
