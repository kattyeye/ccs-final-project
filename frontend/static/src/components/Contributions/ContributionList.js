import { useState, useEffect } from "react";
import { FaBackspace } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import ContributionForm from "./ContributionForm";
import Cookies from "js-cookie";
import { propTypes } from "react-bootstrap/esm/Image";
function ContributionList(props) {
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

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function subtotal() {
    let total = 0;
    props.contrib.forEach((item) => {
      // console.log("type", item.title, typeof item.price);
      total = total + item.in_dollars;
    });
    console.log({ total });

    return total;
  }

  return (
    <div className="container-fluid contrib-list-holder">
      {contribList?.map((contrib) => (
        <div key={contrib.ein} className="contribution-container">
          <h6>{contrib.charity}</h6>
          <p>Volunteer hours: {contrib.in_hours}</p>
          <p>Donations: ${contrib.in_dollars}</p>
          <p>Notes: {contrib.text}</p>
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
            // onClick={handleUpdate}
          >
            <AiFillEdit />
          </button>
        </div>
      ))}
      <p>Total Amount Given: {dollarUS.format(subtotal())}</p>
      <ContributionForm setContribList={setContribList} />
    </div>
  );
}
export default withRouter(ContributionList);
