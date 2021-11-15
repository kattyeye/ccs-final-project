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
import logo from '../App/pics/86hate_logo-removebg-preview.png'

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
        <div className="text-center   mb-5">
          <span className=" text-uppercase" style={{ color: "#429125" }}>
            Organizations
          </span>
          <h1 className="text-capitalize font-weight-bold mt-2">
            <span style={{ color: "#429125" }}>Best</span> in Town.
          </h1>
        </div>
        <div className="charitycolumns">
          {charities?.map((charity) => (
            <div className="d-flex-col">
            <Card key={charity.ein} className="charitycard d-flex">
               <CardContent className="d-flex" >
            {charity.cause.causeID === 42 | charity.cause.causeID === 44 | charity.cause.causeID === 29 && <div
                className="circlehate"
              >
               <img src={logo}/> Homelessness
              </div>}
            {charity.cause.causeID === 12 && <div
                className="circlehate"
              >
               <img src={logo}/>Bad Health
              </div>}
            {charity.cause.causeID === 2 && <div
                className="circlehate"
              >
              <img src={logo}/>Animal Abuse
              </div>}
            {charity.cause.causeID === 17 && <div
                className="circlehate"
              >
              <img src={logo}/>Child Neglect
              </div>}
              </CardContent>
              <CardContent className="d-flex-col">
                <Typography variant="h5">
                  <a href={charity.websiteURL}>{charity.charityName}</a>
                </Typography>
                <Typography variant="body1">
                  {charity.mailingAddress.streetAddress1}
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
            </div>
          ))}
        </div>
<div className="d-flex justify-content-center mt-5 py-5" style={{height:"500px"}}>
        <iframe
          width="60%"
          height="100%"
          src="https://www.youtube.com/embed/WetuL6Jo0gM"
          title="YouTube video Miracle Hill Ministries promo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
    </>
  );
}
export default withRouter(OrganizationList);
