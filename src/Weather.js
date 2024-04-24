import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    if (response.data.main && response.data.main.temp) {
      alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    } else {
      console.error("Unable to get temperature data from response:", response);
    }
  }

  let apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric
`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
};
