import { Route, Redirect, withRouter } from "react-router-dom";

function PrivateRoute({ isAuth, ...props }) {
  return isAuth ? <Route {...props} /> : <Redirect to="/" />;
}

export default withRouter(PrivateRoute);
