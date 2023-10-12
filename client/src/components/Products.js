import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./Products.module.css";

// import deskTopHeaderPic from "../images/dTMain.png";

const Products = () => {
  const { products } = useParams();
  console.log("XXX : " + products);

  return (
    <section className={styles.productsCont}>
      <div className={styles.productsHero}>
        <div className={styles.heroCont}>
          {/* <img src={deskTopHeaderPic} alt="welcome" className={styles.hero} /> */}
          <p className={styles.heroTitle}>{products.toUpperCase()}</p>
        </div>
      </div>
      <div className={styles.productsCont}>
        <h1>{products.toUpperCase()} Content</h1>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Products;
