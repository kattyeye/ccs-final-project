import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../App/pics/logo.png";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

function Header(props) {
  return (
    <nav className="container-fluid px-5 ">
      <Navbar.Brand className="px-5 ">
        <li>
          <NavLink className="navbar-brand " to="/">
            <img src={logo} />
          </NavLink>
        </li>
      </Navbar.Brand>

      <Navbar collapseOnSelect expand="lg" className="container-fluid px-5">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <ul className="links-nav">
              <div className="public-center-nav">
                <li className="nav-item p-3">
                  <NavLink to="/organizations-and-reviews">
                    Organizations
                  </NavLink>
                </li>

                <li className="nav-item p-3">
                  <NavLink to="/volunteer">Get Involved</NavLink>
                </li>
                <li className="nav-item p-3">
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li className="nav-item p-3">
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </div>
              {!props.isAuth ? (
                <li className="nav-item p-3 ">
                  <NavLink to="/" className="login">
                    <FaSignInAlt style={{ paddingRight: "3px" }} />
                    Login
                  </NavLink>
                </li>
              ) : (
                <div className="authnavitems">
                  <li className="dashboard">
                    <button
                      type="button"
                      style={{ border: "none", background: "none" }}
                    >
                      <NavLink to="/dashboard" className="btn dashboardbutton">
                        My Dashboard
                      </NavLink>
                    </button>
                  </li>

                  <li className="">
                    <button
                      className="nav-item p-3 logout"
                      type="button"
                      onClick={() => props.handleLogoutSubmit()}
                    >
                      <FaSignOutAlt style={{ paddingRight: "3px" }} /> Logout
                    </button>
                  </li>
                </div>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
export default withRouter(Header);
