import styles from "./AddTemplate.module.css";
import Links from "../Links/Links";

const AddTemplate = (props) => {
  return props.show ? (
    <div className={styles.backdrop} onClick={props.click}>
      <div className={styles.modal}>
        <div className={styles.heading}>Choose Template</div>
        <div className={styles.links}>
          <div className={styles.link__container}>
            <Links to="/user/invoice" text="Invoice" color="black" />
            <Links to="/user/outvoice" text="Outvoice" color="black" />
            <Links to="/user/products" text="Products" color="black" />
            <Links to="/user/template" text="New Template" color="green" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddTemplate;
