import styles from "./Product.module.css";
import StatusButton from "../StatusButton/StatusButton";

const Product = (props) => {
  return (
    <tr className={styles.Product}>
      <td>{props.data.SIN}</td>
      <td>{props.data.createdAt}</td>
      <td>{props.data.products}</td>
      <td>{props.data.price}</td>
      <td>{props.data.totalProducts}</td>
      <td>
        {props.data.status !== "completed" ? (
          <StatusButton borderColor="red" color="red" text={"Failed"} />
        ) : (
          <StatusButton borderColor="green" color="green" text={"Completed"} />
        )}
      </td>
    </tr>
  );
};

export default Product;
