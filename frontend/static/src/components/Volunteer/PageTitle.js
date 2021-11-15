import { Carousel } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import tomato from "../App/pics/tomato.jpg";
function VolPageTitle() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="w-100" src={tomato} alt="First slide" />
          <Carousel.Caption>
            <h2>Volunteer Opportunities</h2>
            <h6>Hand-picked from some of our favorite organizations.</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default VolPageTitle;
