import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
export default function Weather(props) {
  const [weather, setWeather] = useState("");
  function displayTemp(response) {
    setWeather({
      temperature: response.data.main.temp,
    });
  }
  let units = "metric";
  let apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemp);

  return (
    <div>
      <h2>
        The weather in {props.city} is {Math.round(weather.temperature)} °C
      </h2>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
