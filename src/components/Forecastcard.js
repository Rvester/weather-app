import React, { useState, useEffect } from 'react'

export default function Forecastcard({id, avghumidity, date, sunrise, avgtemp_f}) {
  return (
    <div className="weather-card">
    <p className="text-info">Forecast Card #{id}</p>
    <br />

    <p className="text-primary">Average Humidity: {avghumidity}</p>
    <p className="text-danger">Date: {date}</p>
    <p className="text-warning">Sunrise: {sunrise}</p>
    <p className="text-success">Average Temp (F): {avgtemp_f}</p>
    <br />
    <br />
    </div>
  )
}
