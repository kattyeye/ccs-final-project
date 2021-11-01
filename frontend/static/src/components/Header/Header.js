import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import mainLogo from "./mainLogo.png";
import logo from "../App/logo/logo.png";
export default function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="container-fluid">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto container-fluid"
            style={{ paddingRight: "0px" }}
          >
            {props.isAdmin && (
              <NavDropdown
                title="Admin Articles"
                className=" secondary-nav-item p-3"
                id="dropdown-nav-title"
              >
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/admin/submitted">
                        Submitted
                      </NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/admin/published">
                        Published
                      </NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/admin/rejected">Rejected</NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/admin/archived">Archived</NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {props.isAuth && !props.isAdmin && (
              <NavDropdown
                title="My Articles"
                className=" secondary-nav-item p-3"
                id="dropdown-nav-title"
              >
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/drafts">Drafts</NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/submitted">Submitted</NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/published">Published</NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/rejected">Rejected</NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <li className="nav-item secondary-nav-item p-3">
                      <NavLink to="/articles/archived">Archived</NavLink>
                    </li>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <Navbar.Brand>
              <li>
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} />
                </NavLink>
              </li>
            </Navbar.Brand>
            {props.isAuth && (
              <>
                <Nav.Link>
                  <li className="nav-item secondary-nav-item p-3">
                    <NavLink to="/account">Compose</NavLink>
                  </li>
                </Nav.Link>
              </>
            )}

            {!props.isAuth && (
              <Nav.Link>
                <li className="nav-item secondary-nav-item p-3 ">
                  <NavLink className="login-btn" to="/login">
                    Login
                  </NavLink>
                </li>
              </Nav.Link>
            )}
            {props.isAuth && (
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
