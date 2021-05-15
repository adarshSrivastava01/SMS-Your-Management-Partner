import styles from "./Input.module.css";
import Search from "../../assets/Search.svg";

const Input = (props) => {
  return (
    <fieldset className={styles.fs}>
      {props.label && (
        <label htmlFor={props.htmlFor} id={props.id}>
          {props.label}
        </label>
      )}
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
      ></input>
      <img src={Search} alt={"Search Icon"} />
      <p>Smart Find</p>
    </fieldset>
  );
};

export default Input;
