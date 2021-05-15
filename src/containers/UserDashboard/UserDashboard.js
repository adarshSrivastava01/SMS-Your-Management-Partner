import UserHOC from "../../hoc/UserHOC";
import { Switch, Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import Invoice from "../Invoice/Invoice";

const UserDashboard = (props) => {
  return (
    <UserHOC>
      <Switch>
        <Route path="/user" exact render={() => <h1>Home</h1>} />
        <Route path="/user/orders" render={() => <Orders />} />
        <Route path="/user/invoice" render={() => <Invoice />} />
      </Switch>
    </UserHOC>
  );
};

export default UserDashboard;
