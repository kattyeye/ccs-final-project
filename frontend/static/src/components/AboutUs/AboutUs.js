import { withRouter, NavLink } from "react-router-dom";
import bg1 from "../App/pics/bg1.jpg";
import neon from "../App/pics/neonsign.jpg";
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Card } from "@mui/material";
function AboutUs() {
  return (
    <div className="d-flex-md">
      <section className="container-fluid how-it-started-section">
        <div className="row d-sm-flex align-items-center justify-content-between">
          <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
            <div className="p-0 p-sm-5">
              <small className="text-uppercase" style={{ color: "#429125" }}>
                Our Story
              </small>
              <h3 className="mb-4 display-6" style={{ fontWeight: "600" }}>
                How it all <span style={{ color: "#429125" }}>Started</span>.
              </h3>
              <p className="" style={{ lineHeight: "2" }}>
                Our mission is providing everyday citizens with ways they can
                make an impact in our community. 86 Hate provides a portal where
                you can find opportunities to give and serve. As well as log
                your contributions.
              </p>

              <button
                type="button"
                style={{ background: "none", border: "none" }}
              >
                <a href="#footer" className="btn link-button">
                  Contact US
                </a>
              </button>
            </div>
          </div>

          <div className="col col-md-6 mx-auto order-1 order-sm-2 p-sm-5">
            <div className="p-5 w-100 ">
              <img src={bg1} className="landingpageimg" />
            </div>
          </div>
        </div>
      </section>

      {
        /* <div className="container my-5 text-white calltoaction">
        <div className="p-5 d-flex flex-column align-items-center justify-content-between">
          <span className="text-uppercase text-light">Sub Headline</span>
          <h1 className="mb-4 mt-2 font-weight-bold">Your Headline Here</h1>
          {/* <div className="d-flex socialicons">
            <li>
              <a href="mailto:katherineingram5@icloud.com">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/86hate">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/86hate/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/86hate/">
                <FaTwitter />
              </a>
            </li>
          </div> */
        // </div>
        // </div>
      }

      <div className="py-5 about-how-section container-fluid">
        <div className="text-center mb-5">
          <span>JOIN THE FIGHT</span>
          <h1 className="text-capitalize font-weight-bold">
            How it <span style={{ color: "#429125" }}>Works.</span>
          </h1>
        </div>

        <div className="col-12 col-md-8 mx-auto">
          <div className="d-flex my-4 align-items-start">
            <div className="mr-3 text-center mt-2">
              <div
                className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center"
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: " #429125",
                }}
              >
                1
              </div>
            </div>
            <Card className="rounded about-cards p-4">
              <h5 className="mb-3" style={{ fontWeight: "600" }}>
                Your Headline Here!
              </h5>
              <p className=" font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem aperiam temporibus sequi reprehenderit, maxime at
                cupiditate officia ipsam ipsum.
              </p>
            </Card>
          </div>

          <div className="d-flex my-4 align-items-start">
            <div className="mr-3 text-center mt-2">
              <div
                className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center"
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: " #429125",
                }}
              >
                2
              </div>
            </div>
            <Card className="rounded about-cards p-4">
              <h5 className="mb-3" style={{ fontWeight: "600" }}>
                Your Headline Here!
              </h5>
              <p className=" font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem aperiam temporibus sequi reprehenderit, maxime at
                cupiditate officia ipsam ipsum.
              </p>
            </Card>
          </div>

          <div className="d-flex my-4 align-items-start">
            <div className="mr-3 text-center mt-2">
              <div
                className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center"
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: " #429125",
                }}
              >
                3
              </div>
            </div>
            <Card className="rounded about-cards p-4">
              <h5 className="mb-3" style={{ fontWeight: "600" }}>
                Your Headline Here!
              </h5>
              <p className=" font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem aperiam temporibus sequi reprehenderit, maxime at
                cupiditate officia ipsam ipsum.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(AboutUs);
