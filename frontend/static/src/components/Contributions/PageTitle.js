import { Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";
import { withRouter } from "react-router";
import sliderpic from "../App/pics/sliderpic1.jpg";
function ContributionsPageTitle(props) {
  return (
    <div className="py-5">
      <div className="d-flex justify-content-center">
        <Typography style={{ color: "black" }} variant="h3">
          My Dashboard
        </Typography>
      </div>
    </div>
  );
}
export default withRouter(ContributionsPageTitle);
