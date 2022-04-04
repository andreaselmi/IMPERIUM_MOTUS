import React from "react";
import styles from "./Contacts.module.scss";
import { ReactComponent as LocationIcon } from "../../../assets/icons/contacs/location.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/contacs/phone.svg";
import { ReactComponent as EmailIcon } from "../../../assets/icons/contacs/email.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/contacs/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/contacs/instagram.svg";

import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";

const Contacts = () => {
  return (
    <>
      <div className={`${styles.contactField} ${styles.addressContainer}`}>
        <LocationIcon className={styles.contactIcon} />
        <div className={styles.locationTextContainer}>
          <Typography
            className={`${styles.text} ${styles.locationStreetText}`}
            variant={textVariant.paragraph}
            label={"Via Dei Bersaglieri, 24"}
          />
          <Typography
            style={{ marginTop: 5 }}
            className={styles.text}
            variant={textVariant.paragraph}
            label={"Castromediano"}
          />
          <Typography
            style={{ marginTop: 5 }}
            className={styles.text}
            variant={textVariant.paragraph}
            label={"Lecce"}
          />
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.phoneContainer}`}>
        <PhoneIcon className={styles.contactIcon} />

        <div className={styles.locationTextContainer}>
          <Typography
            className={`${styles.text}`}
            variant={textVariant.paragraph}
            label={"+39 366 3752677"}
          />
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.emailContainer}`}>
        <EmailIcon className={styles.contactIcon} />

        <div className={styles.locationTextContainer}>
          <Typography
            className={`${styles.text}`}
            variant={textVariant.paragraph}
            label={"info@imperium-motus.it"}
          />
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.facebookContainer}`}>
        <FacebookIcon className={styles.contactIcon} />

        <div className={styles.locationTextContainer}>
          <a>
            <Typography
              className={`${styles.text}`}
              variant={textVariant.paragraph}
              label={"Facebook"}
            />
          </a>
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.instagramContainer}`}>
        <InstagramIcon className={styles.contactIcon} />
        <div className={styles.locationTextContainer}>
          <a>
            <Typography
              className={`${styles.text}`}
              variant={textVariant.paragraph}
              label={"Instagram"}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
