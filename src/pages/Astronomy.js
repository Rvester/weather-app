import React from "react";
import { useEffect, useState } from "react";
import Astronomycard from "../components/Astronomycard";
import { Grid, responsiveFontSizes } from "@mui/material";
import Container from "@mui/material/Container";

export default function Astronomy() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.weatherapi.com/v1/astronomy.json?q=07104&days=14&key=${apiKey}`;

  const [data, setData] = useState({
    sunrise: "",
    sunset: "",
    moonrise: "",
    moonset: "",
    moon_phase: "",
    moon_illumination: 0,
  });

  const [astro, setAstro] = useState({});
  let getAstro = {};

  useEffect(() => {
    const fetchData = async () => {
      const response = await (await fetch(url)).json();

      const data2 = {
        sunrise: response.astronomy.astro.sunrise,
        sunset: response.astronomy.astro.sunset,
        moonrise: response.astronomy.astro.moonrise,
        moonset: response.astronomy.astro.moonset,
        moon_phase: response.astronomy.astro.moon_phase,
        moon_illumination: response.astronomy.astro.moon_illumination,
      };

      console.log(response);
      setAstro(data2);
    };

    fetchData();
    setData(data);
  }, []);

  console.log(getAstro);
  console.log(astro);
  console.log(data);

  return (
    <Container maxWidth="xl" className="astro-container">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Astronomycard
          sunrise={astro.sunrise}
          sunset={astro.sunset}
          moonrise={astro.moonrise}
          moonset={astro.moonset}
          moon_phase={astro.moon_phase}
          moon_illumination={astro.moon_illumination}
        />
      </Grid>
    </Container>
  );
}
