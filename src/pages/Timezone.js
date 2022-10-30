import React, { useEffect, useState } from 'react'
import Timezonecard from '../components/Timezonecard';


export default function Timezone() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://api.weatherapi.com/v1/timezone.json?q=07104&days=14&key=${apiKey}`

    const [data, setData] = useState({
        tz_id: '',
        localtime_epoch: 0,
        localtime: '',
    })

    const [timezone, setTimezone] = useState({})
        let getTimezone = {};

    
    useEffect(() => {
        const fetchData = async () => {
        const response = await (
            await fetch(url)
        ).json()

console.log(response)
                const data2 = {
                    tz_id: response.location.tz_id,
                    localtime_epoch: response.location.localtime_epoch,
                    localtime: response.location.localtime,
                }
            setTimezone(data2);
        }
        fetchData();
        setData(data);
        
    }, [])
console.log(data)
console.log(getTimezone)
  return (
    <div>
        <Timezonecard
        tz_id = {timezone.tz_id}
        localtime_epoch = {timezone.localtime_epoch}
        localtime = {timezone.localtime}
        
        />
    </div>
  )
}
