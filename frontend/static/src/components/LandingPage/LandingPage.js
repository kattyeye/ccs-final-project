import LoginForm from "../Login/LoginForm";
import logo from "../App/pics/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router";
import { CardContent, CardHeader } from "@mui/material";
function LandingPage() {
  return (
    <div className="container-fluid col-lg col-12">
      <section className="horiz-container container-fluid">
        <div className="half-text">
          <h1>Don't be a hater.</h1>
          <h4>
            86 Hate is a movement to share resources and connect people to
            non-profits in Greenville.
          </h4>
          <a className="btn">Learn More</a>
        </div>
        <div className="header-login-form">
          <LoginForm />
        </div>
      </section>

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
