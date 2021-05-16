import styles from "./Orders.module.css";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/AddIcon.svg";
import { Fragment, useState } from "react";
import Input from "../../components/Input/Input";
import OrdersInfo from "../../containers/OrdersInfo/OrdersInfo";
import AddTemplate from "../../components/AddTemplate/AddTemplate";
import DropDown from "../../assets/dropdown.svg"
const Orders = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    console.log("Button Clicked", visible);
    // if(visible === false)
    //   setVisible(true);
    // else
    //   setVisible(false);
    setVisible(!visible)
    console.log("later", visible);
  };

  return (
    <Fragment>
      <div className={styles.upper__div}>
        <div className={styles.orders__heading}>Orders</div>
        <div className={styles.orders__buttons}>
        <Button
            text={"Export"}
            disabled={false}
            color={"#000"}
            bgColor={"#fff"}
            icon={DropDown}
          />
          <Button
            text={"Create New"}
            disabled={false}
            color={"#fff"}
            bgColor={"#08AE54"}
            icon={AddIcon}
            click={visibleHandler}
          />
        </div>
      </div>
      <div className={styles.search__row}>
        <Input type="text" value={searchValue} setValue={setSearchValue} />
        {/* <Button
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
        /> */}
      </div>
      {visible && <AddTemplate show={visible} click={visibleHandler} />}
      <OrdersInfo />
    </Fragment>
  );
};

export default Orders;
