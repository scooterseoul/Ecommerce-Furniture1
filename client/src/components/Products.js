import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Products.module.css";
import { ProductContext } from "./StripeContext";
import livingRoomHero from "../images/LIVpexels-rdne-stock-project-8580720.jpg";
import mailinglist from "../images/mailinglist.png";
import CategorySection from "./CategorySection";
import MailingList from "./MailingList";

const Products = () => {
  const { products } = useParams();
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
          <p className={styles.subCopy2}>Spruce up your favorite spaces!</p>
        </div>
      </div>

      <div className={styles.productListCont}>
        <ul className={styles.productGrid}>
          {/* List of Products */}
          {productData.map((product) => {
            return (
              <li key={product.id}>
                <div className={styles.listItem}>
                  <Link to={"/item/" + product.id} onClick={scrollTop}>
                    <img
                      src={product.images}
                      alt={product.name}
                      className={styles.listImages}
                    />
                  </Link>
                  <p className={styles.itemTitle}>{product.name}</p>
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
  );
};

export default Products;
