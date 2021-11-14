import BlogPageTitle from "./PageTitle";
import { Card, CardActions, CardContent } from "@mui/material";
export default function BlogPosts() {
  return (
    <>
      <BlogPageTitle />

      <div className="container-fluid blog-page-bg">
        <div className="text-center py-5">
          <span className=" text-uppercase" style={{ color: "#60993d" }}>
            What's The News?
          </span>
          <h1 className="text-capitalize font-weight-bold mt-2">
            Our Latest <span style={{ color: "#60993d" }}>Blogs</span>
          </h1>
        </div>
        <div className="px-5 d-flex">
          <div className="d-flex  mb-5">
            <Card sx={{ padding: "50px" }}>
              <h1 className="text-dark" style={{ fontWeight: "600" }}>
                4 Easy Ways to Get Involved in the Community
              </h1>

              <img
                className="w-100 my-4"
                src="https://images.unsplash.com/photo-1623863774468-7741435322e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quam aut ea minus illo ex ducimus, rerum quasi optio a, sint
                reiciendis! Consequuntur, neque ratione eaque nihil ipsum
                similique totam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam quam aut ea minus illo ex ducimus, rerum
                quasi optio a, sint reiciendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quam aut ea minus illo ex ducimus, rerum quasi optio a, sint
                reiciendis! Consequuntur, neque ratione eaque nihil ipsum
                similique totam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam quam aut ea minus illo ex ducimus, rerum
                quasi optio a, sint reiciendis!
              </p>
              <br></br>
              <blockquote
                class=" p-3 font-italic"
                style={{ borderLeft: "4px solid black", lineHeight: "2" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </blockquote>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quam aut ea minus illo ex ducimus, rerum quasi optio a, sint
                reiciendis! Consequuntur, neque ratione eaque nihil ipsum
                similique totam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam quam aut ea minus illo ex ducimus, rerum
                quasi optio a, sint reiciendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quam aut ea minus illo ex ducimus, rerum quasi optio a, sint
                reiciendis! Consequuntur, neque ratione eaque nihil ipsum
                similique totam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam quam aut ea minus illo ex ducimus, rerum
                quasi optio a, sint reiciendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quam aut ea minus illo ex ducimus, rerum quasi optio a, sint
                reiciendis! Consequuntur, neque ratione eaque nihil ipsum
                similique totam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam quam aut ea minus illo ex ducimus, rerum
                quasi optio a, sint reiciendis!
              </p>
              <div className="d-flex align-items-center my-4">
                <div className="d-flex align-items-center mr-4">
                  <button
                    className="btn mt-1"
                    style={{ backgroundColor: "#60993d" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
