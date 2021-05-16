import "./App.css";
import UserDashboard from "./containers/UserDashboard/UserDashboard";
import Auth from "./Auth/Auth";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <h1>Landing Page</h1>} />
        <Route
          path="/auth/login"
          render={() => (
            <Auth
              isSignup={false}
              message={"Not the data management you need, but the one you want."}
              btn={"Signup"}
              text={"Login"}
            />
          )}
        />
        <Route
          path="/auth/signup"
          render={() => (
            <Auth
              isSignup={true}
              message={"Oh so you are ready to forget the Excel headache."}
              btn={"Login"}
              text={"Signup"}
            />
          )}
        />
        <Route path="/user" render={() => <UserDashboard />} />
      </Switch>
    </div>
  );
}

export default App;
