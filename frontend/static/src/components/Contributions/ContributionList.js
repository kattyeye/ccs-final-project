import { useState, useEffect } from "react";

function ContributionList() {
  const [contribs, setContribs] = useState([]);
  useEffect(() => {
    async function fetchContribs() {
      const response = await fetch(`/api_v1/contributions/`);
      const data = await response.json();
      console.log("contribs", data);
      setContribs(data);
    }
    fetchContribs();
  }, []);

  return (
    <div className="container">
      {contribs?.map((contrib) => (
        <div>{contrib.text}</div>
      ))}
    </div>
  );
}
export default ContributionList;
