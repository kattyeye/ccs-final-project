import { Carousel } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import sliderpic from "../App/pics/sliderpic1.jpg";
function OrgPageTitle() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={sliderpic} alt="First slide" />
          <Carousel.Caption>
            <h3>Organizations</h3>
            <p>A hand-picked group of charities we know and love.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default OrgPageTitle;
