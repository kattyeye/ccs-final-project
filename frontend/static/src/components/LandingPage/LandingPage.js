import LoginForm from "../Login/LoginForm";
// import logo from "../App/pics/logo.png";
import logoremovedbg from "../App/pics/86hate_logo-removebg-preview.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router";
// import { CardContent, CardHeader } from "@mui/material";
// import { Link } from "react-router-dom";
import sliderpic from "../App/pics/sliderpic1.jpg";
import soupkitchen from "../App/pics/soupkitchen.jpg";
function LandingPage(props) {
  return (
    <div className="col-lg col-12">
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
      <div className="headersection-landing">
        <section className="container-fluid ">
          <div className="row d-sm-flex align-items-center justify-content-between">
            <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
              <div className="p-0 p-sm-5">
                <small className="text-uppercase" style={{ color: "#429125" }}>
                  Spread the word
                </small>
                <h1 className="mb-4 display-4" style={{ fontWeight: "600" }}>
                  Don't be a <span style={{ color: "#429125" }}>Hater</span>
                </h1>
                <p className="" style={{ lineHeight: "2" }}>
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

            <div
              className="w-50 col-md-6 order-2 order-sm-2 p-sm-5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="p-5" style={{ display: "flex" }}>
                {!props.isAuth ? (
                  <div className="loginformcontainer">
                    <LoginForm />{" "}
                  </div>
                ) : (
                  <img
                    src={logoremovedbg}
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container-fluid mt-3 ">
        <div className="row d-sm-flex align-items-center justify-content-between">
          <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
            <div className="p-0 p-sm-5">
              <h3 className="mb-4 display-6" style={{ fontWeight: "600" }}>
                What does <span style={{ color: "#429125" }}>86</span> mean?
              </h3>
              <p className="" style={{ lineHeight: "2" }}>
                Eighty-six or 86 is American English slang used to indicate that
                an item is no longer available, traditionally from a food or
                drinks establishment; or referring to a person or people who are
                not welcome in the premises. Hate is no longer welcome here.
              </p>
            </div>
          </div>

          <div className="w-50 col-md-6 order-1 order-sm-2 p-sm-5">
            <div className="p-5">
              <img src={sliderpic} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid ">
        <div className="row d-sm-flex align-items-center justify-content-between">
          <div className="w-50 col-md-6 order-1 order-sm-1 p-sm-5">
            <div className="p-5">
              <img src={soupkitchen} />
            </div>
          </div>

          <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
            <div className="p-0 p-sm-5">
              <h3 className="mb-4 display-6" style={{ fontWeight: "600" }}>
                We're all out of <span style={{ color: "#429125" }}>hate</span>.
              </h3>
              <p className="" style={{ lineHeight: "2" }}>
                Since 2021, our mission is to spread love and serve others. We
                offer several resources to connect you with local organizations.
                Try something new, give a helping hand or a hoodie!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container  mt-5">
        <section>
          <div className="text-center mb-5">
            <small className="text-uppercase" style={{ color: "#429125" }}>
              How you can help{" "}
            </small>
            <h2
              className="font-weight-bold display-6 "
              style={{ fontWeight: "600" }}
            >
              <span style={{ color: "#429125" }}>Elimin8</span> the hate
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4 my-2">
              <div className="px-3 my-5">
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
                <div className="px-3 text-center pb-3">
                  <h5 className="text-uppercase" style={{ fontWeight: "600" }}>
                    Don8
                  </h5>
                  <p className="font-weight-light my-3">
                    Lorem ipsum dolor sit consectetur adipisicing elit. Alias
                    amet deleniti et fugit iusto nesciunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="px-3 my-5">
                <div
                  className="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#429125",
                  }}
                >
                  <FaHandsHelping
                    style={{ width: "100%", fontSize: "35px", color: "black" }}
                  />
                </div>
                <div className="px-3 text-center pb-3">
                  <h5 className="text-uppercase" style={{ fontWeight: "600" }}>
                    Particip8
                  </h5>
                  <p className="font-weight-light my-3">
                    Lorem ipsum dolor sit consectetur adipisicing elit. Alias
                    amet deleniti et fugit iusto nesciunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="px-3 my-5">
                <div
                  className="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#429125",
                  }}
                >
                  <MdCelebration
                    style={{ width: "100%", fontSize: "35px", color: "black" }}
                  />
                </div>
                <div className="px-3 text-center pb-3">
                  <h5 className="text-uppercase" style={{ fontWeight: "600" }}>
                    Celebr8
                  </h5>
                  <p className="font-weight-light my-3">
                    Lorem ipsum dolor sit consectetur adipisicing elit. Alias
                    amet deleniti et fugit iusto nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
