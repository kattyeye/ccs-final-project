import { useState, useEffect } from "react";
import { useLocation } from "react-router";

function OrganizationList() {
  const [charities, setCharities] = useState([]);
  const location = useLocation;

  useEffect(() => {
    async function fetchCharities() {
      const response =
        await fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=0523b096&app_key=ed9cb1c120b866a6232e01a7affb00c5&pageSize=1000&rated=true&state=SC&city=Greenville
      `);
      const data = await response.json();
      console.log("charities", data);
      setCharities(data);
    }
    fetchCharities();
  }, []);

  return (
    <ul>
      {charities?.map((charity) => (
        <li>{charity.charityName}</li>
      ))}
    </ul>
  );
}
export default OrganizationList;
