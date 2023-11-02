import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Products.module.css";
import { ProductContext } from "./StripeContext";
import livingRoomHero from "../imagesProduct/PROD-LIVING-ROOM-HERO-pexels-terry-magallanes-12639296.jpg";
import mailinglist from "../images/mailinglist.png";
import CategorySection from "./CategorySection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Products = () => {
  const { products } = useParams();
  const { productData } = useContext(ProductContext);

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
            // console.log("KKK : " + JSON.stringify(product));
            return (
              <li key={product.id}>
                <div className={styles.listItem}>
                  <Link
                    to={"/item/" + product.id}
                    onClick={() => scrollToTop("instant")}
                  >
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

                  {/* <div className={styles.productFooter}>
                    <div className={styles.footerLeft}>
                      {product.qty > 0 && (
                        <>
                          <FontAwesomeIcon
                            size="xl"
                            className="fontawesomeIcons"
                            icon={faMinusSquare}
                            onClick={() =>
                              product.qty > 0 && decrementQty(product)
                            }
                          />
                          <p className={styles.productQty}>{product.qty}</p>
                          <FontAwesomeIcon
                            size="xl"
                            className="fontawesomeIcons"
                            icon={faPlusSquare}
                            onClick={() => incrementProductQty(product)}
                          />
                        </>
                      )}
                    </div>
                    <div className={styles.footerRight}>
                      <button
                        className={`${styles.addToCart} btn`}
                        onClick={() => {
                          handleAddTocart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div> */}
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
