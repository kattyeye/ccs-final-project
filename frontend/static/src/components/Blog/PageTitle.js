import { Carousel } from "react-bootstrap";
import plants from "../App/pics/plants.jpg";
function BlogPageTitle() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={plants} />
          <Carousel.Caption>
            <h2>Our Blog: The Catalyst</h2>
            <h6>Explore ways to create change with the 86 Hate blog.</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default BlogPageTitle;
