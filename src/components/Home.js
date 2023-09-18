import React, { useRef, useEffect } from "react";
import styles from "./Home.module.css";
import heroPic from "../images/pexels-kindel-media-7578552 (2160p).mp4";
import heroImg from "../images/mainHeroMobile1.jpg";
import kitRoomIcon from "../images/mainKitchen.png";
import livingRoomIcon from "../images/mainLiving.png";
import bathIcon from "../images/mainBath.png";
import bedIcon from "../images/mainBed.png";
import outdoorBed from "../images/pexels-maria-salazar-879010-outdoorBed.jpg";

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
        <div className={styles.salesBanner}>
          <p className={styles.superSale}>Super Sale</p>
          <p className={styles.bannerExtra}>EXTRA</p>
          <p className={styles.discount}>25% OFF</p>
          <p className={styles.bannerEveryday}>on Everyday items!</p>
        </div>
        <div className={styles.discoverCont}>
          <p className={styles.discoverCopy}>SHOP FEATURED CATEGORIES</p>
          <p className={styles.findOut}>FIND OUT MORE &#8640;</p>
        </div>
        {/* <div className={styles.salesBanner}>
          <p className={styles.superSale}>Super Sale</p>
          <p className={styles.bannerExtra}>EXTRA</p>
          <p className={styles.discount}>25% OFF</p>
          <p className={styles.bannerEveryday}>on Everyday items!</p>
        </div> */}
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
        <div className={styles.welcomeCont}>
          <h1 className={styles.welcomeHeader}>WELCOME</h1>
          <p className={styles.intro}>
            Step into a world where artistry meets functionality, where every
            piece tells a story of timeless design and impeccable attention to
            detail. Discover furniture that transforms spaces into living works
            of art, enriching your home with sophistication and comfort. Step
            into a world where artistry meets functionality, where every piece
            tells a story of timeless design and impeccable attention to detail.
          </p>
        </div>
        <div className={styles.favoritesCont}>
          <p className={styles.seasonalPicks}>SEASONAL PICKS!</p>
          <img
            src={outdoorBed}
            alt="bed"
            className={styles.outdoorBedPic}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
