import React from 'react'
import './Forecast.css'
import ForecastItem from '../ForecastItem/ForecastItem'

export default function Forecast({ forecast }) {
    return (
        <div className='forecast'>
            <p className="f-title">5 days Forecast</p>
            <ul className="forecast-list">
                <ForecastItem data={forecast?.list[7]} />
                <ForecastItem data={forecast?.list[15]} />
                <ForecastItem data={forecast?.list[23]} />
                <ForecastItem data={forecast?.list[31]} />
                <ForecastItem data={forecast?.list[39]} />
            </ul>
        </div>
    )
}