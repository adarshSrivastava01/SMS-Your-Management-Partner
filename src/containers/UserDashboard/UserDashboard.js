import UserHOC from "../../hoc/UserHOC";
import { Switch, Route } from "react-router-dom";
import Orders from "../Orders/Orders";

const UserDashboard = (props) => {
  return (
    <UserHOC>
      <Switch>
        <Route path="/user" exact render={() => <h1>Home</h1>} />
        <Route path="/user/orders" render={() => <Orders />} />
      </Switch>
    </UserHOC>
  );
};

export default UserDashboard;
