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
  image: null,
};

function ContributionList(props) {
  const [show, setShow] = useState(false);
  const [selectedContrib, setSelectedContrib] = useState(defaultContrib);
  const [contribList, setContribList] = useState([]);

  useEffect(() => {
    async function fetchContribs() {
      const response = await fetch(`/api_v1/contributions/`);
      const data = await response.json();
      setContribList(data);
    }
    fetchContribs();
  }, []);

  async function handleAdd(contrib) {
    const formData = new FormData();
    formData.append("charity", JSON.stringify(contrib.charity));
    formData.append("ein", contrib.ein);
    formData.append("in_dollars", contrib.in_dollars);
    formData.append("in_hours", contrib.in_hours);
    formData.append("text", contrib.text);

    if (contrib.image instanceof File) {
      formData.append("image", contrib.image);
    }

    const options = {
      method: "POST",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
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

    const formData = new FormData();
    formData.append("charity", JSON.stringify(contrib.charity));
    formData.append("ein", contrib.ein);
    formData.append("in_dollars", contrib.in_dollars);
    formData.append("in_hours", contrib.in_hours);
    formData.append("text", contrib.text);

    if (contrib.image instanceof File) {
      formData.append("image", contrib.image);
    }

    const response = await fetch(`api_v1/contributions/${id}/`, {
      method: "PATCH",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
        // "Content-Type": "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Oops, something went wrong!", response.status);
    } else {
      const data = await response.json();
      const updatedContribs = [...contribList];
      const index = updatedContribs.findIndex((contrib) => contrib.id == id);
      updatedContribs[index] = data;
      setContribList(updatedContribs);
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
    <div className="container-fluid p-5  d-flex-col">
      <div className="headerwithicon d-flex">
        <h3>Add Contribution</h3>
        <Fab
          color="primary"
          aria-label="add"
          className="btn plus-icon-button"
          onClick={() => setShow(true)}
        >
          <AddIcon />
        </Fab>
      </div>
      <div className="d-md-flex">
        {contribList?.map((contrib) => (
          <Card
            key={contrib.ein}
            sx={{ minWidth: 275 }}
            className="mb-5 d-flex mx-2 usercontribcard "
          >
            {/* {contrib.in_hours.total} */}
            <CardContent>
              <div className="user-review-image-container py-1">
                {contrib.image && (
                  <img src={contrib.image} className="user-review-image" />
                )}
              </div>
              <div className="user-review-text-container d-flex-col py-1">
                <Typography variant="h5">{contrib.charity.name}</Typography>
                <Typography variant="body2">
                  Donations: ${contrib.in_dollars}
                  <br></br>
                  Volunteer hours: {contrib.in_hours}
                  <br></br>
                  Notes: {contrib.text}
                </Typography>
                <div className="deleteeditbuttons d-flex">
                  <Button
                    type="button"
                    className="xbutton"
                    value={contrib.id}
                    onClick={handleDelete}
                  >
                    <AiFillDelete className="icondel" />
                  </Button>
                  <Button
                    type="button"
                    className="xbutton"
                    value={contrib.id}
                    onClick={() => handleSelection(contrib)}
                  >
                    <AiFillEdit className="icondel" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
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
