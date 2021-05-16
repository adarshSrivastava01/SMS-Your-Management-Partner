import styles from "./Invoice.module.css";
import { useState, Fragment } from "react";
import StatusButton from "../../components/StatusButton/StatusButton";
import NormalInput from "../../components/NormaIInput/NormalInput";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/AddIcon.svg";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import {useHistory} from "react-router-dom";
const Invoice = (props) => {
  const history = useHistory();
  const [SIN, setSIN] = useState("");
  const [created, setCreated] = useState("");
  const [status, setStatus] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [totalProducts, setTotalProducts] = useState("");
  const takeTo = ()=>{
    history.push("/user/orders")
  }
  return (
    <Fragment>
      <div className={styles.upper__div}>
        <div className={styles.invoice__heading}>Invoice</div>
        <StatusButton click={takeTo} color="red" text="Cancel" />
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
      {/* <div className={styles.SIN__field}>
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
            <input type="checkbox" />
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
      </div> */}
      <div className={styles.SIN__field}>
        <div>Status</div>
        <style global jsx>
          {`
            .rdn {
              background-color: green;
              width: 15rem;
            }
            .rdn-control {
              max-height: 2.6rem;
            }
          `}
        </style>
        <Dropdown
          placeholder="Select Status"
          options={["One", "Two", "Three"]}
          value={status}
          onChange={(value) => setStatus(value)}
          onSelect={(value) => console.log("Hovered")}
          onClose={(closedBySelection) => console.log("Closed by Selection")}
          onOpen={() => console.log("Opened")}
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
      <Button
        text="Save Invoice"
        disabled={false}
        color={"#fff"}
        bgColor={"#08AE54"}
      />
    </Fragment>
  );
};

export default Invoice;
