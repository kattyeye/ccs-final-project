import { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import ContributionForm from "./ContributionForm";
import Cookies from "js-cookie";
import { Card, Typography, CardContent } from "@mui/material";
import Button from "@restart/ui/esm/Button";

const defaultContrib = {
  charity: {},
  ein: "",
  in_dollars: "",
  in_hours: "",
  text: "",
};

function ContributionList(props) {
  const [show, setShow] = useState(false);
  const [selectedContrib, setSelectedContrib] = useState(defaultContrib);
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

  async function handleAdd(contrib) {
    console.log("firing");
    // e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(contrib),
    };
    const response = await fetch("/api_v1/contributions/", options);
    if (!response) {
      console.log(response);
    } else {
      const data = await response.json();
      setContribList((prevState) => [...prevState, data]);
      setShow(false);
      setSelectedContrib(selectedContrib);
    }
  }

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
  async function handleUpdate(contrib) {
    const id = contrib.id;
    const response = await fetch(`api_v1/contributions/${id}/`, {
      method: "PUT",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contrib),
    });

    if (!response.ok) {
      throw new Error("Oops, something went wrong!", response.status);
    } else {
      const data = await response.json();
      const updatedContribs = [...contribList];
      const index = updatedContribs.findIndex((contrib) => contrib.id == id);
      updatedContribs[index] = data;
      setContribList(updatedContribs);
      console.log(contribList);
      setSelectedContrib(defaultContrib);
      setShow(false);
    }
  }

  const handleSelection = (contrib) => {
    setSelectedContrib(contrib);
    setTimeout(setShow(true), 0);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedContrib(defaultContrib);
  };

  const handleShow = () => props.setShow(true);

  return (
    <div className="container-fluid p-5">
      <div className="headerwithicon p-5">
        <h3>My Contributions</h3>
        <Fab
          color="primary"
          aria-label="add"
          className="btn plus-icon-button"
          onClick={() => setShow(true)}
        >
          <AddIcon />
        </Fab>
      </div>
      {contribList?.map((contrib) => (
        <Card key={contrib.ein} sx={{ minWidth: 275 }} className="mb-5">
          <CardContent>
            <Typography variant="h5">{contrib.charity.name}</Typography>
            <Typography variant="body2">
              Donations: ${contrib.in_dollars}
              <br></br>
              Volunteer hours: {contrib.in_hours}
              <br></br>
              Notes: {contrib.text}
            </Typography>

            <Button
              type="button"
              className="xbutton"
              value={contrib.id}
              onClick={handleDelete}
            >
              <AiFillDelete />
            </Button>
            <Button
              type="button"
              className="xbutton"
              value={contrib.id}
              onClick={() => handleSelection(contrib)}
            >
              <AiFillEdit />
            </Button>
          </CardContent>
        </Card>
      ))}
      {/* <p>Total Amount Given: {dollarUS.format(subtotal())}</p> */}
      <ContributionForm
        show={show}
        setShow={setShow}
        selectedContrib={selectedContrib}
        handleClose={handleClose}
        handleShow={handleShow}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
export default withRouter(ContributionList);
