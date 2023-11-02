import { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
import styles from "./Products.module.css";
import { ProductContext } from "./StripeContext";
import livingRoomHero from "../imagesProduct/PROD-LIVING-ROOM-HERO-pexels-terry-magallanes-12639296.jpg";
import mailinglist from "../images/mailinglist.png";
import CategorySection from "./CategorySection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Products = () => {
  // const { products } = useParams();
  // const [qty, setQty] = useState(1);
  const {
    productData,
    cart,
    setCart,
    incrementQty,
    // incrementQty,
    decrementQty,
    addToCart,
  } = useContext(ProductContext);
  // console.log("CCCRRT : " + JSON.stringify(cart));

  const handleAddTocart = async (product) => {
    await addToCart(product);
    await incrementProductQty(product);
    // setQty(quantity);
  };

  const incrementProductQty = async (product) => {
    // await addToCart(product);
    await incrementQty(product);
    // setQty(quantity);
  };

  // const decrementProductQty = async (product) => {
  //   await addToCart(product);
  //   await incrementProductQty(product);
  //   // setQty(quantity);
  // };

  // incrementQty(product)
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
            // console.log("KKK : " + JSON.stringify(product));
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
