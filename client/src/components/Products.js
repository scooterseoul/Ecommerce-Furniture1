import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";

// import deskTopHeaderPic from "../images/dTMain.png";

const Products = () => {
  const [pageName, setPageName] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Extract the last part of the URL (in this case, "living")
    const urlParts = location.pathname.split("/");
    const pageNameFromUrl = urlParts[urlParts.length - 1];

    setPageName(pageNameFromUrl);
    // alert("XXX : " + pageNameFromUrl);
  }, [location]);

  let title = "";
  // alert(id);
  switch (pageName) {
    case "bedroom":
      title = "BEDROOM";
      break;
    case "dinning":
      title = "DINNING ROOM";
      break;
    case "bathroom": {
      title = "BATH ROOM";
      break;
    }
    case "living": {
      title = "LIVING ROOM";
      break;
    }
    default:
      title = "Your Shopping Cart";
      break;
  }
  return (
    <section className={styles.productsCont}>
      <div className={styles.productsHero}>
        <div className={styles.heroCont}>
          {/* <img src={deskTopHeaderPic} alt="welcome" className={styles.hero} /> */}
          <p className={styles.heroTitle}>{title}</p>
        </div>
      </div>
      <div className={styles.productsCont}>
        <h1>{title} Content</h1>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Products;
