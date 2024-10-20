import React from "react";

export default function CountryData({ country, handleVisitedCountries }) {
  return (
    <div>
      <p>
        <small>Country Data: {country.name.common}</small>
      </p>
    </div>
  );
}
