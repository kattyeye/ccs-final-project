import { withRouter, useLocation, Link } from "react-router-dom";

function NotFound() {
  let location = useLocation();

  return (
    <div className="errorpagecontainer">
      <h2 style={{ fontWeight: "900", fontSize: "100px" }}>404</h2>
      <h4>
        Oops... No match for <code>{location.pathname}</code>.
      </h4>
      <br />
      <Link to="/">
        <button type="button" className="btn">
          Take me Home
        </button>
      </Link>
    </div>
  );
}
export default withRouter(NotFound);
