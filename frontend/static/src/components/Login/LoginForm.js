import { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
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
      setUser((prevState) => ({
        ...prevState,
        isAuth: true,
      }));
      props.history.push("/dashboard");
    }
  }

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <h4 className="d-flex justify-content-center mb-3">Welcome back!</h4>
      <div className="form-group d-flex-col">
        {/* <label htmlFor="username">username</label> */}
        <input
          type="text"
          className="form-control mb-2"
          id="username"
          placeholder="enter username."
          onChange={handleInput}
          required
          name="username"
          value={user.username}
        />

        {/* <label htmlFor="password">password</label> */}
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="enter password."
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
