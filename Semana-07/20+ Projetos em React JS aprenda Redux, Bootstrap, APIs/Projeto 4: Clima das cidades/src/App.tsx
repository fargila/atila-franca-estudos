import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Search from './components/Search'
import { Title } from './styles/AppStyles'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [city, setCity] = useState<string>('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])  

  const apiKey = import.meta.env.VITE_API_KEY || ''

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br`)

      setCity(response.data.name)
      setWeather(response.data)

    })
  }, [apiKey])

  const searchWeather = async () => {
    try
    {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`)
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pt_br`)
      
      setWeather(weatherResponse.data)
      setForecast(forecastResponse.data.list.slice(0, 5))
    }
    catch (error) { alert(`Erro ao buscar o clima: ${error}`) }
    console.log(weather)
    console.log(forecast)
  } 
  return (
    <>
      <Title>Condições Climáticas</Title>
      <Search city={city} setCity={setCity} searchWeather={searchWeather} />
      <CurrentWeather weather={weather} />
      {forecast.length>0 && <Forecast forecasts={forecast} />}
    </>
  )
}

export default App
