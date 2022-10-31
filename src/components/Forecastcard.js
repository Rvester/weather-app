import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Forecastcard({
  id,
  avghumidity,
  date,
  text,
  avgtemp_f,
  maxtemp_f,
  mintemp_f,
  image,
}) {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          alt="green iguana"
          src={image}
          sx={{ objectFit: "contain" }}
        />

        <p className="text-info"></p>
        <br />
        <div className="card-body">
          <Typography variant="h5" component="div">
            <p> {text}</p>
          </Typography>
          <p>Date: {date}</p>
          <p>Max Temperature (F): {maxtemp_f}</p>
          <p>Temperature (F): {avgtemp_f}</p>
          <p>Min Temperature (F): {mintemp_f}</p>
          <p>Average Humidity: {avghumidity}</p>
        </div>
      </CardContent>
    </Card>
  );
}
