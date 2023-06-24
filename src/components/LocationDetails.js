import React from "react";

import "../styles/LocationDetails.css";

function LocationDetails({ city, country, errorMessage }) {
  return errorMessage ? (
    <h1 className="error-message">{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;
