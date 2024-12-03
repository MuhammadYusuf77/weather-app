import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import './MainInfo.css'

export default function MainInfo({ currentWeather }) {
    let weekDays = ["Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const currentDate = {
        day: weekDays[(new Date(currentWeather?.dt * 1000)).getDay() - 1],
        date: new Date(currentWeather?.dt * 1000).getDate(),
        months: months[(new Date(currentWeather?.dt * 1000)).getMonth()],
        year: new Date(currentWeather?.dt * 1000).getFullYear(),
    }

    return (
        <div className="main-info">
            <span className="span1">Now</span>
            <br />
            <div className="temp-box">
                <h2 className="temp">{currentWeather?.main.temp}&deg;C</h2>
                <img src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`} alt="weather-icon" />
            </div>
            <span>{currentWeather?.weather[0].description}</span>
            <hr />
            <p className="text"><CiCalendar /> {currentDate.day}, {currentDate.date}, {currentDate.months} {currentDate.year}</p>
            <p className="text"><CiLocationOn /> {currentWeather?.name}, {currentWeather?.sys.country}</p>
        </div>
    );
}
