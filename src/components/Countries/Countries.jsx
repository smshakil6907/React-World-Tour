import { useEffect, useState } from "react";
import Country from "../Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log("add this to your visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {visitedFlag.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}
