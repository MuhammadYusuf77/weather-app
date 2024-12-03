import React from 'react'
export default function ForecastItem({ data }) {
    let weekDays = ["Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const forecastItemData = {
        day: (new Date(data?.dt * 1000)).getDay() - 1 != "-1" ? weekDays[(new Date(data?.dt * 1000)).getDay() - 1] : "Sunday",
        date: new Date(data?.dt * 1000).getDate(),
        month: months[(new Date(data?.dt * 1000)).getMonth()],
    }
    return (
        <li className="forecast-item">
            <img width={50} src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" className="f-img" />
            <span className="f-temp">{data?.main?.temp}&deg;C</span>
            <span className="f-date">{forecastItemData.date} {forecastItemData.month}</span>
            <span className="f-day">{forecastItemData.day}</span>
        </li>
    );
}

