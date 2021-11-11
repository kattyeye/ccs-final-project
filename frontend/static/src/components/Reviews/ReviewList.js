import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Redirect, withRouter } from "react-router";

function ReviewList(props) {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(`/api_v1/public/reviews/`);
      const data = await response.json();
      console.log("reviews", data);
      setReviewList(data);
    }
    fetchReviews();
  }, []);

  // async function handleDelete(event) {
  //   const id = event.currentTarget.value;
  //   fetch(`api_v1/reviews/${id}/`, {
  //     method: "DELETE",
  //     headers: {
  //       "X-CSRFToken": Cookies.get("csrftoken"),
  //     },
  //   }).then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Oops, something went wrong!", response.status);
  //     }
  //     const updatedReviews = [...reviewList];
  //     const index = updatedReviews.findIndex((review) => {
  //       return review.id == id;
  //     });

  //     updatedReviews.splice(index, 1);
  //     setReviewList(updatedReviews);
  //   });
  // }

  return (
    <div className="container-fluid contrib-list-holder d-flex-col justify-content-center">
      <div className="text-center mt-5 mb-5 d-flex-col">
        <span className=" text-uppercase" style={{ color: "#429125" }}>
          Reviews
        </span>
        <h1 className="text-capitalize font-weight-bold mt-2">
          From <span style={{ color: "#429125" }}>Locals</span> You Can Trust
        </h1>
      </div>
      <div className=" p-5">
        <div className=" p-5">
          {reviewList?.map((review) => (
            <Card key={review.ein} className="review-container p-3 mb-3">
              <div className="review-imagecontainer">
                <img src={review.image} className="reviewimage" />
              </div>
              <div className="review-textcontainer">
                <h6 style={{ color: "#429125" }}>{review.charity}</h6>
                <p>
                  by <strong>{review.user}</strong> <br></br>
                  Review: {review.review_text}
                </p>
              </div>
            </Card>
          ))}
          {/* {props.isAuth && <UserReviews />} */}
        </div>
      </div>
    </div>
  );
}
export default withRouter(ReviewList);
