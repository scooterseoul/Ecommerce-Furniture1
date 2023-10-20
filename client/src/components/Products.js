import React from "react";
import styles from "./Products.module.css";
import { useContext } from "react";
import { ProductContext } from "./StripeContext";

import livingRoomHero from "../imagesProduct/PROD-LIVING-ROOM-HERO-pexels-terry-magallanes-12639296.jpg";
import blackSofa from "../imagesProduct/sofa-pexels-max-rahubovskiy-7018400.jpeg";
import coffeeTable1 from "../imagesProduct/coffee-table-pexels-mikhail-nilov-6707628.jpeg";
import graySofa from "../imagesProduct/Gray-Sofa-2569325_1280.jpg";
import greenSofa from "../imagesProduct/Green-Sofa-pexels-rachel-claire-4846097.jpg";
import wickerChair from "../imagesProduct/Wicker-chair-cosy-2648851_1280.jpg";
import orangeSofa from "../imagesProduct/Orange-sofa-4864021_1280.jpg";
import sofaChair from "../imagesProduct/sofa-chair-1078931_1280.jpg";
import tvCabinet from "../imagesProduct/tv-cabinet-6185022_1280.jpg";
import mailinglist from "../images/mailinglist.png";
import CategorySection from "./CategorySection";

const Products = () => {
  const { productData, setProductData } = useContext(ProductContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.mainCont}>
      <div className={styles.productHero}>
        {" "}
        <div className={styles.heroCont}>
          <img
            src={livingRoomHero}
            alt="living room"
            className={styles.livingRoomHeroPic}
          />
        </div>
        <div className={styles.subHeaderCont}>
          <p className={styles.subCopy}>LIVING ROOM SPACES</p>
          <p className={styles.subCopy2}>
            Spruce up your favorite spaces to be in!
          </p>
        </div>
      </div>

      <div className={styles.productListCont}>
        <ul className={styles.productGrid}>
          {/* List of Products */}
          {productData.map((product) => {
            return (
              <li key={product.id}>
                <div className={styles.listItem}>
                  <img
                    src={product.images}
                    alt={product.name}
                    className={styles.listImages}
                  />
                  <p className={styles.itemTitle}>{product.name}</p>
                  <p className={styles.listItemCopy}>{product.description}</p>
                  <p className={styles.listItemPrice}>
                    $
                    {Number(product.price.unit_amount_decimal / 100).toFixed(2)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Back to top Button */}
      <div className={styles.buttonToTop}>
        <button className={styles.backToTopButton} onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
      {/* Mailing list */}
      <div className={styles.mailinglistCont}>
        <img
          src={mailinglist}
          className={styles.mailinglist}
          alt="mailinglist"
        />
      </div>
      {/* Categories */}
      <CategorySection />
    </div>
  );
};

export default Products;
