import React from "react";
import Layout from "../../Components/Layout";
import Head from "next/head";
import styles from "./country.module.css";
import Link from "next/link";

const Country = ({ country }) => {
  console.log("country", country);
  return (
    <>
      <Head>
        <title>About {country[0].region}</title>
      </Head>

      <Layout title={country.subregion}>
        <div className={styles.container}>
          <div className={styles.container_left}>
            <div className={styles.overview_panel}>
              <img src={country[0].flags.png} alt="IMG"></img>

              <h1 className={styles.overview_name}>
                {" "}
                {country[0].altSpellings[1]}
              </h1>
              <div className={styles.overview_region}>{country[0].region}</div>

              <div className={styles.overview_numbers}>
                <div className={styles.overview_population}>
                  <div className={styles.overview_value}>
                    {country[0].population}
                  </div>
                  <div className={styles.overview_label}>Population</div>
                </div>

                <div className={styles.overview_area}>
                  <div className={styles.overview_value}>{country[0].area}</div>
                  <div className={styles.overview_label}>Area</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.details_panel}>
              <h4 className={styles.details_panel_heading}>Details</h4>

              <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Capital</div>
                <div className={styles.details_panel_value}>
                  {country[0].capital}
                </div>
              </div>

              <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Languages</div>
                <div className={styles.details_panel_value}>
                  {country[0].languages.kal}
                </div>
              </div>

              <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Currencies</div>
                <div className={styles.details_panel_value}>
                  {/* {country[0].currencies.DKK.name} */}
                  USD, EURO
                </div>
              </div>

              <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Native name</div>
                <div className={styles.details_panel_value}>
                  {country[0].subregion}
                </div>
              </div>

              <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Gini</div>
                <div className={styles.details_panel_value}>
                  {country[0].latlng} %
                </div>
              </div>

              {/* <div className={styles.details_panel_borders}>
                <div className={styles.details_panel_borders_label}>
                  Neighbouring Countries
                </div>
                <div className={styles.details_panel_borders_container}>
                  {borders.map(({ flag, name }) => (
                    <div className={styles.details_panel_borders_country}>
                      <img src={flag} alt={name}></img>

                      <div className={styles.details_panel_borders_name}>
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            <button className={styles.backButton}>
              <Link href="/">Back to Home</Link>
            </button>
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
