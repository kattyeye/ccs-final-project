import { Route, Redirect, withRouter } from "react-router-dom";

function PrivateRoute({ isAuth, ...props }) {
  // console.log("isAuth", isAuth);
  return isAuth ? <Route {...props} /> : <Redirect to="/" />;
}

export default withRouter(PrivateRoute);
