import React from 'react'
import './AirQI.css'
import { TbWind } from "react-icons/tb";
import AirQiItem from '../AirQiItem/AirQiItem';

export default function AirQI({ airQuality }) {
    let airQualityName = ["Good", "Fair", 'Moderate', 'Poor', "Very Poor"]
    let airStatus = airQualityName[airQuality?.list[0].main.aqi - 1]

    return (
        <div className='wrp'>
            <h2 className="highlights-title">Today's highlights</h2>
            <div className='air-qi'>
                <div className="air-top">
                    <p className="air-title">Air Quality Index</p>

                    <span className={`air-type ${airStatus?.toLowerCase().slice(0, 4)}`}>{airStatus}</span>
                </div>

                <div className="air-info">
                    <ul className="air-list">
                        <li className="air-item">
                            <img width={70} src="/wind.png" alt="" className="air-item-img" />
                        </li>
                        <AirQiItem airType={"CO"} airData={airQuality?.list[0].components.co} />
                        <AirQiItem airType={"NH3"} airData={airQuality?.list[0].components.nh3} />
                        <AirQiItem airType={"NO"} airData={airQuality?.list[0].components.no} />
                        <AirQiItem airType={"NO2"} airData={airQuality?.list[0].components.no2} />
                        <AirQiItem airType={"O3"} airData={airQuality?.list[0].components.o3} />
                        <AirQiItem airType={"PM2.5"} airData={airQuality?.list[0].components.pm2_5} />
                        <AirQiItem airType={"PM10"} airData={airQuality?.list[0].components.pm10} />
                        <AirQiItem airType={"SO2"} airData={airQuality?.list[0].components.so2} />
                    </ul>
                </div>
            </div>
        </div>
    )
}
