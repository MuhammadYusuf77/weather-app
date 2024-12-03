import React from 'react'

export default function TodayAtItem({ time, temp, icon }) {
    let date = new Date(time * 1000).getDate();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[new Date(time * 1000).getMonth()]
    let hour = new Date(time * 1000).getHours();
    let realHour = hour > 12 ? hour - 12 + " PM" : hour + " AM";

    return (
        <li className="at-item">
            <span className="at-item-date">{date} {month}</span>
            <p className="at-item-time">{realHour}</p>
            <img width={40} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="at-item-img" />
            <span className="at-item-temp">{temp}&deg;C</span>
        </li>
    )
}
