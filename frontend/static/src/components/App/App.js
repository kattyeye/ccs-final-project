import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import RegistrationForm from "../Registration/RegistrationForm";
import LoginForm from "../Login/LoginForm";
import LandingPage from "../LandingPage/LandingPage";
import ContributionForm from "../Contributions/ContributionForm";
import Header from "../Header/Header";
import Cookies from "js-cookie";
import ContributionList from "../Contributions/ContributionList";
import OrganizationList from "../Orgs/OrganizationList";
import ContributionPageTitle from "../Contributions/ContributionPageTitle";
function App(props) {
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/rest-auth/user");
      if (!response.ok) {
        setUser({ isAuth: false });
      } else {
        const data = await response.json();
        setUser({ isAuth: true, isAdmin: data.is_staff });
      }
    };
    checkAuth();
  }, [history]);

  async function handleLogoutSubmit(event) {
    // event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(props.user),
    };
    const response = await fetch("/rest-auth/logout/", options);
    if (!response) {
      console.log(response);
    } else {
      console.log(response);
      const data = await response.json();
      Cookies.remove("Authorization");
      setUser({ isAuth: false });
      history.push("/");
    }
  }

  const isAuth = user?.isAuth;
  // const isAdmin = user?.isAdmin;
  return (
    <>
      <Header handleLogoutSubmit={handleLogoutSubmit} />
      <Switch>
        <Route path="/registration">
          <RegistrationForm />
        </Route>
        <Route path="/login">
          <LoginForm isAuth={isAuth} user={user} setUser={setUser} />
        </Route>
        <Route path="/organizations">
          <OrganizationList />
        </Route>
        <Route path="/my-contributions">
          <ContributionPageTitle />
          <ContributionList isAuth={isAuth} user={user} />
          <ContributionForm isAuth={isAuth} user={user} />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
