import styles from "./Template.module.css";
import { Fragment, useState } from "react";
import StatusButton from "../../components/StatusButton/StatusButton";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/AddIcon.svg";
import NormalInput from "../../components/NormaIInput/NormalInput";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import RelationFirst from "../../assets/RelationShip 1.svg";
import RelationSecond from "../../assets/RelationShip 2.svg";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const Template = (props) => {
  const [SIN, setSIN] = useState("");
  const [tags, setTags] = useState([]);
  return (
    <Fragment>
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
      <div className={styles.upper__div}>
        <div className={styles.invoice__heading}>Template Name</div>
        <StatusButton color="red" text="Cancel" />
      </div>
      <div className={styles.middle__div}>
        You can add some information related to this order here. In case you
        have alzheimer and still love to edit. Make sure you give max-width to
        this field. 300 chars.
      </div>
      <div className={styles.data__div}>
        <div>Enter Fields</div>
        <Button
          text="Add New"
          disabled={false}
          color={"#fff"}
          bgColor={"#08AE54"}
          icon={AddIcon}
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <Dropdown
          placeholder="Select Status"
          options={["One", "Two", "Three"]}
          value={SIN}
          onChange={(value) => setSIN(value)}
          onSelect={(value) => console.log("Hovered")}
          onClose={(closedBySelection) => console.log("Closed by Selection")}
          onOpen={() => console.log("Opened")}
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
          style={{ marginBottom: "2rem" }}
        />
        <style global jsx>
          {`
            .react-tag-input {
              padding: 0.3rem 1rem;
              width: 45%;
              height: auto;
              max-height: 1.3rem;
              border: 1px solid #111;
              outline: none;
              font-size: 1rem;
              margin-bottom: 1rem;
            }
            .react-tag-input__input {
              height: 70%;
            }
            .react-tag-input__tag {
              background: #f8e8bf;
              font-size: 0.7rem;
              margin: 0 5px;
              display: flex;
              align-items: center;
            }
            .react-tag-input__tag__remove {
              background: #fcd062;
            }
            .react-tag-input__tag__remove:before,
            .react-tag-input__tag__remove:after {
              background: #fff;
            }
          `}
        </style>
        <div className={styles.int__heading}>Enter all the tags</div>
        <ReactTagInput
          id="addTags"
          tags={tags}
          onChange={(newTags) => setTags(newTags)}
          maxTags={5}
          removeOnBackspace={true}
          placeholder={"Press Enter Tags Here"}
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
          style={{ marginBottom: "2rem" }}
        />
        <div className={styles.int__heading}>Enter all the tags</div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
          style={{ marginBottom: "2rem" }}
        />
        <div className={styles.int__heading}>Connection Type</div>
        <div className={styles.relation__icon}>
          <div>
            <img src={RelationFirst} alt={"Relation Icon"} />
          </div>
          <div>
            <img src={RelationSecond} alt={"Relation Icon 2"} />
          </div>
        </div>
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
        />
      </div>
      <div className={styles.SIN__field}>
        <div>
          <div>Enter SIN</div>
          <StatusButton color="red" text="Cancel" />
        </div>
        <NormalInput
          value={SIN}
          setValue={setSIN}
          placeholder="Here will go the information entered by the user."
          width="35%"
          style={{ marginBottom: "2rem" }}
        />
        <div className={styles.int__heading}>Enter all the tags</div>
        <ReactTagInput
          id="addTags"
          tags={tags}
          onChange={(newTags) => setTags(newTags)}
          maxTags={5}
          removeOnBackspace={true}
          placeholder={"Press Enter Tags Here"}
        />
      </div>
    </Fragment>
  );
};

export default Template;
