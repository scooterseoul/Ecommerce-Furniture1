import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

// import deskTopHeaderPic from "../images/dTMain.png";

const Products = () => {
  return (
    <section className={styles.productsCont}>
      <div className={styles.productsHero}>
        <div className={styles.heroCont}>
          {/* <img src={deskTopHeaderPic} alt="welcome" className={styles.hero} /> */}
          <p className={styles.heroTitle}>CART PAGE</p>
        </div>
      </div>
      <div className={styles.productsCont}>
        <h1>CART PAGE Content</h1>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Products;
