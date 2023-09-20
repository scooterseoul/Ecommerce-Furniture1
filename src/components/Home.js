import React, { useRef, useEffect } from "react";
import styles from "./Home.module.css";
import heroPic from "../images/pexels-kindel-media-7578552 (2160p).mp4";
// import heroImg from "../images/mainHeroMobile1.jpg";
import kitRoomIcon from "../images/mainKitchen.png";
import livingRoomIcon from "../images/mainLiving.png";
import bathIcon from "../images/mainBath.png";
import bedIcon from "../images/mainBed.png";
import carouselOutdoorBed from "../images/pexels-maria-salazar-879010-outdoorBed.jpg";
import carouselChairs from "../images/pexels-pixabay-220749-singleChairs.jpg";
import carouselSofa from "../images/pexels-rachel-claire-4846097-greenSofa.jpg";
import carouselDining from "../images/architect-2071534_1280-diningTable.jpg";
import shipDining from "../images/table-5356682_1280.jpg";

const Home = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.style.opacity = 0;
  };

  useEffect(() => {
    // Check if the video element is valid
    const videoElement = videoRef.current;

    if (videoElement) {
      // Set the playback rate to speed up the video (e.g., 2x speed)
      videoElement.playbackRate = 2.5; // Adjust this value as needed
    }
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroCont}>
          <video
            className={styles.heroPic}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            ref={videoRef}
          >
            <source src={heroPic} />
          </video>
        </div>
        <div className={styles.subHeaderCont}>
          <p className={styles.subHeaderCopy}> Beautiful Spaces</p>
          <p className={styles.subCopy}>
            Bring quality craftmanship into your favorite spaces to create
            spaces worth being in.
          </p>
        </div>
        <div className={styles.productsHeader}>
          <h2>PRODUCTS</h2>
        </div>
        <h3 className={styles.shopByRoom}>Shop by room</h3>
        <div className={styles.roomCont}>
          <img src={kitRoomIcon} alt="kitchen" className={styles.kitLink} />
          <h3 className={styles.kitchenTitle}>KITCHEN</h3>
          <img
            src={livingRoomIcon}
            alt="livingroom"
            className={styles.livingLink}
          />
          <h3 className={styles.livingTitle}>LIVING ROOM</h3>
          <img src={bedIcon} alt="bedroom" className={styles.bedLink} />
          <h3 className={styles.bedroomTitle}>BEDROOM</h3>

          <img src={bathIcon} alt="bathroom" className={styles.bathLink} />
          <h3 className={styles.bathroomTitle}>BATHROOM</h3>
        </div>
        <div className={styles.salesBanner}>
          <p className={styles.superSale}>Super Sale</p>
          <p className={styles.bannerExtra}>EXTRA</p>
          <p className={styles.discount}>25% OFF</p>
          <p className={styles.bannerEveryday}>on Everyday items!</p>
        </div>
        {/* Carousel */}
        <h1 className={styles.favHeader}>FAVORITES</h1>
        <div className={styles.carouselCont}>
          <div className={styles.carousel}>
            <div className={styles.carouselInner}>
              <div className={styles.carouselItem}>
                <img src={carouselChairs} alt="rocking chair" />
                <p className={styles.caroItemTitle}>Gorgeous Rocking Chairs</p>
                <p className={styles.caroFavCopy}>
                  Beautifully made retro pair of rockers
                </p>
                <p className={styles.favFreeShipping}>Free Shipping</p>
              </div>
              <div className={styles.carouselItem}>
                <img src={carouselOutdoorBed} alt="outdoor bed" />
                <p className={styles.caroItemTitle}>Wicker Outdoor Swing Bed</p>
                <p className={styles.caroFavCopy}>
                  Enjoy the cool summer nights on this fun swing bed
                </p>
                <p className={styles.favFreeShipping}>Free Shipping</p>
              </div>
              <div className={styles.carouselItem}>
                <img src={carouselSofa} alt="green sofa" />
                <p className={styles.caroItemTitle}>Plush Hunter Green Sofa</p>
                <p className={styles.caroFavCopy}>
                  Jazz up any space with this super comfy sofa
                </p>
                <p className={styles.favFreeShipping}>Free Shipping</p>
              </div>
              <div className={styles.carouselItem}>
                <img src={carouselDining} alt="dining table" />
                <p className={styles.caroItemTitle}>
                  Sleek Minimalist Dining Set
                </p>
                <p className={styles.caroFavCopy}>
                  Well crafted dining set. Perfect for small spaces
                </p>
                <p className={styles.favFreeShipping}>Free Shipping</p>
              </div>
              <div className={styles.carouselItem}>
                <img src={shipDining} alt="table" />
                <p className={styles.caroItemTitle}>
                  Beautiful Outdoor Dining Table
                </p>
                <p className={styles.caroFavCopy}>
                  Spend evenings outdoors with the sleek dining set
                </p>
                <p className={styles.favFreeShipping}>Free Shipping</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.favoritesCont}>
          <p className={styles.seasonalPicks}>SEASONAL PICKS!</p>
          <img
            src={outdoorChairPic}
            alt="chair"
            className={styles.outdoorChairPic}
          ></img>
          <p className={styles.outdoorChairCopy}>
            Cosy up with friends on a hot summer night and chat the evening away
            with these super outdoor chairs.
          </p>
          <img
            src={outdoorBed}
            alt="bed"
            className={styles.outdoorBedPic}
          ></img>
          <p className={styles.outdoorBedCopy}>
            Get ready for summer with this awesome outdoor swinging bed!
          </p>
        </div> */}
        <div className={styles.welcomeCont}>
          <h1 className={styles.welcomeHeader}>Le Seau a Boue</h1>
          <p className={styles.intro}>
            Step into a world where artistry meets functionality, where every
            piece tells a story of timeless design and impeccable attention to
            detail. Discover furniture that transforms spaces into living works
            of art, enriching your home with sophistication and comfort. Step
            into a world where artistry meets functionality, where every piece
            tells a story of timeless design and impeccable attention to detail.
          </p>
        </div>
        <div className={styles.freeShippingCont}>
          <img
            src={shipDining}
            alt="freeShipping"
            className={styles.freeShipPic}
          ></img>
          <p className={styles.freeShip}>
            Get <strong>FREE</strong> shipping on <strong>ALL</strong> dining
            room sets!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
