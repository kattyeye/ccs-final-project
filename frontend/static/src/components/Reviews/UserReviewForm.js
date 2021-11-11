// import { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import Cookies from "js-cookie";
// import { withRouter } from "react-router";
// import { FaSearch } from "react-icons/fa";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// const BASE_URL = "https://api.data.charitynavigator.org/v2";
// const APP_ID = "0523b096";
// const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";

// function UserReviewForm(props) {
//   const [review, setReview] = useState({ ...props.selectedReview });
//   //   const [reviews, setReviews] = useState([]);
//   const [charities, setCharities] = useState([]);

//   useEffect(() => {
//     setReview(props.selectedReview);
//   }, [props]);

//   useEffect(() => {
//     console.log("firing");
//     const searchCharities = async () => {
//       const response = await fetch(
//         `${BASE_URL}/Organizations?app_id=${APP_ID}&app_key=${APP_KEY}&search=${review.charity}&rated=true`
//       );
//       const data = await response.json();
//       console.log("data", data);
//       setCharities(data.slice(0, 5));
//     };
//     searchCharities();
//   }, [review.charity]);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     console.log(name, value);
//     setReview((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }

//   function selectCharity(charity) {
//     console.log("firing two");
//     setReview((prev) => ({
//       ...prev,
//       ein: charity.ein,
//       charity: charity.charityName,
//     }));
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.handleAdd(review);
//   };

//   return (
//     <div className="container-fluid">
//       <div>
//         <Modal show={props.show} onHide={props.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Log Your Review</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <form>
//               <div className="form-search">
//                 <input
//                   type="text"
//                   placeholder="Search for a charity"
//                   name="charity"
//                   value={review.charity}
//                   onChange={handleChange}
//                 />
//                 <FaSearch className="fa-search" />

//                 <ul>
//                   {charities?.map((charity) => (
//                     <li className="charitysearchlist" key={charity.ein}>
//                       {charity.charityName}
//                       <button
//                         type="button"
//                         className="select-button"
//                         value={review.charity}
//                         onClick={() => selectCharity(charity)}
//                       >
//                         Select
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="form-data">
//                 <input
//                   type="text"
//                   placeholder="Charity Name"
//                   name="charity"
//                   value={review.charity}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Description"
//                   name="review_text"
//                   value={review.review_text}
//                   onChange={handleChange}
//                 />
//               </div>
//             </form>
//           </Modal.Body>
//           <Modal.Footer>
//             {review.id ? (
//               <Button type="button" onClick={() => props.handleUpdate(review)}>
//                 Update
//               </Button>
//             ) : (
//               <>
//                 <Button variant="secondary" onClick={props.handleClose}>
//                   Close
//                 </Button>
//                 <Button type="button" onClick={handleSubmit}>
//                   Add Review
//                 </Button>
//               </>
//             )}
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default withRouter(UserReviewForm);
