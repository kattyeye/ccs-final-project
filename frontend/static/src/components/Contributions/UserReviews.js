import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import Cookies from "js-cookie";
import ReviewForm from "../Reviews/ReviewForm";
import UserReviewForm from "./UserReviewForm";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";

const phases = {
  submitted: "SUB",
  published: "PUB",
};
const defaultReview = {
  charity: {},
  ein: "",
  review_text: "",
  image: null,
};

function UserReviews(props) {
  const [show, setShow] = useState(false);
  const [selectedReview, setSelectedReview] = useState(defaultReview);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const key = props.match.params.phase;
    let url = `/api_v1/reviews/`;
    if (key) {
      url = `/api_v1/reviews/?phase=${phases[key]}`;
    }
    async function fetchReviews() {
      const response = await fetch(url);
      const data = await response.json();
      setReviews(data);
    }
    fetchReviews();
  }, []);

  async function handleAdd(review) {
    // console.log("firing");
    // e.preventDefault();

    // This breaks causing charity object to go missing from the data completely
    console.log("review", review);
    const formData = new FormData();
    formData.append("charity", JSON.stringify(review.charity));
    formData.append("ein", review.ein);
    formData.append("review_text", review.review_text);
    // formData.append("image", review.image);

    // console.log("charity", charity);

    // const data = {
    //   charity: review.charity,
    //   ein: review.ein,
    //   review_text: review.review_text,
    // };

    const options = {
      method: "POST",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
        // "Content-Type": "application/json",
      },
      body: formData,
    };
    const response = await fetch("/api_v1/reviews/", options);
    if (!response) {
      console.log(response);
    } else {
      const data = await response.json();
      setReviews((prevState) => [...prevState, data]);
      setShow(false);
      // setSelectedReview(data);
    }
  }

  async function handleDelete(event) {
    const id = event.currentTarget.dataset.id;
    const response = await fetch(`api_v1/reviews/${id}/`, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Oops, something went wrong!", response.status);
    } else {
      const updatedReviews = [...reviews];
      const index = updatedReviews.findIndex((review) => review.id == id);
      updatedReviews.splice(index, 1);
      setReviews(updatedReviews);
    }
  }

  async function handleUpdate(selectedReview) {
    const id = selectedReview.id;
    const review = { ...reviews[id] };

    const formData = new FormData();
    formData.append("review_text", selectedReview.review_text);
    formData.append("charity", JSON.stringify(selectedReview.charity));
    formData.append("ein", selectedReview.ein);
    // formData.append("image", selectedReview.image);

    if (!File) {
      delete selectedReview.image;
    } else {
    }
    const response = await fetch(`api_v1/reviews/${id}/`, {
      method: "PUT",
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
      const updatedReviews = [...reviews];
      const index = updatedReviews.findIndex((review) => review.id == id);
      updatedReviews[index] = data;
      setReviews(updatedReviews);
      setShow(false);
    }
  }

  const handleSelection = (review) => {
    setSelectedReview(review);
    setTimeout(setShow(true), 0);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setSelectedReview(defaultReview);
  };

  const reviewsHTML = reviews.map((review) => (
    <Card
      key={review.ein}
      sx={{ minWidth: 275, width: "80%", display: "flex" }}
      className=" mb-5"
    >
      <CardContent className="d-flex ">
        <div className="user-review-image-container ">
          {review.image && (
            <img src={review.image} className="user-review-image" />
          )}
        </div>
        <div className="user-review-text-container">
          <Typography variant="h5">{review.charity.name}</Typography>

          <Typography variant="body2">Review: {review.review_text}</Typography>
          <Typography variant="body2">Status: {review.phase}</Typography>

          {review.phase == "SUB" && (
            <>
              <button
                type="button"
                className="xbutton"
                data-id={review.id}
                onClick={handleDelete}
              >
                <AiFillDelete />
              </button>
              <button
                type="button"
                className="xbutton"
                value={review.id}
                onClick={() => handleSelection(review)}
              >
                <AiFillEdit />
              </button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  ));

  return (
    <div className="p-5">
      <div className="container-fluid review-list-holder p-5">
        {/* <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClosey}
      >
        <Alert onClose={handleClosey} severity="danger" sx={{ width: "100%" }}>
          Review Deleted.
        </Alert>
      </Snackbar> */}
        <div className="headerwithicon">
          {reviews.user ? <h3>My Reviews</h3> : <h3>Add Review</h3>}

          <Fab
            color="primary"
            aria-label="add"
            className="btn plus-icon-button"
            onClick={() => setShow(true)}
          >
            <AddIcon />
          </Fab>
        </div>

        <section>{reviewsHTML}</section>

        <UserReviewForm
          show={show}
          setShow={setShow}
          selectedReview={selectedReview}
          handleClose={handleClose}
          handleShow={handleShow}
          handleAdd={handleAdd}
          handleUpdate={handleUpdate}
          // openSuccess={openSuccess}
          // setOpenSuccess={setOpenSuccess}
          // handleClosey={handleClosey}
        />
      </div>
    </div>
  );
}
export default withRouter(UserReviews);
