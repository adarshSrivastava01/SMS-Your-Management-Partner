import styles from "./OptionsButton.module.css";

const OptionsButton = (props) => {
  return (
    <button className={styles.OptionsButton+" "+`${props.active ? styles.active : null}`}>
      {props.text}&nbsp;&nbsp;<p>{props.number}</p>
    </button>
  );
};

export default OptionsButton;
