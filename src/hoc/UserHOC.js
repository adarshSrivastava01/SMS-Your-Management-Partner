import styles from "./UserHOC.module.css";
import HomeIcon from "../assets/Home.svg";
import OrdersIcon from "../assets/Nav2.svg";
import BoxIcon from "../assets/BoxIcon.svg";
import { NavLink } from "react-router-dom";

const UserHOC = (props) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left__nav}>
        <div className={styles.icons}>
          <NavLink to="/user">
            <img src={HomeIcon} alt="Home Icon" />
          </NavLink>
          <NavLink to="/user/orders">
            <img src={OrdersIcon} alt="Orders Icon" />
          </NavLink>
          <NavLink to="/user/invoice">
            <img src={BoxIcon} alt="Boxs Icon" />
          </NavLink>
        </div>
      </div>
      <div className={styles.right__side}>{props.children}</div>
    </div>
  );
};

export default UserHOC;
