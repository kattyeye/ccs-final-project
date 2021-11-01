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
      props.setUser((prevState) => ({
        ...prevState,
        isAuth: true,
      }));
      props.history.push("/my-contributions");
    }
  }

  return (
    <form className="mt-3 col-6 container" onSubmit={handleSubmit}>
      <div className="form-group text-left mb-3">
        {/* <label htmlFor="username">username</label> */}
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="enter username."
          onChange={handleInput}
          required
          name="username"
          value={user.username}
        />
      </div>

      <div className="form-group text-left mb-3">
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

      <button type="submit" className="btn btn-primary mt-3">
        Login
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 register-here-button"
        onClick={() => {
          props.history.push("/registration");
        }}
      >
        Click to register.
      </button>
    </form>
  );
}
export default withRouter(LoginForm);
