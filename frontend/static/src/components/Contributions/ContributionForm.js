import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";

const BASE_URL = "https://api.data.charitynavigator.org/v2";
const APP_ID = "0523b096";
const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";

function Contributions() {
  const [contrib, setContrib] = useState({
    ein: "",
    charity: "",
    in_dollars: "",
    in_hours: "",
    text: "",
  });
  const [charities, setCharities] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const searchCharities = async () => {
      const response = await fetch(
        `${BASE_URL}/Organizations?app_id=${APP_ID}&app_key=${APP_KEY}&search=${contrib.charity}&rated=true`
      );
      const data = await response.json();
      console.log("data", data);
      setCharities(data);
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
      setShow(false);
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

  console.log("loading");

  return (
    <div className="container">
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add Contribution
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log Your Contribution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input
                type="search"
                placeholder="Search for a charity"
                name="charity"
                value={contrib.charity}
                onChange={handleChange}
              ></input>

              <input
                type="number"
                placeholder="Dollar Amount"
                name="in_dollars"
                value={contrib.in_dollars}
                onChange={handleChange}
              ></input>
              <input
                type="number"
                placeholder="Volunteer hours"
                name="in_hours"
                value={contrib.in_hours}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                placeholder="Description"
                name="text"
                value={contrib.text}
                onChange={handleChange}
              />
            </form>
            {charities?.map((charity) => {
              <h6>{charity.organization.charityName}</h6>;
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={saveContribution}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Contributions;
