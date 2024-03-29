import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionContainer from "../SectionContainer/SectionContainer";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import Certificates from "./Certificates/Certificates";
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import styles from "./CoachSection.module.scss";
import { ReactComponent as CoachHeader } from "../../../assets/images/sections/coachSection.svg";
import coachImg from "../../../assets/images/sections/coach.jpg";
import { navBarButtons } from "../../../defs/navbarButtons";
import { textVariant } from "../../../defs/textVariant";
import Modal from "../../Modal/Modal";
import ModalCoachContent from "../../Modal/ModalCoachContent/ModalCoachContent";
import changeActiveSection from "../../../utils/changeActiveSection";
import { useAppDispatch } from "../../../store/store";
import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";
import { GAEventCategory, ModalEventAction } from "../../../defs/analytics";
import { SiteSectionTypes } from "../../../defs/siteSection";

const CoachSection = () => {
  const [showModal, setShowModal] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const gaEventTracker = useAnalyticsEventTracker(GAEventCategory.MODAL);

  const handleBookLesson = () => {
    gaEventTracker(ModalEventAction.COACH_STORY);
    setShowModal(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      changeActiveSection(refDiv.current, SiteSectionTypes.COACH, dispatch)
    );
  }, []);

  return (
    <div ref={refDiv}>
      <ScrollAnchor id={navBarButtons.COACH} />
      <div id={navBarButtons.COACH} className={styles.sectionContainer}>
        <SectionContainer>
          <div className={styles.headerContainer}>
            <SectionHeader
              SvgComponent={<CoachHeader />}
              imageAlt={"Il Coach"}
              label={"Alessandro Lupo"}
            />
          </div>

          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              alt={"Un immagine del coach Alessandro Lupo"}
              src={coachImg}
            />
          </div>

          <div className={styles.textContainer}>
            <Typography className={styles.text} variant={textVariant.paragraph}>
              Ciao, sono <b style={{ fontWeight: "bold" }}>Alessandro Lupo</b>,
              giovane atleta e Istruttore di{" "}
              <b style={{ fontWeight: "bold" }}>Calisthenics</b>.
            </Typography>
            <br />
            <Typography className={styles.text} variant={textVariant.paragraph}>
              Ho scoperto questa disciplina nel 2012 all&apos;età di 21 anni da
              autodidatta dopo aver trascorso in sala pesi molti anni e dopo
              aver provato vari sport nell’ arco della mia adolescenza.
            </Typography>
            <br />
            <Typography className={styles.text} variant={textVariant.paragraph}>
              Ho frequentato l&apos;Università degli Studi di L&apos;Aquila
              iscrivendomi alla facoltà di{" "}
              <b style={{ fontWeight: "bold" }}>Scienze Motorie</b> per
              arricchire le mie conoscenze e per fare della mia passione anche
              una professione.
            </Typography>

            <Button
              onClick={handleBookLesson}
              className={styles.button}
              label={"Leggi la mia storia"}
              buttonType={"primary"}
              buttonStyle={"light"}
            />
          </div>
        </SectionContainer>
        <Certificates />

        <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
          <ModalCoachContent />
        </Modal>
      </div>
    </div>
  );
};

export default CoachSection;
