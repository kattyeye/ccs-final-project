// import { useState, useEffect } from "react";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// import { withRouter } from "react-router";
// import Cookies from "js-cookie";
// import ReviewForm from "../Reviews/ReviewForm";
// import UserReviewForm from "./UserReviewForm";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// const phases = {
//   submitted: "SUB",
//   published: "PUB",
// };
// const defaultReview = {
//   ein: "",
//   charity: "",
//   review_text: "",
//   image: null,
// };

// function UserReviews(props) {
//   const [show, setShow] = useState(false);
//   const [selectedReview, setSelectedReview] = useState(defaultReview);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const key = props.match.params.phase;
//     let url = `/api_v1/reviews/`;
//     if (key) {
//       url = `/api_v1/reviews/?phase=${phases[key]}`;
//     }
//     async function fetchReviews() {
//       const response = await fetch(url);
//       const data = await response.json();
//       setReviews(data);
//     }
//     fetchReviews();
//   }, []);

//   async function handleAdd(review) {
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "X-CSRFToken": Cookies.get("csrftoken"),
//       },
//       body: JSON.stringify(review),
//     };
//     const response = await fetch("/api_v1/reviews/", options);
//     if (!response) {
//       console.log(response);
//     } else {
//       const data = await response.json();
//       setReviews((prevState) => [...prevState, data]);
//       setShow(false);
//       // setSelectedReview(review);
//     }
//   }
//   async function handleDelete(event) {
//     const id = event.currentTarget.dataset.id;
//     const response = await fetch(`api_v1/reviews/${id}/`, {
//       method: "DELETE",
//       headers: {
//         "X-CSRFToken": Cookies.get("csrftoken"),
//       },
//     });

//     if (!response.ok) {
//       console.log(response);
//       throw new Error("Oops, something went wrong!", response.status);
//     } else {
//       const updatedReviews = [...reviews];
//       const index = updatedReviews.findIndex((review) => review.id == id);
//       updatedReviews.splice(index, 1);
//       setReviews(updatedReviews);
//     }
//   }

//   async function handleUpdate(selectedReview) {
//     const id = selectedReview.id;
//     const response = await fetch(`api_v1/reviews/${id}/`, {
//       method: "PUT",
//       headers: {
//         "X-CSRFToken": Cookies.get("csrftoken"),
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(selectedReview),
//     });

//     if (!response.ok) {
//       throw new Error("Oops, something went wrong!", response.status);
//     } else {
//       const data = await response.json();
//       const updatedReviews = [...reviews];
//       const index = updatedReviews.findIndex((review) => review.id == id);
//       updatedReviews[index] = data;
//       setReviews(updatedReviews);
//       setShow(false);
//     }
//   }

//   const handleSelection = (review) => {
//     setSelectedReview(review);
//     setTimeout(setShow(true), 0);
//   };

//   const handleClose = () => {
//     setShow(false);
//     setSelectedReview(defaultReview);
//   };

//   const handleShow = () => props.setShow(true);

//   const reviewsHTML = reviews.map((review) => (
//     <div key={review.ein} className="contribution-container">
//       <h6>{review.charity}</h6>

//       <p>Review: {review.review_text}</p>
//       <button
//         type="button"
//         className="xbutton"
//         data-id={review.id}
//         onClick={handleDelete}
//       >
//         <AiFillDelete />
//       </button>
//       <button
//         type="button"
//         className="xbutton"
//         value={review.id}
//         onClick={() => handleSelection(review)}
//       >
//         <AiFillEdit />
//       </button>
//     </div>
//   ));

//   return (
//     <div className="container-fluid contrib-list-holder">
//       <div className="headerwithicon">
//         <h3>My Submitted Reviews</h3>
//         <Fab
//           color="primary"
//           aria-label="add"
//           className="btn plus-icon-button"
//           onClick={() => setShow(true)}
//         >
//           <AddIcon />
//         </Fab>
//       </div>
//       <section>{reviewsHTML}</section>
//       <UserReviewForm
//         show={show}
//         setShow={setShow}
//         selectedReview={selectedReview}
//         handleClose={handleClose}
//         handleShow={handleShow}
//         handleAdd={handleAdd}
//         handleUpdate={handleUpdate}
//       />
//     </div>
//   );
// }
// export default withRouter(UserReviews);
