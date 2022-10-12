import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import SectionContainer from "../SectionContainer/SectionContainer";
import Modal from "../../Modal/Modal";
import styles from "./OurCoursesSection.module.scss";
import { ReactComponent as Calisthenics } from "../../../assets/images/sections/calisthenicsSection.svg";

//Utils
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import { navBarButtons } from "../../../defs/navbarButtons";
import { textVariant } from "../../../defs/textVariant";
import ModalCalisthenicsContent from "../../Modal/ModalCalisthenicsContent/ModalCalisthenicsContent";
import { useAppDispatch } from "../../../store/store";
import changeActiveSection from "../../../utils/changeActiveSection";
import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";
import { GAEventCategory, ModalEventAction } from "../../../defs/analytics";
import { SiteSectionTypes } from "../../../defs/siteSection";

const OurCoursesSection = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const gaEventTracker = useAnalyticsEventTracker(GAEventCategory.MODAL);

  const handleBookLesson = () => {
    gaEventTracker(ModalEventAction.CALISTHENICS);
    setShowModal(true);
  };

  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal) {
      const body = document.querySelector("body");
      if (body) body.style.overflow = "hidden";
    } else {
      const body = document.querySelector("body");
      if (body) body.style.overflow = "auto";
    }
  }, [showModal]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      changeActiveSection(
        refDiv.current,
        SiteSectionTypes.OUR_COURSES,
        dispatch
      )
    );
  }, []);

  return (
    <div ref={refDiv}>
      <ScrollAnchor id={navBarButtons.OUR_COURSES} />
      <SectionContainer className={styles.sectionContainer}>
        <div className={styles.container}>
          <SectionHeader
            SvgComponent={<Calisthenics />}
            titleClass={styles.sectionTitle}
            imageAlt={"Il Calisthenics"}
            label={"Calisthenics garage"}
          />

          <div className={styles.body}>
            <Typography
              className={styles.bodyText}
              variant={textVariant.paragraph}
              label={""}
            >
              <p>
                <span style={{ fontWeight: "bold" }}>Imperium Motus</span>, che
                in latino sta a significare{" "}
                <span style={{ fontStyle: "italic" }}>
                  Controllo del movimento
                </span>{" "}
                nasce proprio dalla filosofia del{" "}
                <span style={{ fontWeight: "bold" }}>Calisthenics</span>.
              </p>
            </Typography>
            <br />
            <Typography
              className={styles.bodyText}
              variant={textVariant.paragraph}
              label={
                "Il termine calistenia deriva dal greco Kalòs (bello) e Sthenos (forza) e già l'analisi etimologica lascia intendere come la pratica dell'allenamento calistenico abbia tra i suoi obiettivi il miglioramento sia della performance del soggetto che del suo aspetto fisico con il massimo controllo del proprio corpo."
              }
            />
            <br />
            <Typography
              className={styles.bodyText}
              variant={textVariant.paragraph}
              label={
                "Il Calisthenics è l'arte di usare il proprio peso corporeo come resistenza per allenarsi e sviluppare il fisico tramite il sistema di allenamento basato sulla ginnastica a corpo libero, includendo tutti quegli esercizi ginnici atti a sviluppare la bellezza, la forza e l'eleganza dei movimenti."
              }
            />
          </div>

          <div>
            <Button
              onClick={handleBookLesson}
              buttonType={"secondary"}
              label={"Perchè Calisthenics Garage?"}
            />
          </div>
        </div>
      </SectionContainer>
      <Modal closeModal={() => setShowModal(false)} isOpen={showModal}>
        <ModalCalisthenicsContent />
      </Modal>
    </div>
  );
};

export default OurCoursesSection;
