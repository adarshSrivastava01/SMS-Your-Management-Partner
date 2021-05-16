import { Link } from "react-router-dom";
import styles from "./Links.module.css";

const Links = (props) => {
  return (
    <Link
      className={styles.links}
      to={props.to}
      style={{
        color: `${props.color === "black" ? "black" : "#fff"}`,
        backgroundColor: `${
          props.color === "black" ? "#fff" : "rgba(8, 174, 84, 0.7)"
        }`,
        borderColor: `${props.color === "black" ? "#000" : "rgba(8, 174, 84, 0.7)"}`
      }}
    >
      {props.text}
    </Link>
  );
};

export default Links;
