import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import github from "../images/icons8-github-48.png";
import linkedin from "../images/icons8-linkedin-50.png";
import contact from "../images/icons8-contact-100.png";
import emailIcon from "../images/icons8-email-50.png";
import wwwIcon from "../images/white-www-50.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.getInTouch}>
        <img src={contact} alt="contact" className={styles.contactIcon}></img>
        <p className={styles.getText}>Get</p>
        <p className={styles.inText}> in</p>
        <p className={styles.touchText}> touch</p>
      </div>
      <div className={styles.infoCont}>
        <div className={styles.meetTeam}>Meet the team!</div>
        {/* Alex */}
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
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={styles.linkedPic}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Alex */}
        <div className={styles.alex}>
          <p className={styles.name}>Claudette A.</p>
          <div className={styles.contactCont}>
            <div className={styles.portfolioLink}>
              <a
                href="https://precious-speculoos-176c96.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={wwwIcon} className={styles.wwwIcon} alt="portfolio" />
              </a>
            </div>
            <div className={styles.gitIcon}>
              <a
                href="https://github.com/scooterseoul"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} className={styles.gitPic} alt="github" />
              </a>
            </div>
            <div className={styles.linkdInIcon}>
              {" "}
              <a
                href="https://www.linkedin.com/in/claudette-alexander"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={styles.linkedPic}
                />
              </a>
            </div>
            <div className={styles.email}>
              <img
                src={emailIcon}
                alt="mail"
                className={styles.emailPic}
                onClick={() =>
                  (window.location = "mailto: scooterseoul@gmail.com")
                }
              />
            </div>
          </div>
        </div>
        {/* Shanthi*/}
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
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={styles.linkedPic}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
