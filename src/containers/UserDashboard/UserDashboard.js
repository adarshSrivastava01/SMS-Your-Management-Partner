import UserHOC from "../../hoc/UserHOC";
import { Switch, Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import Invoice from "../Invoice/Invoice";
import Template from "../Template/Template";
import UploadMethods from "../UplaodMethods/UploadMethods";
import UploadExcel from "../UploadExcel/UploadExcel";


const UserDashboard = (props) => {
  return (
    <UserHOC>
      <Switch>
        <Route path="/user" exact render={() => <h1>Home</h1>} />
        <Route path="/user/orders" render={() => <Orders />} />
        <Route path="/user/invoice" render={() => <Invoice />} />
        <Route path="/user/template" exact render={() => <Template />} />
        <Route path="/user/upload/methods" render={() => <UploadMethods />} />
        <Route path="/user/uploadexcel" render={() => <UploadExcel />} />
      </Switch>
    </UserHOC>
  );
};

export default UserDashboard;
