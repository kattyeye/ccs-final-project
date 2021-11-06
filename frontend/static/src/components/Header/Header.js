import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../App/logo/logo.png";

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="container-fluid">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <ul className="brand-nav">
            <Navbar.Brand>
              <li>
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} />
                </NavLink>
              </li>
            </Navbar.Brand>
          </ul>
          <ul className="links-nav">
            <li className="nav-item p-3">
              <NavLink to="/">Blog</NavLink>
            </li>

            <li className="nav-item p-3">
              <NavLink to="/organizations-with-reviews">Organizations</NavLink>
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
            {!props.isAuth && (
              <>
                <li className="nav-item p-3">
                  <NavLink to="/my-contributions">My Contributions</NavLink>
                </li>

                <li className="btn-logout">
                  <button
                    className="btn btn-link logout"
                    type="button"
                    onClick={() => props.handleLogoutSubmit()}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            <li className="nav-item ">
              <button type="button" className="btn donate">
                <NavLink to="/donate">Donate</NavLink>
              </button>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(Header);
