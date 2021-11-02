import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";
function Contributions() {
  const [contribs, setContribs] = useState([]);
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
  useEffect(() => {
    async function fetchContribs() {
      const response = await fetch(`/api_v1/contributions/`);
      const data = await response.json();
      console.log("contribs", data);
      setContribs(data);
    }
    fetchContribs();
  }, []);

  async function fetchCharities() {
    const response =
      await fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=0523b096&app_key=ed9cb1c120b866a6232e01a7affb00c5&pageSize=1000&rated=true&state=SC&city=Greenville
      `);
    const data = await response.json();
    console.log("charities", data);
    setCharities(data);
  }

  async function saveContribution(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        } else if (
          val.charity.toLowerCase().includes(contrib.charity.toLowerCase())
        ) {
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
      {contribs?.map((contrib) => (
        <div>{contrib.text}</div>
      ))}
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
