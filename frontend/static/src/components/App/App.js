import "./App.css";
import { useState, useEffect, useAuthDataContext } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import RegistrationForm from "../Registration/RegistrationForm";
import LoginForm from "../Login/LoginForm";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import Cookies from "js-cookie";
import ContributionList from "../Contributions/ContributionList";
import OrganizationList from "../Orgs/OrganizationList";
import ContributionsPageTitle from "../Contributions/PageTitle";
import ReviewList from "../Reviews/ReviewList";
import UserReviews from "../Contributions/UserReviews";
import OrgPageTitle from "../Orgs/PageTitle";
import Footer from "../Footer/Footer";
import FooterTop from "../Footer/FooterTop";
import VolunteerOpportunities from "../Volunteer/VolunteerOpps";
import BlogPosts from "../Blog/BlogPosts";
import AboutUs from "../AboutUs/AboutUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../NotFoundPage/NotFound";
import { Spinner } from "react-bootstrap";

function App(props) {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();
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
  }, [location]);

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

  const [dashSelection, setDashSelection] = useState("contributions");
  let html;

  const isAuth = user?.isAuth;
  // const isAdmin = user?.isAdmin;

  if (!user) {
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  }
  return (
    <>
      <Header isAuth={isAuth} handleLogoutSubmit={handleLogoutSubmit} />
      <Switch>
        <Route path="/registration">
          <RegistrationForm isAuth={isAuth} />
        </Route>
        <PrivateRoute path="/login">
          <LoginForm isAuth={isAuth} user={user} setUser={setUser} />
        </PrivateRoute>

        <PrivateRoute isAuth={isAuth} path="/dashboard">
          <div className="contribspagebg">
            <ContributionsPageTitle user={user} isAuth={isAuth} />
            {/* <CustomizedTabs /> */}
            <div className="d-flex justify-content-center ">
              <button
                type="button"
                className="btn dashtab mx-5"
                onClick={() => setDashSelection("contributions")}
              >
                Contributions
              </button>
              <button
                type="button"
                className="btn dashtab mx-5"
                onClick={() => setDashSelection("reviews")}
              >
                Reviews
              </button>
            </div>
            {dashSelection == "contributions"
              ? (html = <ContributionList isAuth={isAuth} user={user} />)
              : (html = <UserReviews isAuth={isAuth} user={user} />)}
          </div>
        </PrivateRoute>

        <Route path="/organizations-and-reviews">
          <OrgPageTitle />
          <OrganizationList />

          <ReviewList />
          <div className="organizationspagebg">
            {isAuth && <UserReviews isAuth={isAuth} />}{" "}
          </div>
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/volunteer">
          <VolunteerOpportunities />
        </Route>
        <Route path="/blog">
          <BlogPosts />
        </Route>
        <Route exact path="/">
          <LandingPage isAuth={isAuth} setUser={setUser} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <FooterTop />
      <Footer />
    </>
  );
}

export default App;
