import { Carousel } from "react-bootstrap";
import bg3 from "../App/pics/bg3.png";
function OrgPageTitle() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={bg3} />
        <Carousel.Caption>
          <h2>Organizations and Reviews</h2>
          <h6>Our favorites.</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default OrgPageTitle;
