import { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
function LoginForm(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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

  async function handleSubmit(event) {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(user),
    };

    const response = await fetch("/rest-auth/login/", options).catch(
      handleError
    );
    if (!response) {
      console.log(response);
    } else {
      const data = await response.json();
      Cookies.set("Authorization", `Token${data.key}`);
      props.setUser((prevState) => ({
        ...prevState,
        isAuth: true,
      }));
      setTimeout(() => props.history.push("/dashboard"), 1000);
    }
  }

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <h4 className="d-flex justify-content-center mb-3">Let’s Do This!</h4>
      <div className="form-group d-flex-col">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control mb-2"
          id="username"
          onChange={handleInput}
          required
          name="username"
          value={user.username}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleInput}
          required
          name="password"
          value={user.password}
        />
      </div>
      <div className="form-buttons">
        <button type="submit" className="btn mt-3 login">
          Login
        </button>
        <p>
          Don't have an account yet?
          <button
            type="button"
            className="mt-3 register-here-button"
            onClick={() => {
              props.history.push("/registration");
            }}
          >
            Register here.
          </button>
        </p>
      </div>
    </form>
  );
}
export default withRouter(LoginForm);
