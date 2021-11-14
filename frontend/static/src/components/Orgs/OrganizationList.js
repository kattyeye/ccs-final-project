import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, withRouter } from "react-router";
// import ReviewForm from "../Reviews/ReviewForm";
// import ReviewList from "../Reviews/ReviewList";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";

const BASE_URL = "https://api.data.charitynavigator.org/v2";
const APP_ID = "0523b096";
const APP_KEY = "ed9cb1c120b866a6232e01a7affb00c5";

// &pageSize=1000&rated=true&state=SC&city=Greenville

function OrganizationList(props) {
  const [charities, setCharities] = useState([]);
  const location = useLocation;

  useEffect(() => {
    async function fetchCharities() {
      const response = await fetch(
        `${BASE_URL}/Organizations?app_id=${APP_ID}&app_key=${APP_KEY}&search=&rated=true&minRating=4&rated=true&state=SC&city=Greenville`
      );
      const data = await response.json();
      console.log("charities", data);
      setCharities(data);
    }
    fetchCharities();
  }, []);

  return (
    <>
      <div className="container-fluid  mt-5 p-5">
        <div className="text-center mb-5">
          <span className=" text-uppercase" style={{ color: "#429125" }}>
            Organizations
          </span>
          <h1 className="text-capitalize font-weight-bold mt-2">
            <span style={{ color: "#429125" }}>Best</span> of the Upstate
          </h1>
        </div>
        <div className="charitycolumns px-5">
          {charities?.map((charity) => (
            <Card key={charity.ein} className="charitycard">
              <div
                className="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#429125",
                }}
              >
                <FaHandHoldingHeart
                  style={{ width: "100%", fontSize: "35px", color: "black" }}
                />
              </div>
              <CardContent style={{}}>
                <Typography variant="h5">
                  <a href={charity.websiteURL}>{charity.charityName}</a>
                </Typography>

                <Typography variant="body1">
                  {charity.cause.causeName}
                </Typography>
                <Typography variant="body1">
                  Current Rating: {charity.currentRating.score}
                </Typography>
              </CardContent>
              {/* <CardActions
                style={{ paddingLeft: "100px", paddingBottom: "20px" }}
              >
                <a href={charity.websiteURL} target="_blank" className="btn">
                  Learn More
                </a>
              </CardActions> */}
            </Card>
          ))}
        </div>
        {/* <ReviewForm isAuth={props.isAuth} />
      <ReviewList isAuth={props.isAuth} /> */}
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WetuL6Jo0gM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
    </>
  );
}
export default withRouter(OrganizationList);
