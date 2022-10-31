import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Timezonecard({ tz_id, localtime_epoch, localtime }) {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <br />
        <div className="time-div">
          <Typography variant="h5" component="div">
            <p className="time-card">Timezone Card</p>
          </Typography>
          <p className="time">TimeZone: {tz_id}</p>
          <p className="time">Local time in epoch: {localtime_epoch}</p>
          <p className="time">Local Time: {localtime}</p>
          <br />
          <br />
        </div>
      </CardContent>
    </Card>
  );
}
