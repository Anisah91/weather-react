import React, { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
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

      <div className="spinner">
        <InfinitySpin
          visible={true}
          width="300"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    </div>
  );
}
