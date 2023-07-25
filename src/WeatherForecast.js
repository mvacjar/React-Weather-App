import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <div className="forecastBox">
                    <div className="forecastDay">
                      {" "}
                      {formatDay(forecast[index].time)}{" "}
                    </div>
                    <div className="forecastIcon"></div>
                    <img
                      className="img-fluid max-width: 100%; rounded mx-auto d-block width"
                      alt="sunny"
                      src={forecast[index].condition.icon_url}
                      width="40"
                      height="40"
                    ></img>{" "}
                    <div className="forecastTemp">
                      <span className="maxTemp">
                        {Math.round(forecast[index].temperature.maximum)}°
                      </span>
                      <span className="minTemp">
                        {Math.round(forecast[index].temperature.minimum)}°
                      </span>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "36f068b85a3t4301a8fo4942f0d454f5";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
