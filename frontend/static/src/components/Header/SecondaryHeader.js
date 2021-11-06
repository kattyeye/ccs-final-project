import { NavLink } from "react-router-dom";

export default function SecondaryHeader(props) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse primarynav"
          id="navbarResponsive"
        >
          <ul className="navbar-nav ml-auto">
            {props.isAuth && (
              <>
                <li className="nav-item ">
                  <NavLink to="/my-contributions/submitted">
                    My Contributions
                  </NavLink>
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
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
