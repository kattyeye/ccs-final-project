import { useState, useEffect } from "react";
import { FaBackspace } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import ContributionForm from "./ContributionForm";
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
    const id = event.currentTarget.value;
    fetch(`api_v1/contributions/${id}/`, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Oops, something went wrong!", response.status);
      }
      const updatedContribs = [...contribList];
      const index = updatedContribs.findIndex((contrib) => {
        return contrib.id == id;
      });

      updatedContribs.splice(index, 1);
      setContribList(updatedContribs);
    });
  }
  return (
    <div className="container-fluid contrib-list-holder">
      {contribList?.map((contrib) => (
        <div key={contrib.id}>
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
      <ContributionForm setContribList={setContribList} />
    </div>
  );
}
export default withRouter(ContributionList);
