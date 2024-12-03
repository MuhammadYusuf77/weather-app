import React from 'react'
import './Sun.css'
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";

export default function Sun({ forecast }) {
    let sunsetHour = new Date(forecast?.city?.sunset * 1000).getHours();
    let sunsetHourReal = sunsetHour > 12 ? sunsetHour - 12 : sunsetHour
    let isAMorPM = sunsetHour > 12 ? "PM" : "AM";

    let sunriseTime = `${new Date(forecast?.city?.sunrise * 1000).getHours()}:${new Date(forecast?.city?.sunrise * 1000).getUTCMinutes()} AM`

    let sunsetTime = `${sunsetHourReal}:${new Date(forecast?.city?.sunset * 1000).getUTCMinutes()} ${isAMorPM}`

    return (
        <div className='sun'>
            <p className="sun-title">Sunrise & Sunset</p>
            <br />
            <div className="sun-inner">
                <div className="sun-">
                    <img width={60} src="/sunrise.png" alt="" className="sun-img" />
                    <div className="sun-info">
                        <span className="sun-info-text">Sunrise</span>
                        <br />
                        <span className="sun-info-time">{sunriseTime}</span>
                    </div>
                </div>

                <div className="sun-">
                    <img width={60} src="/sunset.png" alt="" className="sun-img" />
                    <div className="sun-info">
                        <span className="sun-info-text">Sunset</span>
                        <br />
                        <span className="sun-info-time">{sunsetTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
