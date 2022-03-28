import React from "react";
import styles from "./MapSection.module.scss";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";

import map from "../../../assets/images/sections/mapSection.svg";

const MapSection = () => {
  return (
    <div className={styles.container}>
      <SectionContainer>
        <SectionHeader
          className={styles.header}
          imageSrc={map}
          imageAlt={"Dove Siamo"}
          label={"Vienici a trovare"}
        />
      </SectionContainer>
    </div>
  );
};

export default MapSection;
