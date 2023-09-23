import React, { useRef, useEffect } from "react";
import styles from "./Home.module.css";
import heroPic from "../images/pexels-kindel-media-7578552 (2160p).mp4";
import carouselOutdoorBed from "../images/pexels-maria-salazar-879010-outdoorBed.jpg";
import carouselChairs from "../images/pexels-pixabay-220749-singleChairs.jpg";
import carouselSofa from "../images/pexels-rachel-claire-4846097-greenSofa.jpg";
import carouselDining from "../images/architect-2071534_1280-diningTable.jpg";
import shipDining from "../images/table-5356682_1280.jpg";
import discountPic from "../images/25dis.png";
import livingRoomPicMob from "../images/pexels-vincent-rivaud-2227832-livingRoom.jpg";
import diningRoomPicMob from "../images/pexels-rachel-claire-8113038-DiningMain.jpg";
import bedroomPicMob from "../images/pexels-max-rahubovskiy-6782568-BedroomMain.jpg";
import bathroomPicMob from "../images/pexels-max-rahubovskiy-6032424Bath.jpg";
import mailinglist from "../images/mailinglist.png";
import accessoriesSQ from "../images/pexels-artstory-online-14974588-accessSQ.jpg";
import homeOfficeSQ from "../images/pexels-drew-williams-3143813-homeOfficeSQ.jpg";
import tableSQ from "../images/pexels-franck-denis-5262675-tableSQ.jpg";
import sofaSQ from "../images/pexels-audrey-maidwell-4075680-sofaSQ.jpg";
import lampSQ from "../images/pexels-oleg-karsakóv-11019348-lightsSQ.jpg";
import logo from "../images/icons8-bucket-64.png";

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
        {/* Main rooms */}{" "}
        <div className={styles.livingRoomMobCont}>
          <img
            src={livingRoomPicMob}
            alt="livingroom"
            className={styles.livingRoomPicMob}
          />
          <p className={styles.mainRoomPicTitle}>LIVING ROOMS</p>
          <p className={styles.mainRoomPicSub}>New living room ideas</p>
          <p className={styles.shopNow}>SHOP LIVING ROOMS</p>
        </div>
        <div className={styles.livingRoomMobCont}>
          <img
            src={diningRoomPicMob}
            alt="diningroom"
            className={styles.livingRoomPicMob}
          />
          <p className={styles.mainRoomPicTitle}>DINING ROOMS</p>
          <p className={styles.mainRoomPicSub}>Warm spaces for dining</p>
          <p className={styles.shopNow}>SHOP DINING ROOMS</p>
        </div>
        <div className={styles.salesBanner}>
          <div className={styles.salesBannerCopy}>
            <p className={styles.superSale}>Super Sale</p>
            <img
              src={discountPic}
              alt="discount"
              className={styles.discountPic}
            />
          </div>{" "}
        </div>{" "}
        <p className={styles.bannerEveryday}>SHOP NOW</p>
        {/* Main rooms 2 */}
        <div className={styles.livingRoomMobCont}>
          <img
            src={bedroomPicMob}
            alt="bedroom"
            className={styles.livingRoomPicMob}
          />
          <p className={styles.mainRoomPicTitle}>BEDROOMS</p>
          <p className={styles.mainRoomPicSub}>Relaxing bedroom spaces</p>
          <p className={styles.shopNow}>SHOP BEDROOMS</p>
        </div>
        <div className={styles.livingRoomMobCont}>
          <img
            src={bathroomPicMob}
            alt="diningroom"
            className={styles.livingRoomPicMob}
          />
          <p className={styles.mainRoomPicTitle}>BATHROOMS</p>
          <p className={styles.mainRoomPicSub}>Interesting bathroom spaces</p>
          <p className={styles.shopNow}>SHOP BATHROOMS</p>
        </div>
        {/* Mailing list */}
        <div className={styles.mailinglistCont}>
          <img
            src={mailinglist}
            className={styles.mailinglist}
            alt="mailinglist"
          />
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
        {/* Categories */}
        <div className={styles.categoryCont}>
          <div className={styles.sofaCont}>
            <img src={sofaSQ} className={styles.sqicon1} alt="sofas" />
            <div className={styles.copyCont}>
              <p className={styles.sofaSQCopy}>Stylish sofas</p>
              <p className={styles.viewItem}>SEE ALL SOFAS &#10148;</p>
            </div>
          </div>

          <div className={styles.lampCont}>
            {" "}
            <img src={lampSQ} className={styles.sqicon2} alt="lamps" />
            <div className={styles.copyCont}>
              <p className={styles.lampSQCopy}>New illuminations</p>
              <p className={styles.viewItem}>SEE ALL LIGHTING &#10148;</p>
            </div>
          </div>
          <div className={styles.tableCont}>
            <img src={tableSQ} className={styles.sqicon3} alt="tables" />
            <div className={styles.copyCont}>
              <p className={styles.tableSQCopy}>Dining in style</p>
              <p className={styles.viewItem}>SEE ALL TABLES &#10148;</p>
            </div>
          </div>
          <div className={styles.accessCont}>
            <img
              src={accessoriesSQ}
              className={styles.sqicon4}
              alt="accessories"
            />
            <div className={styles.copyCont}>
              <p className={styles.accessSQCopy}>Accessorize you spaces</p>
              <p className={styles.viewItem}>SEE ALL ACCESSORIES &#10148;</p>
            </div>
          </div>
          <div className={styles.homeOfficeCont}>
            <img
              src={homeOfficeSQ}
              className={styles.sqicon5}
              alt="home office"
            />
            <div className={styles.copyCont}>
              <p className={styles.homeOfficeSQCopy}>Work at home</p>
              <p className={styles.viewItem}>SEE ALL OFFICE ITEMS &#10148;</p>
            </div>
          </div>
        </div>
        {/* Welcome */}
        <div className={styles.welcomeCont}>
          <h1 className={styles.welcomeHeader}>Le Seau a Boue</h1>
          <div className={styles.introCont}>
            <p className={styles.intro}>
              Step into a world where artistry meets functionality, where every
              piece tells a story of timeless design and impeccable attention to
              detail. Discover furniture that transforms spaces into living
              works of art, enriching your home with sophistication and comfort.
            </p>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
        </div>
        {/* <div className={styles.freeShippingCont}>
          <img
            src={shipDining}
            alt="freeShipping"
            className={styles.freeShipPic}
          ></img>
          <p className={styles.freeShip}>
            Get <strong>FREE</strong> shipping on <strong>ALL</strong> dining
            room sets!
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Home;
