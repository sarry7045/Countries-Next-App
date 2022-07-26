import React, { useState } from "react";
import styles from "./CountriesTable.module.css";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import Link from "next/Link";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };
  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };
  return (
    <>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}
        >
          <div>Name</div>
          <SortArrow direction="desc" />
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection("population")}
        >
          <div>Population</div>
          <SortArrow direction="asc" />
        </button>

        <button
          className={styles.heading_area}
          onClick={() => setValueAndDirection("population")}
        >
          <div>Area</div>
          <SortArrow direction="desc" />
        </button>

        <button
          className={styles.heading_gini}
          onClick={() => setValueAndDirection("population")}
        >
          <div>Region</div>
          <SortArrow direction="asc" />
        </button>
      </div>
      {orderedCountries.map((country) => (
        <Link href={`/country/${country.capital}`}>
          <div className={styles.row}>
            <div className={styles.flag}>
              <img src={country.flags.png} alt="IMG" />
            </div>
            <div style={{ cursor: "pointer" }} className={styles.name}>
              {country.altSpellings[1]}
            </div>
            <div style={{ cursor: "pointer" }} className={styles.population}>
              {country.population}
            </div>
            <div style={{ cursor: "pointer" }} className={styles.population}>
              {country.area} sq.km
            </div>
            <div style={{ cursor: "pointer" }} className={styles.population}>
              {country.region}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CountriesTable;
