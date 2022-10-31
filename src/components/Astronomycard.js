import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Astronomycard({
  sunrise,
  sunset,
  moonrise,
  moonset,
  moon_phase,
  moon_illumination,
}) {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <br />
        <div className="astro-div">
          <Typography variant="h5" component="div">
            <p className="astro-info">Astronomy of the Day</p>
          </Typography>
          <p className="astro">Sunrise: {sunrise}</p>
          <p className="astro">Sunset: {sunset}</p>
          <p className="astro">Moonrise: {moonrise}</p>
          <p className="astro">Moonset: {moonset}</p>
          <p className="astro">Moon Phase: {moon_phase}</p>
          <p className="astro">Moon Illumination: {moon_illumination}</p>
          <br />
          <br />
        </div>
      </CardContent>
    </Card>
  );
}
