import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import Cookies from "js-cookie";
import ReviewForm from "../Reviews/ReviewForm";

const phases = {
  submitted: "SUB",
  published: "PUB",
};
function MyReviews(props) {
  const [reviewList, setReviewList] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  //   const [review, setReview] = useState({
  //     charity: "",
  //     review_text: "",
  //   });

  useEffect(() => {
    const key = props.match.params.phase;
    let url = `/api_v1/reviews/`;
    if (key) {
      url = `/api_v1/reviews/?phase=${phases[key]}`;
    }
    async function fetchReviews() {
      const response = await fetch(url);
      const data = await response.json();
      console.log("reviews", data);
      setReviewList(data);
    }
    fetchReviews();
  }, []);

  async function handleDelete(event) {
    const id = event.currentTarget.value;
    fetch(`api_v1/reviews/${id}/`, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Oops, something went wrong!", response.status);
      }
      const updatedReviews = [...reviewList];
      const index = updatedReviews.findIndex((review) => {
        return review.id == id;
      });

      updatedReviews.splice(index, 1);
      setReviewList(updatedReviews);
    });
  }

  function handleChange(e) {
    const { name, value } = e.target.value;
    // console.log("here", e.target.value);
    const copyOfReviews = [...reviewList];
    const index = copyOfReviews.findIndex((review) => review.id === isEditing);

    const reviewCopy = { ...reviewList[index] };
    reviewCopy[name] = value;
    copyOfReviews[index] = reviewCopy;
    setReviewList(copyOfReviews);
  }

  async function handleUpdate(e) {
    const id = e.target.value;
    const phase = e.target.dataset.phase;
    const formData = new FormData();
    formData.append("charity", e.charity);
    formData.append("review_text", e.review_text);
    formData.append("phase", phase);
    // console.log({ id });
    const response = await fetch(`api_v1/reviews/${id}/`, {
      method: "PUT",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
        "Content-Type": "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Oops, something went wrong!", response.status);
    } else {
      const data = await response.json();
      const updatedReviews = [...reviewList];
      const index = updatedReviews.findIndex((review) => review.id == id);
      updatedReviews[index] = data;
      setReviewList(updatedReviews);
      console.log(reviewList);
    }
  }

  return (
    <div className="container-fluid contrib-list-holder">
      <h3>My Reviews</h3>

      {reviewList?.map((review) => (
        <div key={review.ein} className="contribution-container">
          <input
            type="text"
            placeholder="Charity Name"
            name="charity"
            value={review.charity}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="review_text"
            value={review.review_text}
            onChange={handleChange}
          />
          {review.id === isEditing ? (
            <>
              <button
                className="btn btn-save save-btn"
                type="click"
                value={review.id}
                data-phase="SUB"
                onClick={handleUpdate}
              >
                Save and submit
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="xbutton"
                value={review.id}
                onClick={handleDelete}
              >
                <AiFillDelete />
              </button>
              <button
                type="button"
                className="xbutton"
                value={review.id}
                onClick={() => setIsEditing(review.id)}
              >
                <AiFillEdit />
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
export default withRouter(MyReviews);
