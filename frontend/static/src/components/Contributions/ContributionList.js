import { useState, useEffect } from "react";
import { FaBackspace } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import ContributionForm from "./ContributionForm";
import Cookies from "js-cookie";
const defaultContrib = {
  ein: "",
  charity: "",
  in_dollars: "",
  in_hours: "",
  text: "",
};
function ContributionList(props) {
  const [contribList, setContribList] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editContribution, setEditContribution] = useState();

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
    event.preventDefault();
    const id = event.currentTarget.value;
    // console.log({ id });
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
  async function handleUpdate(event) {
    event.preventDefault();
    const id = event.currentTarget.value;
    // console.log({ id });
    fetch(`api_v1/contributions/${id}/`, {
      method: "PUT",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editContribution),
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
      props.setContrib(defaultContrib);
      setShow(false);
    });
  }

  const handleContributionSelect = (event) => {
    console.log("firing");
    setShow(true);
    setEditContribution({
      ...editContribution,
      ein: event.ein,
      charity: event.charity,
      in_dollars: event.in_dollars,
      in_hours: event.in_hours,
      text: event.text,
    });
  };

  // let dollarUS = Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });

  // function subtotal() {
  //   let total = 0;
  //   props.contribList.map((item) => {
  //     // console.log("type", item.title, typeof item.price);
  //     total = total + item.in_dollars;
  //   });
  //   console.log({ total });

  //   return total;
  // }

  return (
    <div className="container-fluid contrib-list-holder">
      <h3>My Contributions</h3>
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
            onClick={handleContributionSelect}
          >
            <AiFillEdit />
          </button>
        </div>
      ))}
      {/* <p>Total Amount Given: {dollarUS.format(subtotal())}</p> */}
      <ContributionForm
        setContribList={setContribList}
        editContribution={editContribution}
        show={show}
        setShow={setShow}
        handleShow={handleShow}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
export default withRouter(ContributionList);
