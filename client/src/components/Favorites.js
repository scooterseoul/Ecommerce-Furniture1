import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./StripeContext";
import { useContext } from "react";
import styles from "./Favorites.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Favorites = () => {
  const { productData } = useContext(ProductContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.carouselCont}>
      <h1 className={styles.favHeader}>FAVORITES & SEASONALS</h1>

      {isMobile ? (
        <Slider {...settings}>
          {productData
            .filter(
              (product) =>
                product.metadata && product.metadata.favourite === "favourite"
            )
            .map((product) => (
              <div key={product.id}>
                <div className={styles.carouselItem}>
                  <Link to={"/item/" + product.id} onClick={scrollTop}>
                    <img src={product.images[0]} alt={product.name} />
                  </Link>
                  <p className={styles.caroItemTitle}>{product.name}</p>
                  <button className={styles.caroFavCopy}>
                    TAKE A LOOK &#10148;
                  </button>
                </div>
              </div>
            ))}
        </Slider>
      ) : (
        <div className={styles.carousel}>
          {productData
            .filter(
              (product) =>
                product.metadata && product.metadata.favourite === "favourite"
            )
            .map((product) => (
              <div key={product.id} className={styles.carouselItem}>
                <Link to={"/item/" + product.id} onClick={scrollTop}>
                  <img src={product.images[0]} alt={product.name} />
                </Link>
                <p className={styles.caroItemTitle}>{product.name}</p>
                <button className={styles.caroFavCopy}>
                  TAKE A LOOK &#10148;
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
