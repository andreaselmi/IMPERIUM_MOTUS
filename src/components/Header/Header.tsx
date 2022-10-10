import React, { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import styles from "./Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { breakpoints } from "../../defs/breakpoints";
import Modal from "../Modal/Modal";
import TrialLessonModal from "../Modal/TrialLessonModal/TrialLessonModal";
import { GAEventCategory, ModalEventAction } from "../../defs/analytics";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

const Header = () => {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const gaEventTracker = useAnalyticsEventTracker(GAEventCategory.MODAL);

  const handleBookLesson = () => {
    gaEventTracker(ModalEventAction.BOOK_TEST_HEADER);
    setShowModal(true);
  };

  return (
    <header style={{ backgroundColor: "#121212", display: "flex" }}>
      <Container
        style={
          width
            ? width >= breakpoints.DESKTOPSMALL
              ? { paddingTop: 160 }
              : { paddingTop: 96 }
            : {}
        }
        className={styles.container}
      >
        <div className={styles.headerLogoContainer}>
          <HeaderLogo />
        </div>

        <Button
          onClick={handleBookLesson}
          buttonType={"secondary"}
          label={"Prenota una lezione di prova"}
        />
      </Container>

      <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
        <TrialLessonModal />
      </Modal>
    </header>
  );
};

export default Header;
