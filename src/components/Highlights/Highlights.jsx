import React from 'react'
import './Highlights.css'
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaTemperatureHigh } from "react-icons/fa6";

export default function Highlights({ forecast }) {
    return (
        <div className='Highlights'>
            <ul className="hgh-list">
                <li className="hgh-item">
                    <span className="hgh-item-title">Humidity</span>
                    <br />
                    <div className="hgh-item-inner">
                        <img width={60} src="/water.png" alt="" className="hgh-item-img" />
                        <span className="hgh-item-info">{forecast?.list[0].main.humidity}%</span>
                    </div>
                </li>
                <li className="hgh-item">
                    <span className="hgh-item-title">Pressure</span>
                    <br />
                    <div className="hgh-item-inner">
                        <img width={40} src="/compas.png" alt="" className="hgh-item-img" />                        <span className="hgh-item-info">{forecast?.list[0].main.pressure}hPa</span>
                    </div>
                </li>
                <li className="hgh-item">
                    <span className="hgh-item-title">Visibility</span>
                    <br />
                    <div className="hgh-item-inner">
                        <img width={60} src="/eye.png" alt="" className="hgh-item-img" />                        <span className="hgh-item-info">{forecast?.list[0].visibility / 1000}km</span>
                    </div>
                </li>
                <li className="hgh-item">
                    <span className="hgh-item-title">Wind Speed</span>
                    <br />
                    <div className="hgh-item-inner">
                        <img width={40} src="/navigation.png" alt="" className="hgh-item-img" />
                        <span className="hgh-item-info">{forecast?.list[0].wind.speed}m/s</span>
                    </div>
                </li>
                <li className="hgh-item">
                    <span className="hgh-item-title">Feels Like</span>
                    <br />
                    <div className="hgh-item-inner">
                        <img width={50} src="/temp.png" alt="" className="hgh-item-img" />                        <span className="hgh-item-info">{forecast?.list[0].main.feels_like}°C</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
