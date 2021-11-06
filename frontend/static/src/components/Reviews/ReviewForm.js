import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { withRouter } from "react-router";
import { FaSearch } from "react-icons/fa";

const BASE_URL = "https://api.data.charitynavigator.org/v2";
const APP_ID = "0523b096";
const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";

function ReviewForm(props) {
  const [review, setReview] = useState({
    ein: "",
    charity: "",
    review_text: "",
  });

  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const searchCharities = async () => {
      const response = await fetch(
        `${BASE_URL}/Organizations?app_id=${APP_ID}&app_key=${APP_KEY}&search=${review.charity}&rated=true`
      );
      const data = await response.json();
      console.log("data", data);
      setCharities(data);
    };
    searchCharities();
  }, [review.charity]);

  async function saveReview(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("charity", review.charity);
    formData.append("ein", review.ein); // constructing key value pairs
    formData.append("review_text", review.review_text); // constructing key value pairs
    formData.append("phase", e.target.value);
    const options = {
      method: "POST",
      headers: {
        // "Content-type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };
    const response = await fetch("/api_v1/reviews/", options);
    if (!response) {
      console.log(response);
    } else {
      console.log(response);
      const data = await response.json();
      setReview(data);

      //   props.setReviewList((prevState) => [...prevState, data]);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function selectCharity(charity) {
    console.log({ name: charity.charityName, ein: charity.ein });
    setReview({
      ein: charity.ein,
      charity: charity.charityName,
    });
  }

  return (
    <div>
      {" "}
      <form>
        <div className="form-search">
          <input
            type="text"
            placeholder="Search for a charity"
            name="charity"
            value={review.charity}
            onChange={handleChange}
          />
          <FaSearch className="fa-search" />

          <ul>
            {charities?.map((charity) => (
              <li className="charitysearchlist" key={charity.ein}>
                {charity.charityName}
                <button
                  type="button"
                  className="select-button"
                  value={review.charity}
                  onClick={() => selectCharity(charity)}
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="form-data">
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
        </div>
        <button
          variant="primary"
          type="submit"
          onClick={saveReview}
          value="SUB"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default withRouter(ReviewForm);
