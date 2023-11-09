import React from "react";
import styles from "./CategorySection.module.css";
import accessoriesSQ from "../images/CAT-ACCpexels-maria-henri-718760.jpg";
import homeOfficeSQ from "../images/pexels-drew-williams-3143813-homeOfficeSQ.jpg";
import tableSQ from "../images/pexels-franck-denis-5262675-tableSQ.jpg";
import sofaSQ from "../images/CAT-SOFApexels-marko-stojkovic-17264276.jpg";
import { Link } from "react-router-dom";

export const CategorySection = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.categoryCont}>
      <Link to="/sofas" onClick={scrollTop}>
        <div className={styles.sofaCont}>
          <img src={sofaSQ} className={styles.sqicon1} alt="sofas" />
          <div className={styles.copyCont}>
            <p className={styles.sofaSQCopy}>Stylish sofas</p>
            <p className={styles.viewItem}>SEE ALL SOFAS &#10148;</p>
          </div>
        </div>
      </Link>
      <Link to="/tables" onClick={scrollTop}>
        <div className={styles.tableCont}>
          <img src={tableSQ} className={styles.sqicon3} alt="tables" />
          <div className={styles.copyCont}>
            <p className={styles.tableSQCopy}>Dining in style</p>
            <p className={styles.viewItem}>SEE ALL TABLES &#10148;</p>
          </div>
        </div>
      </Link>
      <Link to="/accessories" onClick={scrollTop}>
        <div className={styles.accessCont}>
          <img
            src={accessoriesSQ}
            className={styles.sqicon4}
            alt="accessories"
          />
          <div className={styles.copyCont}>
            <p className={styles.accessSQCopy}>Accessorize you spaces</p>
            <p className={styles.viewItem}>SEE ALL ACCESSORIES &#10148;</p>
          </div>
        </div>
      </Link>
      <Link to="/office" onClick={scrollTop}>
        <div className={styles.homeOfficeCont}>
          <img
            src={homeOfficeSQ}
            className={styles.sqicon5}
            alt="home office"
          />
          <div className={styles.copyCont}>
            <p className={styles.homeOfficeSQCopy}>Work at home</p>
            <p className={styles.viewItem}>SEE ALL OFFICE ITEMS &#10148;</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CategorySection;
