import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./MailingList.module.css";

const MailingList = ({ closePopup }) => {
  const [state, handleSubmit] = useForm("mvojngwj");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className={styles.popupCont}>
      {submitted || state.succeeded ? (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup}>
              X
            </span>
            <h2 className={styles.join}>Thanks for joining!</h2>
          </div>
        </div>
      ) : (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup}>
              X
            </span>
            <h2 className={styles.join}>Join today!</h2>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <label htmlFor="email" className={styles.label1} />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className={styles.input1}
              />
              <label htmlFor="name" className={styles.label2} />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name"
                className={styles.input2}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* Add more form fields if needed */}

              <button
                type="submit"
                className={styles.button}
                disabled={state.submitting}
              >
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
