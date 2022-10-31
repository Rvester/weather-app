import React, { useEffect, useState } from "react";
import Forecastcard from "../components/Forecastcard";
import Search from "../components/Search";
import { Grid, responsiveFontSizes } from "@mui/material";
import Container from "@mui/material/Container";

const apiKey = process.env.REACT_APP_API_KEY;

export default function Forecast(props) {
  const [query, setQuery] = useState("07104");
  const [data, setData] = useState({
    day: "",
    avghumidity: "",
    date: "",
    sunrise: "",
    avgtemp_f: "",
  });
  const [days, setDays] = useState([]);
  let getDays = [];

  useEffect(() => {
    //fetch data
    const fetchData = async () => {
      const url = `http://api.weatherapi.com/v1/forecast.json?q=${query}&days=14&key=${apiKey}`;
      const response = await (await fetch(url)).json();
      console.log(response);
      if (getDays.length < 14) {
        for (let i = 0; i < 14; i++) {
          getDays.push({
            index: i,
            maxtemp_f: response.forecast.forecastday[i].day.maxtemp_f,
            avgtemp_f: response.forecast.forecastday[i].day.avgtemp_f,
            mintemp_f: response.forecast.forecastday[i].day.mintemp_f,
            date: response.forecast.forecastday[i].date,
            sunrise: response.forecast.forecastday[i].astro.sunrise,
            text: response.forecast.forecastday[i].day.condition.text,
            image: response.forecast.forecastday[i].day.condition.icon,
            avghumidity: response.forecast.forecastday[i].day.avghumidity,
          });
        }
      }

      setData({});
    };
    fetchData();
    setDays(getDays);
  }, [query]);

  const handleOnSearchChange = (searchData) => {
    setQuery(searchData);
  };

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {days.map((day) => (
            <Grid item xs={4} key={`gridItem-${day.index}`}>
              <Forecastcard
                key={day.index}
                id={day.index + 1}
                maxtemp_f={day.maxtemp_f}
                avghumidity={day.avghumidity}
                mintemp_f={day.mintemp_f}
                date={day.date}
                text={day.text}
                image={day.image}
                avgtemp_f={day.avgtemp_f}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
