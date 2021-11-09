import { Carousel } from "react-bootstrap";
// import sliderpic from "../App/pics/sliderpic1.jpg";
function BlogPageTitle() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1623863774468-7741435322e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Blog</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default BlogPageTitle;
