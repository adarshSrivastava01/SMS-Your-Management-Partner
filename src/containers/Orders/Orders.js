import styles from "./Orders.module.css";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/AddIcon.svg";
import { Fragment, useState } from "react";
import Input from "../../components/Input/Input";
import OrdersInfo from "../../containers/OrdersInfo/OrdersInfo";

const Orders = (props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Fragment>
      <div className={styles.upper__div}>
        <div className={styles.orders__heading}>Orders</div>
        <div className={styles.orders__buttons}>
          <div className={styles.export__button}>Export</div>
          <Button
            text={"Create New"}
            disabled={false}
            color={"#fff"}
            bgColor={"#08AE54"}
            icon={AddIcon}
          />
        </div>
      </div>
      <div className={styles.search__row}>
        <Input type="text" value={searchValue} setValue={setSearchValue} />
        <Button
          text={"Create New"}
          disabled={false}
          color={"#fff"}
          bgColor={"#08AE54"}
          icon={AddIcon}
        />
        <Button
          text={"Create New"}
          disabled={false}
          color={"#fff"}
          bgColor={"#08AE54"}
          icon={AddIcon}
        />
      </div>
      <OrdersInfo />
    </Fragment>
  );
};

export default Orders;
