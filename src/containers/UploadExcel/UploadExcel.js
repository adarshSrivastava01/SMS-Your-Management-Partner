import styles from "./UploadExcel.module.css";
import { useState, Fragment, useRef } from "react";
import StatusButton from "../../components/StatusButton/StatusButton";
import UploadIcon from "../../assets/Uplaod Icon.svg";

const UploadExcel = (props) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileUploadRef = useRef();

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
        <div className={styles.upload__icon}>
          <img src={UploadIcon} alt={"Upload Icon"} />
        </div>
        <input
          type="file"
          value={uploadedFile}
          ref={fileUploadRef}
          onChange={(e) => setUploadedFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <div
          className={styles.select__file}
          onClick={() => fileUploadRef.current.click()}
        >
          Select The Excel File
        </div>
      </div>
    </Fragment>
  );
};

export default UploadExcel;
