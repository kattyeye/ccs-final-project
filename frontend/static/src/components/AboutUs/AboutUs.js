import { withRouter } from "react-router";

function AboutUs() {
  return (
    <div className="container-fluid mb-5">
      <div className="row d-sm-flex align-items-center justify-content-between">
        <div className="col-md-6 order-2 order-sm-1 p-3 p-sm-5">
          <div className="p-0 p-sm-5">
            <small className="text-uppercase" style={{ color: "#429125" }}>
              History Lesson
            </small>
            <h1 className="mb-4 display-4" style={{ fontWeight: "600" }}>
              About <span style={{ color: "#429125" }}>Us</span>
            </h1>
            <p style={{ lineHeight: "2" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
              Distinctio voluptatibus dolor quaerat quo omnis illo sequi at
              velit, odit quod!
            </p>
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#429125" }}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div
          className="w-50 col-md-6 order-1 order-sm-2"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
            height: "80vh",
            minHeight: "400px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(40%)",
          }}
        ></div>
      </div>
    </div>
  );
}
export default withRouter(AboutUs);
