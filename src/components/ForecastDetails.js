import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__max-temp">
        Max Temperature: {forecast.temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temp">
        Min Temperature: {forecast.temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity}%
      </div>
      <div className="forecast-details__wind">
        Wind Speed: {forecast.wind.speed} mph
      </div>
    </div>
  );
}

export default ForecastDetails;
