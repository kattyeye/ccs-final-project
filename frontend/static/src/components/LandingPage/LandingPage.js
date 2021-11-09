import LoginForm from "../Login/LoginForm";
import logo from "../App/pics/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router";
import { CardContent, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage(props) {
  return (
    <div className="container-fluid col-lg col-12">
      {/* <section className="horiz-container container-fluid">
        <div className="half-text">
          <h1>Don't be a hater.</h1>
          <h4>
            86 Hate is a movement to share resources and connect people to
            non-profits in Greenville.
          </h4>
          <Link className="btn" to="/about-us">
            Learn More
          </Link>
        </div>
        {!props.isAuth && (
          <div className="header-login-form">
            <LoginForm />
          </div>
        )}
      </section> */}
      <div className="container-fluid mt-5 mb-5">
        <div className="row d-sm-flex align-items-center justify-content-between">
          <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
            <div className="p-0 p-sm-5">
              <small className="text-uppercase" style={{ color: "#60993d" }}>
                Spread the word
              </small>
              <h1 className="mb-4 display-4" style={{ fontWeight: "600" }}>
                Don't be a <span style={{ color: "#60993d" }}>Hater</span>
              </h1>
              <p className="text-secondary" style={{ lineHeight: "2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit repellat iure laboriosam cum voluptatum, nam minima
                deserunt aut? Distinctio voluptatibus dolor quaerat quo omnis
                illo sequi at velit, odit quod!
              </p>
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "" }}
              >
                Contact Us
              </button>
            </div>
          </div>
          {!props.isAuth && (
            <div className="w-50 col-md-6 order-2 order-sm-2 p-sm-5">
              <div className="p-5">
                <LoginForm />
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="container-fluid horiz-container-mid">
        <div className="half-text">
          <h3>What does 86 mean?</h3>
          <p>
            Eighty-six or 86 is American English slang used to indicate that an
            item is no longer available, traditionally from a food or drinks
            establishment; or referring to a person or people who are not
            welcome in the premises. Hate is no longer welcome here.
          </p>
        </div>
        <div className="img-container">
          <img src={logo}></img>
        </div>
      </section>
      <section className="container-fluid horiz-container-three">
        <div className="img-container">
          <img src={logo}></img>
        </div>
        <div className="half-text">
          <h3>We're all out of hate.</h3>
          <p>
            Since 2021, our mission is to spread love and serve others. We offer
            several resources to connect you with local organizations. Try
            something new, give a helping hand or a hoodie!
          </p>
        </div>
      </section>
      <section className="container full-section">
        <div>
          <h6>How you can help</h6>
          <h3>Elimin8 the H8</h3>
        </div>
        <div className="options-card-holder">
          <Card>
            <FaHandHoldingHeart style={{ width: "100%", fontSize: "75px" }} />
            <br></br>
            <h4>Don8</h4>
            <p>
              We offer a page devoted to helping you find a charity to donate
              any amount of dollas you choose.
            </p>
          </Card>
          <div>
            <Card>
              <FaHandsHelping style={{ width: "100%", fontSize: "75px" }} />{" "}
              <br></br>
              <h4>Particip8</h4>
              <p>
                Head to our local volunteer position page and sign up to serve
                your community. Create a positive impact!
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withRouter(LandingPage);
