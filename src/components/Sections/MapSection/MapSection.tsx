import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import Contacts from "../Contacts/Contacts";
import styles from "./MapSection.module.scss";
import mapHeader from "../../../assets/images/sections/mapSection.svg";
import { navBarButtons } from "../../../defs/navbarButtons";

const MapSection = () => {
  return (
    <>
      <span id={navBarButtons.MAP} />
      <div className={styles.container}>
        <SectionContainer style={{ paddingBottom: 0 }}>
          <SectionHeader
            className={`${styles.header} ${styles.text}`}
            imageSrc={mapHeader}
            imageAlt={"Dove Siamo"}
            label={"Vienici a trovare"}
          />

          <Contacts />
        </SectionContainer>

        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.7105615336886!2d18.17906381628472!3d40.326580779375824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13442f72df4eea97%3A0xdc63e72b808839d5!2sVia%20dei%20Bersaglieri%2C%2024%2C%2073020%20Castromediano%20LE!5e0!3m2!1sit!2sit!4v1648493116191!5m2!1sit!2sit"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default MapSection;
