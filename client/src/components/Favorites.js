import React from "react";
import styles from "./Favorites.module.css";
import carouselOutdoorBed from "../imagesFavorites/pexels-maria-salazar-879010-outdoorBed.jpg";
import carouselChairs from "../imagesFavorites/pexels-pixabay-220749-singleChairs.jpg";
import carouselSofa from "../imagesFavorites/pexels-rachel-claire-4846097-greenSofa.jpg";
import carouselDining from "../imagesFavorites/architect-2071534_1280-diningTable.jpg";
import carouselCushions from "../imagesFavorites/pillows-4326131_1280.jpg";
import carouselDeskChair from "../imagesFavorites/desk-chair-pexels-lisa-fotios-1957478.jpeg";

const Favorites = () => {
  return (
    <div className={styles.carouselCont}>
      <h1 className={styles.favHeader}>FAVORITES & SEASONALS</h1>
      <div className={styles.carousel}>
        <div className={styles.carouselInner}>
          <div className={styles.carouselItem}>
            <img
              src={carouselChairs}
              alt="rocking chair"
              className={styles.favImages}
            />
            <p className={styles.caroItemTitle}>Gorgeous Rocking Chairs</p>
            <button className={styles.caroFavCopy}>TAKE A LOOK &#10148;</button>
            <p className={styles.favFreeShipping}>Free Shipping</p>
          </div>
          <div className={styles.carouselItem}>
            <img
              src={carouselOutdoorBed}
              alt="outdoor bed"
              className={styles.favImages}
            />
            <p className={styles.caroItemTitle}>Wicker Outdoor Swing</p>
            <button className={styles.caroFavCopy}>TAKE A LOOK &#10148;</button>
            <p className={styles.favFreeShipping}>Free Shipping</p>
          </div>
          <div className={styles.carouselItem}>
            <img
              src={carouselSofa}
              alt="green sofa"
              className={styles.favImages}
            />
            <p className={styles.caroItemTitle}>Plush Hunter Green Sofa</p>
            <button className={styles.caroFavCopy}>TAKE A LOOK &#10148;</button>
            <p className={styles.favFreeShipping}>Free Shipping</p>
          </div>
          <div className={styles.carouselItem}>
            <img
              src={carouselDining}
              alt="dining table"
              className={styles.favImages}
            />
            <p className={styles.caroItemTitle}>Sleek Minimalist Dining Set</p>
            <button className={styles.caroFavCopy}>TAKE A LOOK &#10148;</button>
            <p className={styles.favFreeShipping}>Free Shipping</p>
          </div>{" "}
          <div className={styles.carouselItem}>
            <img
              src={carouselCushions}
              alt="cushions"
              className={styles.favImages}
            />
            <p className={styles.caroItemTitle}>Cushions and accents</p>
            <button className={styles.caroFavCopy}>TAKE A LOOK &#10148;</button>
            <p className={styles.favFreeShipping}>Free Shipping</p>
          </div>{" "}
          <div className={styles.carouselItem}>
            <img
              src={carouselDeskChair}
              alt="desk chair"
              className={styles.favImages}
            />
            <p className={styles.caroItemTitle}>Ergo Desk Chair</p>
            <button className={styles.caroFavCopy}>TAKE A LOOK &#10148;</button>
            <p className={styles.favFreeShipping}>Free Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
