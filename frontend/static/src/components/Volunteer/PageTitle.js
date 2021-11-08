import { Carousel } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import sliderpic from "../App/pics/sliderpic1.jpg";
function VolPageTitle() {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={sliderpic} alt="First slide" />
          <Carousel.Caption>
            <h3>Volunteer Opportunities</h3>
            <p>
              Hand-picked by 86 Hate from some of our favorite organizations.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default VolPageTitle;
