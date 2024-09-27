import React from "react"
import { PrevisaoContainer } from "../styles/ForecastStyles";


interface ForecastData {
    dt: number
    main: { temp: number }
    weather: Array<{
        description: string
        icon: string
    }>
}

type CurrentForecastProps = {
    forecasts: ForecastData[] | null
}

const Forecast: React.FC<CurrentForecastProps> = ({ forecasts }) => {
    if(!forecasts) {
        return <></>
    }
    
    return (
        <PrevisaoContainer>
            <h4>Previsão para as próximas horas</h4>
            <ul>
                    { forecasts.map((forecast) => (
                        <li key={forecast.dt}>
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={`${forecast.weather[0].description}`} />ºC - descrição
                            <p>{Math.round(forecast.main.temp - 273.15)}ºC</p>
                            <p>{forecast.weather[0].description}</p>
                        </li>
                    )) }
            </ul>
        </PrevisaoContainer>
    )
}

export default Forecast
