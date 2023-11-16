import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cancel.module.css";

const Cancel = () => {
  return (
    <div className={styles.cancelCont}>
      <Link to="/" className={styles.backToShopping}>
        <h1>&#8592;</h1> Back to Shopping
      </Link>
    </div>
  );
};

export default Cancel;
