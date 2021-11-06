import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../App/logo/logo.png";

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
              <li className="nav-item p-3">
                <NavLink to="/">Blog</NavLink>
              </li>

              <li className="nav-item p-3">
                <NavLink to="/organizations-with-reviews">
                  Organizations
                </NavLink>
              </li>

              <li className="nav-item p-3">
                <NavLink to="/">About Us</NavLink>
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

              <li className="nav-item ">
                <NavLink to="/donate">
                  <button className="btn" type="button">
                    Donate
                  </button>
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
export default withRouter(Header);
