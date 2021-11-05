import { useState, useEffect } from "react";
import { FaBackspace } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import Cookies from "js-cookie";
function ContributionList() {
  const [contribList, setContribList] = useState([]);
  useEffect(() => {
    async function fetchContribs() {
      const response = await fetch(`/api_v1/contributions/`);
      const data = await response.json();
      console.log("contribs", data);
      setContribList(data);
    }
    fetchContribs();
  }, []);

  async function handleDelete(event) {
    fetch(`api_v1/contributions/${event.target.value}/`, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Oops, something went wrong!", response.status);
      }
      event.target.parentNode.remove();
    });
  }
  return (
    <div className="container-fluid contrib-list-holder">
      {contribList?.map((contrib) => (
        <div>
          <h6>
            {contrib.charity}: {contrib.text}
            <button
              type="button"
              className="xbutton"
              value={contrib.id}
              onClick={handleDelete}
            >
              <AiFillDelete />
            </button>
            <button
              type="button"
              className="xbutton"
              value={contrib.id}
              onClick={handleDelete}
            >
              <AiFillEdit />
            </button>
          </h6>
        </div>
      ))}
    </div>
  );
}
export default withRouter(ContributionList);
