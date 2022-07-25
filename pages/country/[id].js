import React from "react";
import Layout from "../../Components/Layout";
import Head from "next/head";
import styles from "./country.module.css";

const Country = ({ country }) => {
  console.log("country", country);
  return (
    <>
      <Head>
        <title>About {country[0].region}</title>
      </Head>
      <Layout title={country.subregion}>
        <div>
          <div>
            <img src={country[0].flags.png} alt={country[0].altSpellings[1]} />
            <h1>Area-{country[0].area}</h1>
            <h1>Population-{country[0].population}</h1>
            <h1>Languages-{country[0].languages.kal}</h1>
            <h1>Region-{country[0].region}</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/capital/${params.id}`
  );
  const country = await res.json();
  return {
    props: {
      country,
    },
  };
};
