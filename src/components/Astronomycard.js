import React from 'react'

export default function Astronomycard({sunrise, sunset, moonrise, moonset, moon_phase, moon_illumination}) {
  return (
   
           <div className="astro-center">
    <p className="astro-info">Astronomy Card</p>
    <br />

    <p className="astro">Sunrise: {sunrise}</p>
    <p className="astro">Sunset: {sunset}</p>
    <p className="astro">Moonrise: {moonrise}</p>
    <p className="astro">Moon Phase: {moon_phase}</p>
    <p className="astro">Moon Illumination: {moon_illumination}</p>
    <br />
    <br />
    </div>
  )
}
