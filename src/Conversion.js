import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="Conversion">
        <span className="float-left" id="main-grades">
          {Math.round(props.celsius)}
        </span>
        <span id="main-units">
          ºC
          <span>|</span>
          <a href="/" id="fahrenheit" onClick={convertToF}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Conversion">
        <span className="float-left" id="main-grades">
          {Math.round(props.data.fahrenheit)}
        </span>
        <span id="main-units">
          <a href="/" className="active" id="celsius" onClick={convertToC}>
            ºC
          </a>
          <span>|</span>
          ºF
        </span>
      </span>
    );
  }
}
