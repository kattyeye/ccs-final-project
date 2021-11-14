import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const BASE_URL = "https://api.data.charitynavigator.org/v2";
const APP_ID = "0523b096";
const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";
function CharitySearch(props) {
  const [charitySearch, setCharitySearch] = useState("");
  const [charities, setCharities] = useState([]);

  function handleSearchChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setCharitySearch(value);
  }

  useEffect(() => {
    console.log("firing");
    const searchCharities = async () => {
      const response = await fetch(
        `${BASE_URL}/Organizations?app_id=${APP_ID}&app_key=${APP_KEY}&search=${charitySearch}&rated=true`
      );
      if (!response.ok) {
        alert("No organizations match your input.");
      } else {
        const data = await response.json();
        console.log("data", data);
        setCharities(data.slice(0, 5));
      }
    };
    searchCharities();
  }, [charitySearch]);
  return (
    <div className="form-search">
      <input
        type="text"
        placeholder="Search for a charity"
        name="charity"
        value={charitySearch}
        onChange={handleSearchChange}
      />
      <FaSearch className="fa-search" />

      <ul>
        {charities?.map((charity) => (
          <li className="charitysearchlist" key={charity.ein}>
            <button
              type="button"
              className="select-button"
              onClick={() => props.select(charity)}
            >
              {charity.charityName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(CharitySearch);
