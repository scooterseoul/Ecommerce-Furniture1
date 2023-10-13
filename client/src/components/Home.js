import styles from "./Home.module.css";
import mainHeaderPic from "../images/mainHeaderPic.png";
import Favorites from "./Favorites";
import discountPic from "../images/25dis.png";
import livingRoomPicMob from "../images/pexels-vincent-rivaud-2227832-livingRoom.jpg";
import diningRoomPicMob from "../images/pexels-rachel-claire-8113038-DiningMain.jpg";
import bedroomPicMob from "../images/pexels-max-rahubovskiy-6782568-BedroomMain.jpg";
import bathroomPicMob from "../images/pexels-max-rahubovskiy-6032424Bath.jpg";
import mailinglist from "../images/mailinglist.png";
import CategorySection from "./CategorySection";
import deskTopHeaderPic from "../images/dTMain.png";
import discountAccessories from "../images/living-room-5979695_1280.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainHero}>
          {" "}
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
        </div>
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
              />{" "}
              <p className={styles.bannerEveryday}>SHOP NOW</p>
            </div>
          </div>{" "}
        </div>{" "}
        {/* Carousel */}
        <Favorites />
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
        {/* Welcome */}
        <div className={styles.welcomeCont}>
          <div className={styles.overlay}>
            <h1 className={styles.welcomeHeader}>le Seau a Boue</h1>
            <div className={styles.introCont}>
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
      </div>
    </>
  );
};

export default Home;
