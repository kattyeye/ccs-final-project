import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { withRouter } from "react-router";
import CharitySearch from "../CharitySearch/CharitySearch";

function ContributionForm(props) {
  const [contrib, setContrib] = useState({ ...props.selectedContrib });
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setContrib(props.selectedContrib);
  }, [props]);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setContrib((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleImage = (event) => {
    const file = event.target.files[0];
    setContrib((prevState) => ({
      ...prevState,
      image: file,
    }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function selectCharity(charity) {
    setContrib((prev) => ({
      ...prev,
      ein: charity.ein,
      charity: {
        name: charity.charityName,
        ein: charity.ein,
        url: charity.websiteURL,
      },
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAdd(contrib);
  };

  return (
    <div className="container-fluid">
      <div>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log Your Contribution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-data">
                <CharitySearch select={selectCharity} />

                <input
                  type="text"
                  placeholder="Charity Name"
                  name="charity"
                  value={contrib.charity?.name ?? ""}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Dollar Amount"
                  name="in_dollars"
                  value={contrib.in_dollars}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Volunteer hours"
                  name="in_hours"
                  value={contrib.in_hours}
                  onChange={handleChange}
                  required
                />
                <textarea
                  type="text"
                  placeholder="Description"
                  name="text"
                  value={contrib.text}
                  onChange={handleChange}
                />
                <input
                  onChange={handleImage}
                  type="file"
                  className="form-control"
                />
                {contrib.image && (
                  <img src={preview} alt="" className="preview-image" />
                )}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {contrib.id ? (
              <Button type="button" onClick={() => props.handleUpdate(contrib)}>
                Update
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button type="button" onClick={handleSubmit}>
                  Add contribution
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
