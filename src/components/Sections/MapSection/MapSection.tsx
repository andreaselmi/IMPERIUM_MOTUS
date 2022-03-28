import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import Contacts from "../Contacts/Contacts";
import styles from "./MapSection.module.scss";
import mapHeader from "../../../assets/images/sections/mapSection.svg";

const MapSection = () => {
  return (
    <div className={styles.container}>
      <SectionContainer>
        <SectionHeader
          className={`${styles.header} ${styles.text}`}
          imageSrc={mapHeader}
          imageAlt={"Dove Siamo"}
          label={"Vienici a trovare"}
        />

        <Contacts className={styles.contactsContainer} />
      </SectionContainer>
    </div>
  );
};

export default MapSection;
