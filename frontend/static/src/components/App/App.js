import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import RegistrationForm from "../Registration/RegistrationForm";
import LoginForm from "../Login/LoginForm";
import LandingPage from "../LandingPage/LandingPage";
import Contributions from "../Contributions/Contributions";
import Header from "../Header/Header";
function App() {
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

  const isAuth = user?.isAuth;
  return (
    <>
      <Header />
      <Switch>
        <Route path="/registration">
          <RegistrationForm />
        </Route>
        <Route path="/login">
          <LoginForm isAuth={isAuth} setUser={setUser} />
        </Route>
        <Route path="/my-contributions">
          <Contributions isAuth={isAuth} setUser={setUser} user={user} />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
