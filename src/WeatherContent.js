import React from "react";
import QuoteDate from "./QuoteDate";


export default function WeatherContent(props) {
    return(
<div className="WeatherContent">
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
    );</div>
</div>
}