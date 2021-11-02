import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";
function Contributions() {
  const [contrib, setContrib] = useState({
    ein: "",
    charity: "",
    in_dollars: null,
    in_hours: null,
    text: "",
  });
  const [charities, setCharities] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function saveContribution(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
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

  function searchForCharity(e) {
    charities
      .filter((val) => {
        if (contrib.charity == "") {
          return val;
        } else if (val.charity.toLowerCase().includes(contrib.charity)) {
          return val;
        }
      })
      .map((val, key) => {
        return <div>{val.charity}</div>;
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setContrib((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

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
                value={charities.ein}
                onKeyUp={searchForCharity}
              ></input>

              <input
                type="number"
                placeholder="Dollar Amount"
                value={contrib.in_dollars}
                onChange={handleChange}
              ></input>
              <input
                type="number"
                placeholder="Volunteer hours"
                value={contrib.in_hours}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                placeholder="Description"
                value={contrib.text}
                onChange={handleChange}
              />
            </form>
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
