import "./App.css";
import UserDashboard from "./containers/UserDashboard/UserDashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/user" render={() => <UserDashboard />} />
      </Switch>
    </div>
  );
}

export default App;
