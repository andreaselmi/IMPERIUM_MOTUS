import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import Contacts from "../Contacts/Contacts";
import styles from "./MapSection.module.scss";
import { ReactComponent as MapHeader } from "../../../assets/images/sections/mapSection.svg";
import { navBarButtons } from "../../../defs/navbarButtons";
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import Map from "../../Map/Map";

const MapSection = () => {
  return (
    <>
      <ScrollAnchor id={navBarButtons.MAP} />
      <div className={styles.container}>
        <SectionContainer style={{ paddingBottom: 0 }}>
          <SectionHeader
            className={`${styles.header} ${styles.text}`}
            SvgComponent={<MapHeader />}
            imageAlt={"Dove Siamo"}
            label={"Vienici a trovare"}
          />

          <Contacts />
        </SectionContainer>

        <div className={styles.mapContainer}>
          <Map />
        </div>
      </div>
    </>
  );
};

export default MapSection;
