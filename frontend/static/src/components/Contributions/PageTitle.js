import { Carousel } from "react-bootstrap";
import { withRouter } from "react-router";
import sliderpic from "../App/pics/sliderpic1.jpg";
function ContributionsPageTitle(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderpic} alt="First slide" />
          <Carousel.Caption>
            <h2>Dashboard</h2>
            <div>
              <h4></h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default withRouter(ContributionsPageTitle);
