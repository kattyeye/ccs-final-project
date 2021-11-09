import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import RegistrationForm from "../Registration/RegistrationForm";
import LoginForm from "../Login/LoginForm";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";
import Cookies from "js-cookie";
import ContributionList from "../Contributions/ContributionList";
import OrganizationList from "../Orgs/OrganizationList";
import ContributionsPageTitle from "../Contributions/PageTitle";
import ReviewForm from "../Reviews/ReviewForm";
import ReviewList from "../Reviews/ReviewList";
import ReviewListAuth from "../Reviews/ReviewListAuth";
import SecondaryHeader from "../Header/SecondaryHeader";
import UserReviews from "../Contributions/UserReviews";
import OrgPageTitle from "../Orgs/PageTitle";
import Footer from "../Footer/Footer";
import FooterTop from "../Footer/FooterTop";
import VolunteerOpportunities from "../Volunteer/VolunteerOpps";
import BlogPosts from "../Blog/BlogPosts";
import UserReviewForm from "../Contributions/UserReviewForm";
import AboutUs from "../AboutUs/AboutUs";
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
      <SecondaryHeader
        isAuth={isAuth}
        handleLogoutSubmit={handleLogoutSubmit}
      />
      <Header />
      <Switch>
        <Route path="/registration">
          <RegistrationForm />
        </Route>
        <Route path="/login">
          <LoginForm isAuth={isAuth} user={user} setUser={setUser} />
        </Route>
        <Route path="/my-contributions">
          <ContributionsPageTitle />
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="mt-5 mb-5 "
          >
            <div style={{ display: "inline-block" }}>
              <ContributionList isAuth={isAuth} user={user} />
            </div>
            <div style={{ display: "inline-block" }}>
              <UserReviews isAuth={isAuth} />
            </div>
          </div>
        </Route>
        <Route path="/organizations-with-reviews">
          <OrgPageTitle />
          <OrganizationList />
          <ReviewList />
          {/* <ReviewListAuth isAuth={isAuth} /> */}
          {/* <ReviewForm isAuth={isAuth} /> */}
          {/* <UserReviewForm isAuth={isAuth} /> */}
        </Route>

        <Route path="/my-reviews">
          <ReviewListAuth isAuth={isAuth} />
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
        <Route path="/">
          <LandingPage isAuth={isAuth} />
        </Route>
      </Switch>
      <FooterTop />
      <Footer />
    </>
  );
}

export default App;
