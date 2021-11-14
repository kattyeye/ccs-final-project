import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../App/pics/logo.png";
import { FaSignInAlt } from "react-icons/fa";

function Header(props) {
  return (
    <nav className="container-fluid">
      <Navbar.Brand>
        <li>
          <NavLink className="navbar-brand " to="/">
            <img src={logo} />
          </NavLink>
        </li>
      </Navbar.Brand>

      <Navbar collapseOnSelect expand="lg" className="container-fluid">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <ul className="links-nav">
              <div className="public-center-nav">
                <li className="nav-item p-3">
                  <NavLink to="/blog">Blog</NavLink>
                </li>

                <li className="nav-item p-3">
                  <NavLink to="/organizations-with-reviews">
                    Organizations
                  </NavLink>
                </li>

                <li className="nav-item p-3">
                  <NavLink to="/about-us">About Us</NavLink>
                </li>

                {/* {!!!props.isAuth && (

                <li className="nav-item p-3 ">
                  <NavLink className="login-btn" to="/login">
                    Login
                  </NavLink>
                </li>

            )} */}
                {/* {props.isAuth && (
                <>
                  <li className="nav-item p-3">
                    <NavLink to="/my-contributions">My Contributions</NavLink>
                  </li>

                  <li className="">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => props.handleLogoutSubmit()}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )} */}

                <li className="nav-item p-3">
                  <NavLink to="/volunteer">Get Involved</NavLink>
                </li>
              </div>
              {!props.isAuth && (
                <li className="nav-item p-3 ">
                  <NavLink to="/">
                    <FaSignInAlt /> Login
                  </NavLink>
                </li>
              )}

              {props.isAuth && (
                <div className="authnavitems">
                  <li className="dashboard">
                    <button type="button" className="btn dashboardbutton">
                      <NavLink to="/dashboard">My Dashboard</NavLink>
                    </button>
                  </li>

                  <li className="">
                    <button
                      className="nav-item p-3 logout"
                      type="button"
                      onClick={() => props.handleLogoutSubmit()}
                    >
                      Logout
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
