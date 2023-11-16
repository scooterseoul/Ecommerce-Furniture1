import React from "react";
import { Link } from "react-router-dom";
import styles from "./Success.module.css";
const Success = () => {
  return (
    <div className={styles.successCont}>
      <Link to="/" className={styles.backToShopping}>
        <h1>&#127881;</h1>
        Success!
        <p> &#8592; Back to Shopping</p>
      </Link>
    </div>
  );
};

export default Success;
