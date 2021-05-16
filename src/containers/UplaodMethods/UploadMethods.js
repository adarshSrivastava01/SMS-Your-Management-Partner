import styles from "./UploadMethods.module.css";
import StatusButton from "../../components/StatusButton/StatusButton";
import Button from "../../components/Button/Button";
import { Fragment } from "react";
import AddIcon from "../../assets/Nav2.svg";
import { useHistory } from "react-router-dom";

const UploadMethods = (props) => {
  const history = useHistory();
  const redirectToManualUpload = () => {
    history.push("/user/template");
  };
  const redirectToExcelUpload = () => {
    history.push("/user/uploadexcel");
  };
  return (
    <Fragment>
      <div className={styles.upper__div}>
        <div className={styles.invoice__heading}>Template Name</div>
        <StatusButton color="red" text="Cancel" />
      </div>
      <div className={styles.middle__div}>
        You can add some information related to this order here. In case you
        have alzheimer and still love to edit. Make sure you give max-width to
        this field. 300 chars.
      </div>
      <div className={styles.method__body}>
        <Button
          text="Do it yourself"
          disabled={false}
          color={"#fff"}
          bgColor={"#08AE54"}
          icon={AddIcon}
          click={redirectToManualUpload}
        />
        <Button
          text="Upload Excel"
          disabled={false}
          color={"#fff"}
          bgColor={"#08AE54"}
          icon={AddIcon}
          click={redirectToExcelUpload}
        />
      </div>
    </Fragment>
  );
};

export default UploadMethods;
