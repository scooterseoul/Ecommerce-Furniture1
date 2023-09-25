import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import github from "../images/icons8-github-48.png";
import linkedin from "../images/icons8-linkedin-50.png";
import contact from "../images/icons8-contact-100.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.getInTouch}>
        <img src={contact} alt="contact" className={styles.contactIcon}></img>
        <p className={styles.getText}>Get</p>
        <p className={styles.inText}> in</p>
        <p className={styles.touchText}> touch</p>
      </div>
      <div className={styles.meetTeam}>Meet the team...</div>

      <div className={styles.guy}>
        <p className={styles.name}>Guy K.</p>
        <div className={styles.contactCont}>
          <div className={styles.gitIcon}>
            <Link to="/">
              <img src={github} alt="github" className={styles.gitPic} />
            </Link>
          </div>
          <div className={styles.linkdInIcon}>
            {" "}
            <Link to="/">
              <img src={linkedin} alt="linkedin" className={styles.linkedPic} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.alex}>
        <p className={styles.name}>Claudette A.</p>
        <div className={styles.contactCont}>
          <div className={styles.gitIcon}>
            <Link to="/">
              <img src={github} alt="github" className={styles.gitPic} />
            </Link>
          </div>
          <div className={styles.linkdInIcon}>
            {" "}
            <Link to="/">
              <img src={linkedin} alt="linkedin" className={styles.linkedPic} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.shan}>
        <p className={styles.name}>Shanthi K.</p>
        <div className={styles.contactCont}>
          <div className={styles.gitIcon}>
            <Link to="/">
              <img src={github} alt="github" className={styles.gitPic} />
            </Link>
          </div>
          <div className={styles.linkdInIcon}>
            {" "}
            <Link to="/">
              <img src={linkedin} alt="linkedin" className={styles.linkedPic} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
