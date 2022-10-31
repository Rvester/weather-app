import React, { useEffect, useState } from "react";
import Timezonecard from "../components/Timezonecard";
import { Grid, responsiveFontSizes } from "@mui/material";
import Container from "@mui/material/Container";
import Search from "../components/Search";

export default function Timezone() {
  const [query, setQuery] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;

  const [data, setData] = useState({
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  });

  const [timezone, setTimezone] = useState({});
  let getTimezone = {};

  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/timezone.json?q=${query}&days=14&key=${apiKey}`;
    const fetchData = async () => {
      const response = await (await fetch(url)).json();

      console.log(response);
      const data2 = {
        tz_id: response.location.tz_id,
        localtime_epoch: response.location.localtime_epoch,
        localtime: response.location.localtime,
      };
      setTimezone(data2);
    };
    fetchData();
    setData(data);
  }, [query]);
  console.log(data);
  console.log(getTimezone);

  const handleOnSearchChange = (searchData) => {
    setQuery(searchData);
  };
  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      <Container maxWidth="xl" className="astro-container">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Timezonecard
            tz_id={timezone.tz_id}
            localtime_epoch={timezone.localtime_epoch}
            localtime={timezone.localtime}
          />
        </Grid>
      </Container>
    </div>
  );
}
