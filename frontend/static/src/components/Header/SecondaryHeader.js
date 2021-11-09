import { NavLink, withRouter } from "react-router-dom";

function SecondaryHeader(props) {
  return (
    <>
      {props.isAuth && (
        <nav className="navbar navbar-expand-lg secondary-navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse " id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <>
                  <li className="nav-item ">
                    <NavLink to="/my-contributions">My Dashboard</NavLink>
                  </li>

                  <li className="">
                    <button
                      className="logout"
                      type="button"
                      onClick={() => props.handleLogoutSubmit()}
                    >
                      Logout
                    </button>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
export default withRouter(SecondaryHeader);
