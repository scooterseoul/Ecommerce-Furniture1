import styles from "./Home.module.css";
import mainHeaderPic from "../images/mainHeaderPic.png";
import Favorites from "./Favorites";
import discountPic from "../images/25dis.png";
import livingRoomPicMob from "../images/LVpexels-vincent-rivaud-2227832 (1).jpg";
import diningRoomPicMob from "../images/DRpexels-rdne-stock-project-6004743.jpg";
import homeOfficePicMob from "../images/HOpexels-mikhail-nilov-6893322.jpg";
import outdoorPicMob from "../images/ODpexels-çağın-kargi-7969010.jpg";
import mailinglist from "../images/mailinglist.png";
import CategorySection from "./CategorySection";
import deskTopHeaderPic from "../images/dTMain.png";
import discountAccessories from "../images/living-room-5979695_1280.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MailingList from "./MailingList";

const Home = () => {
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainHero}>
          <div className={styles.heroCont}>
            <img
              src={mainHeaderPic}
              alt="welcome"
              className={styles.mainHeaderPic}
            />
            <img
              src={deskTopHeaderPic}
              alt="desktop"
              className={styles.deskMainHeaderPic}
            />
          </div>
          <div className={styles.subHeaderCont}>
            <p className={styles.subCopy}>QUALITY &#x2748; CRAFTMANSHIP</p>
            <p className={styles.subCopy2}>
              Bring quality craftmanship into your favorite spaces & create
              spaces worth being in.
            </p>
          </div>
        </div>
        {/* Main rooms */}
        <p className={styles.furnHeader}>FURNITURE</p>
        <div className={styles.mainRoomsContainer}>
          <div className={styles.roomMobCont}>
            <Link to="/products/living" onClick={scrollTop}>
              <img
                src={livingRoomPicMob}
                alt="livingroom"
                className={styles.roomPicMob}
              />
              <p className={styles.mainRoomPicTitle}>LIVING ROOMS</p>
              <p className={styles.mainRoomPicSub}>New living room ideas</p>
              <p className={styles.shopNow}>SHOP LIVING ROOMS</p>
            </Link>
          </div>
          <div className={styles.roomMobCont}>
            <Link to="/products/dining" onClick={scrollTop}>
              <img
                src={diningRoomPicMob}
                alt="diningroom"
                className={styles.roomPicMob}
              />
              <p className={styles.mainRoomPicTitle}>DINING ROOMS</p>
              <p className={styles.mainRoomPicSub}>Warm spaces for dining</p>
              <p className={styles.shopNow}>SHOP DINING ROOMS</p>
            </Link>
          </div>
          {/* Main rooms 2 */}
          <div className={styles.roomMobCont}>
            <Link to="/products/office" onClick={scrollTop}>
              <img
                src={homeOfficePicMob}
                alt="living"
                className={styles.roomPicMob}
              />
              <p className={styles.mainRoomPicTitle}>HOME OFFICE</p>
              <p className={styles.mainRoomPicSub}>Relaxing work spaces</p>
              <p className={styles.shopNow}>SHOP HOME OFFICE</p>
            </Link>
          </div>
          <div className={styles.roomMobCont}>
            <Link to="/products/outdoor" onClick={scrollTop}>
              <img
                src={outdoorPicMob}
                alt="outdoors"
                className={styles.roomPicMob}
              />
              <p className={styles.mainRoomPicTitle}>OUTDOORS</p>
              <p className={styles.mainRoomPicSub}>Outdoor spaces</p>
              <p className={styles.shopNow}>SHOP OUTDOORS</p>
            </Link>
          </div>
        </div>
        <Link to="/discount" onClick={scrollTop}>
          <div className={styles.salesBanner}>
            <div className={styles.salesBannerCopy}>
              <p className={styles.superSale}>Super Sale</p>

              <img
                src={discountPic}
                alt="discount"
                className={styles.discountPic}
              />
              <div className={styles.disAccCont}>
                <img
                  src={discountAccessories}
                  alt="discount"
                  className={styles.discountAccessories}
                />
                <p className={styles.bannerEveryday}>SHOP NOW</p>
              </div>
            </div>
          </div>
        </Link>
        {/* Carousel */}
        <Favorites />
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
        {/* Welcome */}
        <div className={styles.welcomeCont}>
          <div className={styles.overlay}>
            <div className={styles.introCont}>
              <h1 className={styles.welcomeHeader}>le Seau a Boue</h1>
              <p className={styles.intro}>
                Step into a world where artistry meets functionality, where
                every piece tells a story of timeless design and impeccable
                attention to detail. Discover furniture that transforms spaces
                into living works of art, enriching your home with
                sophistication and comfort. <br />
                <br />
                At our furniture store, we offer an exquisite array of styles
                and designs, catering to a wide range of tastes and preferences.
                Whether you're drawn to the elegance of classic pieces, the chic
                modern aesthetics, or the cozy charm of rustic furniture, our
                diverse collection has something to inspire every corner of your
                home. Explore our showroom and let your imagination run wild as
                you envision how our curated selection can bring your interior
                design dreams to life.
              </p>
            </div>
          </div>
        </div>
        {/* Back to top Button */}
        <div className={styles.buttonToTop}>
          <button className={styles.backToTopButton} onClick={scrollToTop}>
            Back to Top
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
