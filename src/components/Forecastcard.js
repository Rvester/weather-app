import React, { useState, useEffect } from 'react'

export default function Forecastcard({id, avghumidity, date, sunrise, avgtemp_f}) {
  return (
    <div className="weather-card">
    <p className="text-info"></p>
    <br />
    
    <p className="weather">Date: {date}</p>
    <p className="weather">Average Temp (F): {avgtemp_f}</p>
    <p className="weather">Average Humidity: {avghumidity}</p>
    <p className="weather">Sunrise: {sunrise}</p>
    <br />
    <br />
    </div>
  )
}
