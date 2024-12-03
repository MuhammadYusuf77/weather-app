import React from 'react'
import TodayAtItem from '../TodayAtItem/TodayAtItem'
import './TodayAt.css'

export default function TodayAt({ forecast }) {
    let todayAt = forecast?.list.slice(0, 7)

    return (
        <>
            <h2 className="at-title">Today at</h2>
            <ul className="at-list">
                {
                    todayAt?.map((el) => <TodayAtItem time={el.dt} temp={el.main.temp} icon={el.weather[0].icon} />)
                }
            </ul>
        </>
    )
}
