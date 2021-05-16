import styles from "./FourOFour.module.css";
import { Fragment } from "react";
import ErrorImage from "../../assets/404.svg";
import Button from "../Button/Button";
import AddIcon from "../../assets/AddIcon.svg";
import { useHistory } from "react-router-dom";

const FourOFour = (props) => {
  const history = useHistory();
  const redirectToLogin = () => {
    history.push("/");
  };
  const redirectToSignup = () => {
    history.push("/signup");
  };
  return (
    <Fragment>
      <div className={styles.auth__header}>
        <p>
          Ah! you came here to save thousands of work hour. Actually that’s
          happening below. Run fast.
        </p>
      </div>
      <div className={styles.auth__body}>
        <img src={ErrorImage} alt={"404 Page Style Icon"} />
        <div className={styles.four__buttons}>
          <Button
            text={"Login"}
            disabled={false}
            color={"#fff"}
            bgColor={"#08AE54"}
            icon={AddIcon}
            click={redirectToLogin}
          />
          <Button
            text={"Signup"}
            disabled={false}
            color={"#fff"}
            bgColor={"#08AE54"}
            icon={AddIcon}
            click={redirectToSignup}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FourOFour;
