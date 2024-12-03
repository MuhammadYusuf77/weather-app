import React from 'react'

export default function AirQiItem({ airType, airData }) {
    return (
        <li className="air-item">
            <span className="air-text">{airType}</span>
            <br />
            <span className="air-info-text">{airData}</span>
        </li>
    )
}
