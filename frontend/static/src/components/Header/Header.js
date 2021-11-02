import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../App/logo/logo.png";
export default function Header(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="container-fluid nav-top-level"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto container-fluid">
            <Navbar.Brand>
              <li>
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} />
                </NavLink>
              </li>
            </Navbar.Brand>

            <Nav.Link>
              <li className="nav-item p-3">
                <NavLink to="/my-contributions">My Contributions</NavLink>
              </li>
            </Nav.Link>

            {!props.isAuth && (
              <Nav.Link>
                <li className="nav-item p-3 ">
                  <NavLink className="login-btn" to="/login">
                    Login
                  </NavLink>
                </li>
              </Nav.Link>
            )}
            {props.user && (
              <Nav.Link>
                <li className="btn-logout">
                  <button
                    className="btn btn-link logout"
                    type="button"
                    onClick={() => props.handleLogoutSubmit()}
                  >
                    Logout
                  </button>
                </li>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
