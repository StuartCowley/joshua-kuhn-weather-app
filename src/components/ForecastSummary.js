import React from "react";
import iconData from "../data/iconData.json";

import "../styles/ForecastSummary.css";

function ForecastSummary({ date, description, icon, temperature, onSelect }) {
  let weatherCode = `${icon.toString().slice(0, 1)}00`;
  if (icon > 800) {
    weatherCode = "801";
  }
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt="icon" />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button
        className="forecast-summary__button"
        type="button"
        onClick={() => onSelect(date)}
      >
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;
