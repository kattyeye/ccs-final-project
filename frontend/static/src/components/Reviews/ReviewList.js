import { Card, Typography } from "@mui/material";
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

  return (
    <div className="container-fluid contrib-list-holder d-flex-col justify-content-center mt-5 py-3 px-5">
      <div className="text-center mb-5 d-flex-col">
        <span className=" text-uppercase" style={{ color: "#429125" }}>
          Charity Reviews
        </span>
        <h1 className="text-capitalize font-weight-bold mt-2">
          Get in the <span style={{ color: "#429125" }}>Know.</span>
        </h1>
      </div>
      <div className="px-5" style={{ paddingBottom: "100px" }}>
        <div className="">
          {reviewList?.map((review) => (
            <Card key={review.ein} className="review-container p-3 mb-3">
              <div className="review-imagecontainer">
                <img src={review.image} className="bigreviewimage" />
              </div>
              <div className="review-textcontainer user-review-text-container">
                <Typography variant="h5">
                  {review.charity && (
                    <a href={review.charity.url} target="_blank">
                      {review.charity.name}
                    </a>
                  )}
                </Typography>
                <p>
                  by <strong>{review.user}</strong> <br></br>
                  Review: {review.review_text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export default withRouter(ReviewList);
