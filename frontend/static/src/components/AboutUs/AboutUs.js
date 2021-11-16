import { withRouter, NavLink } from "react-router-dom";
import bg1 from "../App/pics/bg1.jpg";
function AboutUs() {
  return (
    <div className="container-fluid mb-5">
      {/* <div className="row d-sm-flex align-items-center justify-content-between">
        <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
          <div className="p-0 p-sm-5">
            <small className="text-uppercase" style={{ color: "#429125" }}>
              Our Story
            </small>
            <h1 className="mb-4 display-4" style={{ fontWeight: "600" }}>
              How it all <span style={{ color: "#429125" }}>Started</span>.
            </h1>
            <p style={{ lineHeight: "2" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
              Distinctio voluptatibus dolor quaerat quo omnis illo sequi at
              velit, odit quod!
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
        <div className="w-50 col-md-6 order-1 order-sm-2 about-us-header-image"></div>
      </div> */}

      <section className="">
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
    </div>
  );
}
export default withRouter(AboutUs);
