import styles from "./Invoice.module.css";
import { useState, Fragment } from "react";
import StatusButton from "../../components/StatusButton/StatusButton";
import NormalInput from "../../components/NormaIInput/NormalInput";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/AddIcon.svg";

const Invoice = (props) => {
  const [SIN, setSIN] = useState("");
  const [created, setCreated] = useState("");
  const [status, setStatus] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [totalProducts, setTotalProducts] = useState("");

  return (
    <Fragment>
      <div className={styles.upper__div}>
        <div className={styles.invoice__heading}>Invoice</div>
        <StatusButton color="red" text="Cancel" />
      </div>
      <div className={styles.middle__div}>
        You can add some information related to this order here. In case you
        have alzheimer and still love to edit. Make sure you give max-width to
        this field. 300 chars.
      </div>
      <div className={styles.data__div}>Enter Data</div>
      <div className={styles.SIN__field}>
        <div>Enter SIN</div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
        />
      </div>
      <div className={styles.SIN__field}>
        <div>Created At</div>
        <NormalInput
          value={created}
          setValue={setCreated}
          placeholder="Here will go the information entered by the user."
          width="20%"
        />
      </div>
      <div className={styles.SIN__field}>
        <div className={styles.products__row}>
          <div className={styles.products__upper}>
            <div className={styles.products__heading}>Products</div>
            <div className={styles.products__buttons}>
              <StatusButton color="red" text="Delete" />
              <Button
                text="Add New"
                disabled={false}
                color={"#fff"}
                bgColor={"#08AE54"}
                icon={AddIcon}
              />
            </div>
          </div>
          <div className={styles.fields}>
            <NormalInput
              value={created}
              setValue={setCreated}
              placeholder="Here will go the"
              width="15%"
            />
            <NormalInput
              value={created}
              setValue={setCreated}
              placeholder="Here will go the"
              width="20%"
            />
            <NormalInput
              value={created}
              setValue={setCreated}
              placeholder="Here will go the"
              width="10%"
            />
            <NormalInput
              value={created}
              setValue={setCreated}
              placeholder="Here will go the"
              width="10%"
            />
          </div>
        </div>
      </div>
      <div className={styles.SIN__field}>
        <div>Status</div>
        <NormalInput
          value={status}
          setValue={setStatus}
          placeholder="Here will go the information entered by the user."
          width="15%"
        />
      </div>
      <div className={styles.cons__field}>
        <div className={styles.cons__heading}>Constants</div>
        <div>
          <NormalInput
            value={totalPrice}
            setValue={setTotalPrice}
            placeholder="Here will go the information entered by the user."
            width="20%"
          />
          <NormalInput
            value={totalProducts}
            setValue={setTotalProducts}
            placeholder="Here will go the information entered by the user."
            width="20%"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Invoice;
