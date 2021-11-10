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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <ContributionsPageTitle user={user} isAuth={isAuth} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="mt-5 mb-5 contribandreviewcontainer"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="My Contributions" {...a11yProps(0)} />
              <Tab label="My Reviews" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div style={{ display: "inline-block" }}>
                <ContributionList isAuth={isAuth} user={user} />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div style={{ display: "inline-block" }}>
                <UserReviews isAuth={isAuth} />
              </div>
            </TabPanel>
          </div>
        </Route>
        <Route path="/organizations-with-reviews">
          <OrgPageTitle />
          <OrganizationList />

          <ReviewList />

          {isAuth && <UserReviews isAuth={isAuth} />}

          {/* {isAuth && (
            <>
              <ReviewList />
              <UserReviews />
            </>
          )} */}
          {/* <ReviewForm isAuth={isAuth} /> */}
          {/* <UserReviewForm isAuth={isAuth} /> */}
        </Route>
        {/*
        <Route path="/my-reviews">
          <ReviewListAuth isAuth={isAuth} />
        </Route> */}
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
