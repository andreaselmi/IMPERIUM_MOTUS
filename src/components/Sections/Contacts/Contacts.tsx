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
          <a
            href={"https://goo.gl/maps/g81WA3pPd42nMjSWA"}
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              className={`${styles.text} ${styles.locationStreetText}`}
              variant={textVariant.paragraph}
            >
              Via Dei Bersaglieri, 22
            </Typography>
            <Typography
              style={{ marginTop: 5 }}
              className={styles.text}
              variant={textVariant.paragraph}
            >
              Castromediano
            </Typography>
            <Typography
              style={{ marginTop: 5 }}
              className={styles.text}
              variant={textVariant.paragraph}
            >
              Lecce
            </Typography>
          </a>
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.phoneContainer}`}>
        <PhoneIcon className={styles.contactIcon} />

        <div className={styles.locationTextContainer}>
          <Typography
            className={`${styles.text}`}
            variant={textVariant.paragraph}
          >
            +39 366 3752677
          </Typography>
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.emailContainer}`}>
        <EmailIcon className={styles.contactIcon} />

        <div className={styles.locationTextContainer}>
          <a
            href={"mailto:info@imperium-motus.it"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Typography
              className={`${styles.text}`}
              variant={textVariant.paragraph}
            >
              info@imperium-motus.it
            </Typography>
          </a>
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.facebookContainer}`}>
        <FacebookIcon className={styles.contactIcon} />

        <div className={styles.locationTextContainer}>
          <a
            href={"https://www.facebook.com/imperium.motus"}
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              className={`${styles.text}`}
              variant={textVariant.paragraph}
            >
              Facebook
            </Typography>
          </a>
        </div>
      </div>

      <div className={`${styles.contactField} ${styles.instagramContainer}`}>
        <InstagramIcon className={styles.contactIcon} />
        <div className={styles.locationTextContainer}>
          <a
            href={"https://www.instagram.com/imperium.motus/"}
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              className={`${styles.text}`}
              variant={textVariant.paragraph}
            >
              Instagram
            </Typography>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
