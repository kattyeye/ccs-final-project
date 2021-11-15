import { Carousel } from "react-bootstrap";
import { withRouter } from "react-router";
import sliderpic from "../App/pics/sliderpic1.jpg";
function ContributionsPageTitle(props) {
  return (
    <div className="py-5">
      <div className="d-flex justify-content-center">
        <h2 style={{ color: "black" }}>My Dashboard</h2>
      </div>
    </div>
  );
}
export default withRouter(ContributionsPageTitle);
