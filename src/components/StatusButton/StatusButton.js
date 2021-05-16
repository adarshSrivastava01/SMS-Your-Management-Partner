import styles from "./StatusButton.module.css";

const StatusButton = (props) => {
  return (
    <div
    onClick={props.click}
      className={styles.StatusButton}
      style={{
        borderColor: `${
          props.color === "red"
            ? "rgba(255, 16, 1, 0.7)"
            : "rgba(7, 152, 73, 0.7)"
        }`,
        color: `${
          props.color === "red"
            ? "rgba(255, 16, 1, 0.7)"
            : "rgba(7, 152, 73, 0.7)"
        }`,
      }}
    >
      {props.text}
    </div>
  );
};

export default StatusButton;
