import React, { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import './Header.css'

export default function Header({ inputRef, fetchData, setError, setLocation }) {
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { longitude, latitude } = position.coords
            setLocation({
                lon: longitude,
                lat: latitude
            })
            setError(null)
        },
            (err) => {
                setError("Joriy joylashuvga ruxsat berilmagan!")
            }
        )
    }

    return (
        <div className="header">
            <h1>Weather</h1>

            <input ref={inputRef} type="text" placeholder='Enter city name' />
            <button onClick={() => fetchData()} className="btn"><IoIosSearch /> Search</button>
            <button onClick={getCurrentLocation} className="btn2"><BiTargetLock /> Current Location</button>
        </div>
    )
}   