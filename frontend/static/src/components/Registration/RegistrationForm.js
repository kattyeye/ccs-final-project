import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect, useHistory, withRouter } from "react-router";
import { Card, Typography } from "@mui/material";
import logo from "../App/pics/logo.png";
function RegistrationForm(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  let history = useHistory;
  const [error, setError] = useState(null);

  function handleInput(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleError(err) {
    console.warn(err);
  }

  //   const handleSubmit = (event) => {};
  async function handleSubmit(event) {
    event.preventDefault();
    if (user.password1 !== user.password2) {
      setError("Passwords do not match!");
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        body: JSON.stringify(user),
      };

      const response = await fetch("/rest-auth/registration/", options).catch(
        handleError
      );
      if (!response) {
        console.log(response);
      } else {
        const data = await response.json();
        Cookies.set("Authorization", `Token${data.key}`);
        props.history.push("/dashboard");
      }
    }
  }
  return (
    <div className="registrationbg">
      <div>
        <Card className="w-100 registrationform">
          <img src={logo} style={{ width: "100px" }} />
          <form
            className="mt-3"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="form-group text-left">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={handleInput}
                required
                name="username"
                value={user.username}
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="Email">Email</label>

              <input
                type="text"
                className="form-control"
                id="email"
                onChange={handleInput}
                required
                name="email"
                value={user.email}
              />
            </div>
            <div className="form-group text-left ">
              <label htmlFor="Password">Password</label>

              <input
                type="password"
                className="form-control"
                id="password1"
                onChange={handleInput}
                required
                name="password1"
                value={user.password1}
              />
            </div>
            <div className="form-group text-left ">
              <label htmlFor="Confirm Password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                onChange={handleInput}
                required
                name="password2"
                value={user.password2}
              />
              {error && <span className="text-danger">{error}</span>}
            </div>
            <button type="submit" className="btn mt-3">
              Register
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
export default withRouter(RegistrationForm);
