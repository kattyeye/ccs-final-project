import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { withRouter } from "react-router";
import Cookies from "js-cookie";
function ReviewList(props) {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(`/api_v1/reviews/`);
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

  return (
    <div className="container-fluid contrib-list-holder">
      {reviewList?.map((review) => (
        <div key={review.ein} className="contribution-container">
          <h6>{review.charity}</h6>

          <p>
            Review: {review.review_text}
            <br></br>
            by {props.user.username}
          </p>

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
            // onClick={handleUpdate}
          >
            <AiFillEdit />
          </button>
        </div>
      ))}
    </div>
  );
}
export default withRouter(ReviewList);