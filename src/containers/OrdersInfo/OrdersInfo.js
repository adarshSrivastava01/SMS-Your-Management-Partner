import styles from "./OrdersInfo.module.css";
import { Fragment, useState } from "react";
import OptionsButton from "../../components/OptionsButton/OptionsButton";
import Product from "../../components/Product/Product";

const data = {
  SIN: 1290283,
  createdAt: "29th Jan. 2020",
  products: "Screw Drivers, Hardwares, Scews 21 gauges, 90 carrot Diamonds",
  price: 245,
  totalProducts: 4,
  status: "completed",
};

const OrdersInfo = (props) => {
  const [selected, setSelected] = useState("All");
  return (
    <Fragment>
      <div className={styles.options}>
        <OptionsButton text={"All"} number={69} />
        <OptionsButton text={"Invoices"} number={214} />
        <OptionsButton text={"Outvoice"} number={619} />
      </div>
      <div className={styles.count__results}>
        Showing 32 results of 241 results
      </div>
      <table>
        <thead>
          <th>SIN</th>
          <th>Created At</th>
          <th>Products</th>
          <th>Price</th>
          <th>Total Products</th>
          <th>Status</th>
        </thead>
        <tbody>
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
          <Product data={data} />
        </tbody>
      </table>
    </Fragment>
  );
};

export default OrdersInfo;
