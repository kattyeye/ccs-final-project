import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegistrationForm from "../Registration/RegistrationForm";

function App() {
  return (
    <>
      <Switch>
        <Route path="/registration">
          <RegistrationForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
