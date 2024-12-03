import { useEffect, useRef, useState } from 'react'
import Header from './components/Header/Header';
import './App.css'
import MainInfo from './components/MainInfo/MainInfo';
import Forecast from './components/Forecast/Forecast';
import AirQI from './components/AirQI/AirQI';
import Sun from './components/Sun/Sun';
import Highlights from './components/Highlights/Highlights';
import axios from 'axios';
import TodayAt from './components/TodayAt/TodayAt';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [airQuality, setAirQuality] = useState(null)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState({ lat: null, lon: null })
  const inputRef = useRef()
  const API_KEY = '2d989118e7e06b61ff83a3cb1dd5f642'
  const API = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
  })

  useEffect(() => {
    API.get(`/weather?q=tashkent&appid=${API_KEY}&units=metric`)
      .then((res) => setCurrentWeather(res.data))

    API.get(`/forecast?q=tashkent&appid=${API_KEY}&units=metric`)
      .then((res) => setForecast(res.data))
  }, [])

  useEffect(() => {
    API.get(`/air_pollution?lat=${currentWeather?.coord.lat}&lon=${currentWeather?.coord.lon}&appid=${API_KEY}`)
      .then((res) => setAirQuality(res.data))
  }, [currentWeather])

  const fetchData = () => {
    API.get(`/weather?q=${inputRef?.current?.value}&appid=${API_KEY}&units=metric`)
      .then((res) => setCurrentWeather(res.data))

    API.get(`/forecast?q=${inputRef?.current?.value}&appid=${API_KEY}&units=metric`)
      .then((res) => setForecast(res.data))
  }

  useEffect(() => {
    API.get(`/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`)
      .then((res) => setCurrentWeather(res.data))

    API.get(`/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`)
      .then((res) => setForecast(res.data))

    API.get(`/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
      .then((res) => setAirQuality(res.data))
  }, [location])

  return (
    <>
      <Header setError={setError} setLocation={setLocation} fetchData={fetchData} inputRef={inputRef} />
      <div className="wrapper">
        <div className="box">
          <MainInfo currentWeather={currentWeather} />
          <Forecast forecast={forecast} />
        </div>
        <div className="box-3">
          <div className="box-1">
            <AirQI airQuality={airQuality} />
            <Sun forecast={forecast} />
          </div>
          <div className="box-2">
            <Highlights forecast={forecast} />
            <TodayAt forecast={forecast} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
