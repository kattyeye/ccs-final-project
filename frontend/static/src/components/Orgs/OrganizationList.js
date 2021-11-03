import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const BASE_URL = "https://api.data.charitynavigator.org/v2";
const APP_ID = "0523b096";
const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";

// &pageSize=1000&rated=true&state=SC&city=Greenville

function OrganizationList() {
  const [charities, setCharities] = useState([]);
  const location = useLocation;

  useEffect(() => {
    async function fetchCharities() {
      const response = await fetch(
        `${BASE_URL}/Organizations?app_id=${APP_ID}&app_key=${APP_KEY}&search=unitd ministries&rated=true`
      );
      const data = await response.json();
      console.log("charities", data);
      setCharities(data);
    }
    fetchCharities();
  }, []);

  return (
    <ul>
      {charities?.map((charity) => (
        <li>
          {charity.charityName}
          <img
            className="stars-img"
            src={charity.currentRating.ratingImage.large}
          ></img>
        </li>
      ))}
    </ul>
  );
}
export default OrganizationList;
