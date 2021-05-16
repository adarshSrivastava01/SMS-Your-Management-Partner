import styles from "./Auth.module.css";
import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import AuthIcon from "../assets/data.svg";
import NormalInput from "../components/NormaIInput/NormalInput";

const Auth = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const authChangeHandler = (e) => {
    e.preventDefault();
    if (props.isSignup) history.push("/");
    else history.push("/signup");
  };

  const authSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className={styles.auth__header}>
        <p>{props.message}</p>
        {props.isSignup ? (
          <Button
            text={props.btn}
            color={"#08AE54"}
            bgColor={"#ffffff"}
            click={authChangeHandler}
          />
        ) : (
          <Button
            text={props.btn}
            color={"#08AE54"}
            bgColor={"#ffffff"}
            click={authChangeHandler}
          />
        )}
      </div>
      <div className={styles.auth__body}>
        <div className={styles.auth__heading}>
          <div className={styles.auth__icon}>
            <img src={AuthIcon} alt={"Auth Icon"} />
          </div>
          <div>{props.text}</div>
        </div>
        <form onSubmit={authSubmitHandler} className={styles.auth__form}>
          <NormalInput
            type="text"
            value={email}
            setValue={setEmail}
            placeholder={"@emailaddress"}
            width={"100%"}
          />
          <NormalInput
            type="password"
            value={password}
            setValue={setPassword}
            placeholder={"@password"}
            width={"100%"}
          />
          {props.isSignup && (
            <NormalInput
              type="password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder={"@confirmpassword"}
              width={"100%"}
            />
          )}
          <div className={styles.button__div}>
            <Button
              text={props.isSignup ? "Sign up" : "Login"}
              color={"#ffffff"}
              bgColor={"rgba(8, 174, 84, 0.7)"}
              click={authChangeHandler}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Auth;
