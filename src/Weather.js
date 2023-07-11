import React from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Stockholm",
    temperature: 26,
    date: "Tuesday, 12:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    cloudiness: 20,
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="box">
          <div className="title">
            <div>
              <img src="./world-icon.png" alt="world-icon" />
            </div>
            <h1>Weather App</h1>
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
                <ul>
                  <li className="quote-default" id="quote-default">
                    <div>{weatherData.date}</div>
                  </li>
                  <br />
                  <li className="description" id="description">
                    <div>{weatherData.description}</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 main-temperature">
              <img
                src={weatherData.imgUrl}
                alt=""
                className="float-left"
                id="main-icon"
              />
              <span className="float-left" id="main-grades">
                {weatherData.temperature}
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
          <div class="breaker2"></div>
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
                  Cloudiness: <span id="cloud"> {weatherData.cloudiness}%</span>
                </li>
              </span>
            </div>
          </div>
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
            <a href="/" target="_blank" className="link" id="link">
              hosted here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
