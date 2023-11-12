import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "./StripeContext";
import styles from "./SingleItem.module.css";
import CategorySection from "./CategorySection";
import mailinglist from "../images/mailinglist.png";
import MailingList from "./MailingList";

const SingleItem = () => {
  const { productData, cart, setCart } = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [showMailingList, setShowMailingList] = useState(false);

  const product = productData.find((product) => product.id === id);

  const addedToCart = cart.some((item) => item.id === id);

  console.log("addedToCart: " + addedToCart);
  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddTocart = async (product) => {
    if (!addedToCart) {
      setCart([...cart, { ...product, qty: 1 }]);
    } else {
      navigate("/cart");
    }
  };

  return (
    <div>
      <div className={styles.productGrid}>
        <div className={styles.listItem}>
          <img
            src={product.images}
            alt={product.name}
            className={styles.listImages}
          />
          <div className={styles.namePriceCont}>
            <p className={styles.itemTitle}>{product.name}</p>
            <div className={styles.priceCont}>
              <p className={styles.listItemPrice}>
                ${Number(product.price / 100).toFixed(2)}
              </p>
              <p className={styles.readyToShip}>In stock and ready to ship</p>
            </div>

            {/* Add to Cart button */}
            <div className={`${styles.cartBtnsCont} cartButtonsCont`}>
              <button href="#back" className="btn" onClick={() => navigate(-1)}>
                CONTINUE SHOPPING
              </button>

              <button
                className="btn"
                onClick={() => {
                  handleAddTocart(product);
                }}
              >
                {!addedToCart ? "ADD TO CART" : "GO TO CART"}
              </button>
            </div>
          </div>
          <p className={styles.listItemCopy}>
            {product.name} - {product.description}
          </p>
          {/* Features from Stripe */}
          <div className={styles.itemSubInfoCont}>
            <p className={styles.listItemSubHeader}>Features</p>
            <ul className={styles.listItemCopy}>
              {product.features.length > 0 ? (
                product.features.map((feature, index) => (
                  <li key={index}>{feature.name}</li>
                ))
              ) : (
                <li>{product.name}</li>
              )}
            </ul>
            <p className={styles.listItemSubHeader}>Care</p>
            <p className={styles.listItemCopy}>
              We recommend using a professional service for repairs and
              cleaning.
            </p>
            <p className={styles.listItemSubHeader}>Shipping</p>
            <p className={styles.listItemCopy}>
              In-stock furniture delivered via our preferred shipping service
              and should arrive within 10–14 business days after order
              processing.
              <br />
              <br />
              International Shipping - Get in touch with us directly for rates.
            </p>
          </div>
        </div>
      </div>
      {/* Mailing list */}
      {showMailingList && (
        <MailingList closePopup={() => setShowMailingList(false)} />
      )}
      {/* <br /> */}
      <div
        className={styles.mailinglistCont}
        onClick={() => setShowMailingList(true)}
      >
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

export default SingleItem;
