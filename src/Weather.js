import React, { useState } from "react";
import axios from "axios";
import logo from "./images/world-icon.png";
import "./App.css";
import "./Weather.css";
import QuoteData from "./QuoteData";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.dt * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="box">
            <div className="title">
              <div>
                <h1>
                  <img
                    src={logo}
                    clasName=" side-content-center logo"
                    alt=""
                    width={100}
                  />
                  Weather App
                </h1>
              </div>
            </div>
            <div className="breaker1"></div>
            <form action="" id="search-bar">
              <div className="row" id="navbar">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Type the city..."
                    className="form-control"
                    id="bar-input"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control"
                    id="search-button"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Current"
                    className="form-control"
                    id="current-button"
                  />
                </div>
              </div>
            </form>

            <div className="row" id="main-information">
              <div className="col-6">
                <div className="information-description">
                  <div className="city-default" id="city-default">
                    {weatherData.city}
                  </div>
                  <div className="quote-default" id="quote-default">
                    <QuoteData date={weatherData.date} />,{" "}
                    {weatherData.description}
                  </div>
                </div>
              </div>

              <div className="col-6 main-temperature">
                <img
                  src={weatherData.icon}
                  alt="icon"
                  className="float-left"
                  id="main-icon"
                />
                <span className="float-left" id="main-grades">
                  {Math.round(weatherData.temperature)}
                </span>
                <span id="main-units">
                  <a href="/" className="active" id="celsius">
                    ºC
                  </a>
                  <span>|</span>
                  <a href="/" id="fahrenheit">
                    ºF
                  </a>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span className="description-forecast">
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}%</span>
                  </li>
                  <li>
                    Wind: <span id="wind"> {weatherData.wind}m/s</span>
                  </li>
                  <li>
                    Pressure:{" "}
                    <span id="pressure"> {weatherData.pressure}m/s</span>
                  </li>
                </span>
              </div>
            </div>
            <div class="breaker2"></div>
          </div>
        </div>

        <div className="sign">
          <div>
            <p>
              <a
                href="https://github.com/mvacjar/react-weather-app"
                target="_blank"
                className="link"
                id="link"
                rel="noreferrer"
              >
                Open-source code
              </a>
              <span className="name"> by Mvacjar </span>
              <a
                href="https://main--grand-donut-c83a56.netlify.app"
                target="_blank"
                className="link"
                rel="noreferrer"
                id="link"
              >
                hosted here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "36f068b85a3t4301a8fo4942f0d454f5";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
