import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const detailCountry = async () => {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      setCountry(response.data);
    };
    detailCountry();
  }, [countryId]);

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
      {!country ? (
        <h3>Country not found</h3>
      ) : (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          ></img>
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border) => {
                      return (
                        <li>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
