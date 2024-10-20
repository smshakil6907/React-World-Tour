import React from "react";
import CountryData from "../CountryData/CountryData";

export default function CountryDetails({ country, handleVisitedCountries }) {
  return (
    <div>
      <h4>Country Details: </h4>
      <hr />
      <CountryData
        country={country}
        handleVisitedCountries={handleVisitedCountries}
      ></CountryData>
    </div>
  );
}
