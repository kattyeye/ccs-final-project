import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { withRouter } from "react-router";
import { FaSearch } from "react-icons/fa";
import { Snackbar, Alert } from "@mui/material";
import CharitySearch from "../CharitySearch/CharitySearch";

const BASE_URL = "https://api.data.charitynavigator.org/v2";
const APP_ID = "0523b096";
const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";

function UserReviewForm(props) {
  const [review, setReview] = useState({ ...props.selectedReview });
  //   const [reviews, setReviews] = useState([]);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setReview(props.selectedReview);
  }, [props]);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleImage = (event) => {
    const file = event.target.files[0];
    setReview((prevState) => ({
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
    console.log("firing two");
    setReview((prev) => ({
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
    props.handleAdd(review);
    setOpenSuccess(true);
  };

  const handleClosey = (event, reason) => {
    setOpenSuccess(false);
  };
  return (
    <div className="container-fluid">
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClosey}
      >
        <Alert onClose={handleClosey} severity="success" sx={{ width: "100%" }}>
          Success! Review submitted!
        </Alert>
      </Snackbar>

      <div>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log Your Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-data">
                <CharitySearch select={selectCharity} />

                <input
                  type="text"
                  placeholder="Charity Name"
                  name="charity"
                  value={review.charity?.name ?? ""}
                  onChange={handleChange}
                />
                <textarea
                  type="text"
                  placeholder="Review"
                  name="review_text"
                  value={review.review_text}
                  onChange={handleChange}
                />
                <input
                  onChange={handleImage}
                  type="file"
                  className="form-control"
                />
                {review.image && (
                  <img src={preview} alt="" className="preview-image" />
                )}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {review.id ? (
              <Button type="button" onClick={() => props.handleUpdate(review)}>
                Update
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button type="button" onClick={handleSubmit}>
                  Add Review
                </Button>
              </>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default withRouter(UserReviewForm);
