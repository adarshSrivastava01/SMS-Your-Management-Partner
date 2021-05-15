import styles from "./NormalInput.module.css";

const NormalInput = (props) => {
  return (
    <input
      className={styles.normalInput}
      type="type"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      placeholder={props.placeholder}
      style={{width: `${props.width}`}}
    />
  );
};

export default NormalInput;
