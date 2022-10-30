import React, { useEffect, useState } from 'react'
import Forecastcard from '../components/Forecastcard';

const apiKey = process.env.REACT_APP_API_KEY;
const url = `http://api.weatherapi.com/v1/forecast.json?q=07104&days=14&key=${apiKey}`

export default function Forecast(props) {
    const [data, setData] = useState({
    	avghumidity: '',
    	date: '',
    	sunrise: '',
    	avgtemp_f: '',
    })
    
    const [days, setDays] = useState([])
    let getDays = [];        


    useEffect(() => {
	    //fetch data
	    const fetchData = async () => {
		const response = await (
		    await fetch(url)
		).json();

	    if(getDays.length < 14) {
	    
		for (let i = 0; i < 14; i++){
		    getDays.push({
			    index: i,
			    avghumidity: response.forecast.forecastday[i].day.avghumidity,
			    date: response.forecast.forecastday[i].date,
			    sunrise: response.forecast.forecastday[i].astro.sunrise,
			    avgtemp_f: response.forecast.forecastday[i].day.avgtemp_f
		    })
		}
    	    }
    
    	    setData({});
    	}
    fetchData();
    setDays(getDays);
    }, []);

    
    return (
    <div>
    
    {days.map(day =>
    <Forecastcard 
    key={day.index}
    id={day.index+1}
    avghumidity={day.avghumidity} 
    date={day.date} 
    sunrise={day.sunrise} 
    avgtemp_f={day.avgtemp_f} />
    )}
    </div>
  );
}

