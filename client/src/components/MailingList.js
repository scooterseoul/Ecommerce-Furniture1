import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./MailingList.module.css";

const MailingList = ({ closePopup }) => {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          //   alert("Thank you for subscribing!");
          setSubmitted(true);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className={styles.popupCont}>
      {submitted ? null : (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup}>
              X
            </span>
            <h2 className={styles.join}>Join today!</h2>
            <form onSubmit={sendEmail} className={styles.form}>
              <input
                type="text"
                className={styles.input}
                placeholder="Name"
                name="name"
                required
              />

              <br />

              <input
                type="email"
                className={styles.input}
                placeholder="Email"
                name="email"
                required
              />

              <br />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailingList;
