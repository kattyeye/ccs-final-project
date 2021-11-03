import LoginForm from "../Login/LoginForm";
import logo from "../App/logo/logo.png";
function LandingPage() {
  return (
    <div className="container">
      <section className="horiz-container">
        <div className="half-text">
          <h1>Don't be a hater.</h1>
          <h4>
            86 Hate is a movement to share resources and connect people to
            non-profits in Greenville.
          </h4>
          <button className="btn">Learn More</button>
        </div>
        <div className="header-login-form">
          <LoginForm />
        </div>
      </section>

      <section className="horiz-container">
        <div className="half-text">
          <h3>What does 86 Hate mean?</h3>
          <p>
            Eighty-six or 86 is American English slang used to indicate that an
            item is no longer available, traditionally from a food or drinks
            establishment; or referring to a person or people who are not
            welcome in the premises. Hate is no longer available here.
          </p>
        </div>
        <div className="img-container">
          <img src={logo}></img>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
