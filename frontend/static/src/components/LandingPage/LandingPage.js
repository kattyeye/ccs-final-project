import LoginForm from "../Login/LoginForm";
// import logo from "../App/pics/logo.png";
import logoremovedbg from "../App/pics/86hate_logo-removebg-preview.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import { Card, NavLink } from "react-bootstrap";
import { withRouter } from "react-router";
// import { CardContent, CardHeader } from "@mui/material";
// import { Link } from "react-router-dom";
import sliderpic from "../App/pics/sliderpic1.jpg";
import soupkitchen from "../App/pics/soupkitchen.jpg";
import { Link } from "react-router-dom";
function LandingPage(props) {
  return (
    <div className="col-lg col-12">
      <div className="headersection-landing">
        <section className="container-fluid ">
          <div className="row d-sm-flex align-items-center justify-content-between">
            <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
              <div className="p-0 p-sm-5">
                <small className="text-uppercase" style={{ color: "#429125" }}>
                  Do. Give. Share.
                </small>
                <h1 className="mb-4 display-4" style={{ fontWeight: "600" }}>
                  Change how people view their world:{" "}
                  <span style={{ color: "#429125" }}>86 Hate.</span>
                </h1>
                <p className="" style={{ lineHeight: "2" }}>
                  You can make a difference. How? Doing random acts of kindness.
                  Giving your time and resources. And sharing the 86 Hate
                  movement with your community.
                </p>
                <a href="#footer">
                  <button className="btn" type="button">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>

            <div
              className="w-lg-50 col-md-6 order-2 order-sm-2 p-sm-5"
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
                The <span style={{ color: "#429125" }}>86 Hate</span> Big
                Picture.
              </h3>
              <p className="" style={{ lineHeight: "2" }}>
                We’re all about empowering ordinary people to make an
                extraordinary difference by getting involved. Originally, to 86
                something meant removing it from a restaurant menu. We’re
                eliminating inconvenience to empower local charities and
                non-profits by creating a portal where likeminded people can get
                involved, give, and serve.
              </p>
              <Link to="/about-us">
                <button type="button" className="btn link-button">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="col col-md-6 mx-auto order-1 order-sm-2 p-sm-5">
            <div className="p-5 w-100">
              <img src={sliderpic} className="landingpageimg" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container-fluid">
        <div className="row d-sm-flex align-items-center justify-content-between">
          <div className="col col-md-6 mx-auto order-1 order-sm-1 ">
            <div className="p-5 w-100">
              <img src={soupkitchen} className="landingpageimg" />
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
                Try something new, give a helping hand or hoodie!
              </p>
              <button type="button" className="btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <div className=" p-5 solutionsection">
        <section className="container ">
          <div className="text-center">
            <small className="text-uppercase" style={{ color: "#429125" }}>
              Eliminate the hate.
            </small>
            <h2
              className="font-weight-bold display-6 "
              style={{ fontWeight: "600" }}
            >
              Be the <span style={{ color: "#429125" }}>Solution.</span>
            </h2>
          </div>
          <div className="row ">
            <div className="col-md-4 my-2">
              <div className="px-3 my-5">
                <div
                  className="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#429125",
                  }}
                >
                  <FaHandHoldingHeart
                    style={{
                      width: "100%",
                      fontSize: "55px",
                      color: "#EAFFDE",
                    }}
                  />
                </div>
                <div className="px-3 text-center pb-3">
                  <h5 className="text-uppercase" style={{ fontWeight: "600" }}>
                    Donate
                  </h5>
                  <p className="font-weight-light my-3">
                    Share your resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="px-3 my-5">
                <div
                  className="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#429125",
                  }}
                >
                  <FaHandsHelping
                    style={{
                      width: "100%",
                      fontSize: "55px",
                      color: "#EAFFDE",
                    }}
                  />
                </div>
                <div className="px-3 text-center pb-3">
                  <h5 className="text-uppercase" style={{ fontWeight: "600" }}>
                    Participate
                  </h5>
                  <p className="font-weight-light my-3">Spend time helping.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="px-3 my-5">
                <div
                  className="circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#429125",
                  }}
                >
                  <MdCelebration
                    style={{
                      width: "100%",
                      fontSize: "55px",
                      color: "#EAFFDE",
                    }}
                  />
                </div>
                <div className="px-3 text-center pb-3">
                  <h5 className="text-uppercase" style={{ fontWeight: "600" }}>
                    Celebrate
                  </h5>
                  <p className="font-weight-light my-3">
                    Spread the good news.
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
