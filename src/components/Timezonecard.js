import React from 'react'

export default function Timezonecard({tz_id, localtime_epoch, localtime}) {
  return (
    <div className= "timecenter">
        <p className="time-card">Timezone Card</p>
        <br />

        <p className ="time">TimeZone: {tz_id}</p>
        <p className = "time">Local time in epoch: {localtime_epoch}</p>
        <p className = "time">Local Time: {localtime}</p>
        <br/>
        <br/>
    </div>
  )
}
