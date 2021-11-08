import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { withRouter } from "react-router";
import { FaSearch } from "react-icons/fa";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
const BASE_URL = "https://api.data.charitynavigator.org/v2";
const APP_ID = "0523b096";
const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";

function ContributionForm(props) {
  const [contrib, setContrib] = useState({
    ein: "",
    charity: "",
    in_dollars: "",
    in_hours: "",
    text: "",
  });
  const [charities, setCharities] = useState([]);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    const searchCharities = async () => {
      const response = await fetch(
        `${BASE_URL}/Organizations?app_id=${APP_ID}&app_key=${APP_KEY}&search=${contrib.charity}&rated=true`
      );
      const data = await response.json();
      console.log("data", data);
      setCharities(data.slice(0, 5));
    };
    searchCharities();
  }, [contrib.charity]);

  async function saveContribution(e) {
    e.preventDefault();
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
      console.log(response);
      const data = await response.json();
      setContrib(data);
      props.setShow(false);
      props.setContribList((prevState) => [...prevState, data]);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setContrib((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function selectCharity(charity) {
    // console.log("firing");
    setContrib({
      ein: charity.ein,
      charity: charity.charityName,
    });
  }

  // console.log("loading");

  return (
    <div className="container-fluid">
      <div>
        <Fab
          color="primary"
          aria-label="add"
          // className="btn"
          onClick={props.handleShow}
        >
          <AddIcon />
        </Fab>
        {/* <button className="btn" onClick={handleShow}>
          Add Contribution
        </button> */}

        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log Your Contribution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-search">
                <input
                  type="text"
                  placeholder="Search for a charity"
                  name="charity"
                  value={contrib.charity}
                  onChange={handleChange}
                />
                <FaSearch className="fa-search" />

                <ul>
                  {charities?.map((charity) => (
                    <li className="charitysearchlist" key={charity.ein}>
                      {charity.charityName}
                      <button
                        type="button"
                        className="select-button"
                        value={contrib.charity}
                        onClick={() => selectCharity(charity)}
                      >
                        Select
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="form-data">
                <input
                  type="text"
                  placeholder="Charity Name"
                  name="charity"
                  value={contrib.charity}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Dollar Amount"
                  name="in_dollars"
                  value={contrib.in_dollars}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Volunteer hours"
                  name="in_hours"
                  value={contrib.in_hours}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="text"
                  value={contrib.text}
                  onChange={handleChange}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {contrib.id ? (
              <Button type="submit" onClick={props.handleUpdate}>
                Update
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={saveContribution}
                >
                  Save Changes
                </Button>
              </>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default withRouter(ContributionForm);
