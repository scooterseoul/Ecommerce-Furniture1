import React from "react";
import styles from "./CategorySection.module.css";
import accessoriesSQ from "../images/pexels-artstory-online-14974588-accessSQ.jpg";
import homeOfficeSQ from "../images/pexels-drew-williams-3143813-homeOfficeSQ.jpg";
import tableSQ from "../images/pexels-franck-denis-5262675-tableSQ.jpg";
import sofaSQ from "../images/pexels-audrey-maidwell-4075680-sofaSQ.jpg";
import lampSQ from "../images/pexels-oleg-karsakóv-11019348-lightsSQ.jpg";

export const CategorySection = () => {
  return (
    <div className={styles.categoryCont}>
      <div className={styles.sofaCont}>
        <img src={sofaSQ} className={styles.sqicon1} alt="sofas" />
        <div className={styles.copyCont}>
          <p className={styles.sofaSQCopy}>Stylish sofas</p>
          <p className={styles.viewItem}>SEE SOFAS &#10148;</p>
        </div>
      </div>

      <div className={styles.lampCont}>
        {" "}
        <img src={lampSQ} className={styles.sqicon2} alt="lamps" />
        <div className={styles.copyCont}>
          <p className={styles.lampSQCopy}>New illuminations</p>
          <p className={styles.viewItem}>SEE LIGHTING &#10148;</p>
        </div>
      </div>
      <div className={styles.tableCont}>
        <img src={tableSQ} className={styles.sqicon3} alt="tables" />
        <div className={styles.copyCont}>
          <p className={styles.tableSQCopy}>Dining in style</p>
          <p className={styles.viewItem}>SEE TABLES &#10148;</p>
        </div>
      </div>
      <div className={styles.accessCont}>
        <img src={accessoriesSQ} className={styles.sqicon4} alt="accessories" />
        <div className={styles.copyCont}>
          <p className={styles.accessSQCopy}>Accessories</p>
          <p className={styles.viewItem}>SEE ITEMS &#10148;</p>
        </div>
      </div>
      <div className={styles.homeOfficeCont}>
        <img src={homeOfficeSQ} className={styles.sqicon5} alt="home office" />
        <div className={styles.copyCont}>
          <p className={styles.homeOfficeSQCopy}>Work at home</p>
          <p className={styles.viewItem}>SEE OFFICE &#10148;</p>
        </div>
      </div>
    </div>
  );
};
export default CategorySection;
