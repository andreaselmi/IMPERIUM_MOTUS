import React from "react";
import styles from "./Contacts.module.scss";
import locationIcon from "../../../assets/icons/contacs/location.svg";
import phoneIcon from "../../../assets/icons/contacs/phone.svg";
import emailIcon from "../../../assets/icons/contacs/email.svg";
import facebookIcon from "../../../assets/icons/contacs/facebook.svg";
import instagramIcon from "../../../assets/icons/contacs/instagram.svg";

import Typography from "../../Typography/Typography";

const Contacts = () => {
  return (
    <>
      <div className={`${styles.contactField} ${styles.addressContainer}`}>
        <img
          className={styles.contactIcon}
          src={locationIcon}
          alt={"Location icon"}
        />
        <div className={styles.locationTextContainer}>
          <Typography
            className={`${styles.text} ${styles.locationStreetText}`}
            variant={"paragraph"}
            label={"Via Dei Bersaglieri, 24"}
          />
          <Typography
            style={{ marginTop: 5 }}
            className={styles.text}
            variant={"paragraph"}
            label={"Castromediano"}
          />
          <Typography
            style={{ marginTop: 5 }}
            className={styles.text}
            variant={"paragraph"}
            label={"Lecce"}
          />
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.phoneContainer}`}>
        <img
          className={styles.contactIcon}
          src={phoneIcon}
          alt={"Phone Icon"}
        />
        <div className={styles.locationTextContainer}>
          <Typography
            className={`${styles.text}`}
            variant={"paragraph"}
            label={"+39 366 3752677"}
          />
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.emailContainer}`}>
        <img
          className={styles.contactIcon}
          src={emailIcon}
          alt={"Email icon"}
        />
        <div className={styles.locationTextContainer}>
          <Typography
            className={`${styles.text}`}
            variant={"paragraph"}
            label={"info@imperium-motus.it"}
          />
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.facebookContainer}`}>
        <img
          className={styles.contactIcon}
          src={facebookIcon}
          alt={"Facebook icon"}
        />
        <div className={styles.locationTextContainer}>
          <a>
            <Typography
              className={`${styles.text}`}
              variant={"paragraph"}
              label={"Facebook"}
            />
          </a>
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.instagramContainer}`}>
        <img
          className={styles.contactIcon}
          src={instagramIcon}
          alt={"Instagram icon"}
        />
        <div className={styles.locationTextContainer}>
          <a>
            <Typography
              className={`${styles.text}`}
              variant={"paragraph"}
              label={"Instagram"}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
