import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function submit(event) {
    event.preventDefault();
    let apiKey = "e91ccfbc281d8496f0d12992ca337a9a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
    
  return (
      <div>
        <form onSubmit={submit}>
          <input type="search" placeholder="Type a city" onChange={changeCity} />
          <button type="Submit">Search</button>
        </form>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
}

