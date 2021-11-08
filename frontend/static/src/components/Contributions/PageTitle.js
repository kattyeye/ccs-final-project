import { Carousel } from "react-bootstrap";
import sliderpic from "../App/pics/sliderpic1.jpg";
function ContributionsPageTitle() {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderpic} alt="First slide" />
          <Carousel.Caption>
            <h3>My Contributions and Reviews</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default ContributionsPageTitle;
