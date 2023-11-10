import { React, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./StripeContext";
import { useContext } from "react";
import styles from "./CategorySofas.module.css";
import discountHero from "../images/CAT-HERO-SOFApexels-max-rahubovskiy-6492402 (1).jpg";
import mailinglist from "../images/mailinglist.png";
import CategorySection from "./CategorySection";
import MailingList from "./MailingList";

const CategorySofas = () => {
  const { productData } = useContext(ProductContext);
  const [showMailingList, setShowMailingList] = useState(false);
  const openPopup = () => {
    setShowMailingList(true);
  };

  const closePopup = () => {
    setShowMailingList(false);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const scrollToTop = (behavior) => {
    window.scrollTo({
      top: 0,
      behavior: behavior,
    });
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.discountHero}>
        <div className={styles.heroCont}>
          <img
            src={discountHero}
            alt="discounts"
            className={styles.discountHeroPic}
          />
        </div>
        <div className={styles.subHeaderCont}>
          <p className={styles.subCopy}>STYLISH SOFAS</p>
          <p className={styles.subCopy2}>
            Check out some of our fabulous sofas!
          </p>
        </div>
        <div className={styles.productListCont}>
          <ul className={styles.productGrid}>
            {/* List of Products */}
            {productData
              .filter(
                (product) =>
                  product.metadata && product.metadata.type === "sofa"
              )
              .map((product) => (
                <li key={product.id} className={styles.listItem}>
                  <Link to={"/item/" + product.id} onClick={scrollTop}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className={styles.listImages}
                    />
                  </Link>
                  <p className={styles.itemTitle}>{product.name}</p>
                  <p className={styles.listItemPrice}>
                    ${Number(product.price / 100).toFixed(2)}
                  </p>
                </li>
              ))}
          </ul>
        </div>
        {/* Back to top Button */}
        <div className={styles.buttonToTop}>
          <button
            className={styles.backToTopButton}
            onClick={() => scrollToTop("smooth")}
          >
            Back to Top
          </button>
        </div>
        {/* Mailing list */}
        {showMailingList && <MailingList closePopup={closePopup} />}
        <div className={styles.mailinglistCont} onClick={openPopup}>
          <img
            src={mailinglist}
            className={styles.mailinglist}
            alt="mailinglist"
          />
        </div>
        {/* Categories */}
        <CategorySection />
      </div>
    </div>
  );
};

export default CategorySofas;
