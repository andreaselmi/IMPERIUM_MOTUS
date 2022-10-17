import React, { useState } from "react";

// Components
import Container from "../Container/Container";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import TrialLessonModal from "../Modal/TrialLessonModal/TrialLessonModal";
import headerFirstSectionImage from "../../assets/images/header/headerFirstSection.png";
import headerSecondSectionImage from "../../assets/images/header/headerSecondSection.png";
import calisthenicsOnline from "../../assets/images/header/headeronlinebg.png";

// Utils
import styles from "./Header.module.scss";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

// Defs
import { GAEventCategory, ModalEventAction } from "../../defs/analytics";
import Grid from "../Grid/Grid";
import CoachingOnlineModal from "../Modal/ModalsContent/CoachingOnlineModal/CoachingOnlineModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCoachingOnlineModal, setShowCoachingOnlineModal] = useState(false);
  const gaEventTracker = useAnalyticsEventTracker(GAEventCategory.MODAL);

  const handleBookLesson = () => {
    gaEventTracker(ModalEventAction.BOOK_TEST_HEADER);
    setShowModal(true);
  };

  const handleOpenCoachingOnline = () => {
    gaEventTracker(ModalEventAction.COACHING_ONLINE_HEADER);

    setShowCoachingOnlineModal(true);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Grid>
          <div className={styles.headerFirstSection}>
            <div className={styles.headerFirstSectionImageContainer}>
              <img
                src={headerFirstSectionImage}
                className={styles.image}
                alt={"Scopri il piacere del Calisthenics a Lecce"}
              />
            </div>
            <Button
              className={styles.headerButton}
              buttonStyle={"light"}
              onClick={handleBookLesson}
              buttonType={"primary"}
              label={"Prenota una lezione di prova"}
            />
          </div>

          <div className={styles.headerSecondSection}>
            <div className={styles.headerSecondSectionImageContainer}>
              <img
                src={headerSecondSectionImage}
                className={styles.image}
                alt={"Il primo studio Calisthenics online"}
              />
            </div>

            <Button
              className={styles.headerButton}
              buttonStyle={"light"}
              onClick={handleOpenCoachingOnline}
              buttonType={"secondary"}
              label={"Scopri i nostri piani"}
            />

            <div className={styles.headerSecondSectionSideImage}>
              <img
                className={styles.image}
                src={calisthenicsOnline}
                alt={"Esempio di esecuzione di un pull-up"}
              />
            </div>
          </div>
        </Grid>
      </Container>

      <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
        <TrialLessonModal />
      </Modal>

      <Modal
        isOpen={showCoachingOnlineModal}
        closeModal={() => setShowCoachingOnlineModal(false)}
      >
        <CoachingOnlineModal />
      </Modal>
    </header>
  );
};

export default Header;
