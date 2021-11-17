import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../App/pics/86hate_logo-removebg-preview.png";
function FooterTop(props) {
  return (
    <footer>
      <div className="footertop p-5" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <NavLink to="/">
                <img src={logo} style={{ width: "30%" }} />
              </NavLink>
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-3">
              <h3 className="display-6" style={{ fontWeight: "600" }}>
                Contact Us
              </h3>
              <ul>
                <br />
                <li>
                  <p> Greenville, SC </p>
                  <p>We'd love to hear from you.</p>
                </li>
                <div className="d-flex socialicons">
                  <li>
                    <a href="mailto:katherineingram5@icloud.com">
                      <FaEnvelope />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/86hate">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/86hate/">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/86hate/">
                      <FaTwitter />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-3">
              <ul>
                <li>
                  <h5>
                    <NavLink to="/about-us">About Us</NavLink>
                  </h5>
                </li>
                <li>
                  <h5>
                    <NavLink to="/blog"> Blog </NavLink>
                  </h5>
                </li>
                <li>
                  <h5>
                    <NavLink to="/organizations-and-reviews">
                      Organizations
                    </NavLink>
                  </h5>
                </li>
                <li>
                  <h5>
                    <NavLink to="/volunteer"> Get Involved </NavLink>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default withRouter(FooterTop);
