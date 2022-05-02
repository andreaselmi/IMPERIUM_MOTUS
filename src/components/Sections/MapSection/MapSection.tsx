import React, { useEffect, useRef } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import Contacts from "../Contacts/Contacts";
import styles from "./MapSection.module.scss";
import { ReactComponent as MapHeader } from "../../../assets/images/sections/mapSection.svg";
import { navBarButtons } from "../../../defs/navbarButtons";
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import Map from "../../Map/Map";
import { useAppDispatch } from "../../../store/store";
import changeActiveSection from "../../../utils/changeActiveSection";

const MapSection = () => {
  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      changeActiveSection(refDiv.current, "Map", dispatch)
    );
  }, []);
  return (
    <div ref={refDiv}>
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
    </div>
  );
};

export default MapSection;
