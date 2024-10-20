import React, { useState } from "react";
import "./Country.css";
import CountryDetails from "./CountryDetails/CountryDetails";

export default function Country({
  country,
  handleVisitedCountries,
  handleVisitedFlag,
}) {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handleVisitedCountries);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}
      </h3>
      <p style={{ color: visited ? "purple" : "white" }}>
        Population: {population}
      </p>
      <p style={{ color: visited ? "purple" : "white" }}>Area: {area}</p>
      <p style={{ color: visited ? "purple" : "white" }}>
        <small>Code: {cca3}</small>
      </p>
      <img src={flags.png} alt="" />
      <button onClick={() => handleVisitedCountries(country)}>
        Visited Countries
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.png)}>
        Visited Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I am visited this country" : "I want to visite"}
      <hr />
      <CountryDetails
        country={country}
        handleVisitedCountries={handleVisitedCountries}
      ></CountryDetails>
    </div>
  );
}
