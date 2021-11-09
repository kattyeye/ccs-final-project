import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import Cookies from "js-cookie";
import ReviewForm from "../Reviews/ReviewForm";

const phases = {
  submitted: "SUB",
  published: "PUB",
};

function ReviewDetail(props) {
  const [updatedReview, setUpdatedReview] = useState(props.review);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdatedReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSave(e) {
    setIsEditing(false);
    props.handleUpdate(updatedReview);
  }

  return (
    <div className="contribution-container">
      <input
        type="text"
        placeholder="Charity Name"
        name="charity"
        value={updatedReview.charity}
        onChange={handleChange}
        disabled={!isEditing}
      />
      <input
        type="text"
        placeholder="Description"
        name="review_text"
        value={updatedReview.review_text}
        onChange={handleChange}
        disabled={!isEditing}
      />

      {isEditing ? (
        <button
          className="btn btn-save save-btn"
          type="button"
          onClick={handleSave}
        >
          Save and submit
        </button>
      ) : (
        <button
          type="button"
          className="xbutton"
          onClick={() => setIsEditing(true)}
        >
          <AiFillEdit />
        </button>
      )}
      <button
        type="button"
        className="xbutton"
        data-id={updatedReview.id}
        onClick={props.handleDelete}
      >
        <AiFillDelete />
      </button>
    </div>
  );
}

function MyReviews(props) {
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

  async function handleUpdate(updatedReview) {
    const id = updatedReview.id;
    const response = await fetch(`api_v1/reviews/${id}/`, {
      method: "PUT",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    });

    if (!response.ok) {
      throw new Error("Oops, something went wrong!", response.status);
    } else {
      const data = await response.json();
      const updatedReviews = [...reviews];
      const index = updatedReviews.findIndex((review) => review.id == id);
      updatedReviews[index] = data;
      setReviews(updatedReviews);
    }
  }

  const reviewsHTML = reviews.map((review) => (
    <ReviewDetail
      key={review.id}
      review={review}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  ));

  return (
    <div className="container-fluid contrib-list-holder">
      <h3>My Reviews</h3>
      <section>{reviewsHTML}</section>
    </div>
  );
}
export default withRouter(MyReviews);
