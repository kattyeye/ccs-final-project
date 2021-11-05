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
          <div className="brand-nav">
            <Navbar.Brand>
              <li>
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} />
                </NavLink>
              </li>
            </Navbar.Brand>
          </div>
          <div className="links-nav">
            <Nav.Link>
              <li className="nav-item p-3">
                <NavLink to="/">Blog</NavLink>
              </li>
            </Nav.Link>
            <Nav.Link>
              <li className="nav-item p-3">
                <NavLink to="/organizations">Organizations</NavLink>
              </li>
            </Nav.Link>
            <Nav.Link>
              <li className="nav-item p-3">
                <NavLink to="/">About Us</NavLink>
              </li>
            </Nav.Link>

            {/* {!!!props.isAuth && (
              <Nav.Link>
                <li className="nav-item p-3 ">
                  <NavLink className="login-btn" to="/login">
                    Login
                  </NavLink>
                </li>
              </Nav.Link>
            )} */}
            {!props.isAuth && (
              <>
                <Nav.Link>
                  <li className="nav-item p-3">
                    <NavLink to="/my-contributions">My Contributions</NavLink>
                  </li>
                </Nav.Link>
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
              </>
            )}
            <Nav.Link>
              <li className="nav-item ">
                <button type="button" className="btn donate">
                  <NavLink to="/donate">Donate</NavLink>
                </button>
              </li>
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(Header);
