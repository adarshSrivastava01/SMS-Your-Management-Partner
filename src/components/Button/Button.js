import styles from "./Button.module.css";
import AddIcon from "../../assets/AddIcon.svg";
const Button = (props) => {

  let obj = {};
  if (props.color) {
    obj["color"] = props.color;
  }
  if (props.bgColor) {
    obj["backgroundColor"] = props.bgColor;
  }
  if (props.border) {
    obj["border"] = props.border;
  }
  return (
    <button
      onClick={props.click}
      disabled={props.disabled}
      style={obj}
      className={styles.Button}
    >
      {props.icon && (
        <div class={styles.additional__icon}>
          <img src={AddIcon} alt={"Add Icon"} />
        </div>
      )}
      <div>{props.text}</div>
    </button>
  );
};

export default Button;
