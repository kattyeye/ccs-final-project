import { useState, useEffect } from "react";

function Contributions() {
  const [contribs, setContribs] = useState([]);
  useEffect(() => {
    async function fetchContribs() {
      const response = await fetch(`/api_v1/contributions/`);
      const data = await response.json();
      console.log("articles", data);
      setContribs(data);
    }
    fetchContribs();
  }, []);
  return (
    <div className="container">
      {contribs?.map((contribution) => (
        <div>{contribution.text}</div>
      ))}
    </div>
  );
}

export default Contributions;
