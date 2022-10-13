import React, { useEffect, useRef, useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";

import { ReactComponent as Courses } from "../../../assets/images/sections/scheduleSection.svg";
import styles from "./Schedules.module.scss";
import Button from "../../Button/Button";
import { navBarButtons } from "../../../defs/navbarButtons";
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import Calendar from "../../Calendar/Calendar";
import Modal from "../../Modal/Modal";
import TrialLessonModal from "../../Modal/TrialLessonModal/TrialLessonModal";
import { useAppDispatch } from "../../../store/store";
import changeActiveSection from "../../../utils/changeActiveSection";
import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";
import { GAEventCategory, ModalEventAction } from "../../../defs/analytics";
import SchedulesTypesContainer from "../SchedulesTypesContainer/SchedulesTypesContainer";
import { SiteSectionTypes } from "../../../defs/siteSection";

const Schedules = () => {
  const [showModal, setShowModal] = useState(false);

  const gaEventTracker = useAnalyticsEventTracker(GAEventCategory.MODAL);

  const handleBookLesson = () => {
    gaEventTracker(ModalEventAction.BOOK_TEST_CALENDAR);
    setShowModal(true);
  };

  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      changeActiveSection(refDiv.current, SiteSectionTypes.SCHEDULES, dispatch)
    );
  }, []);
  return (
    <div ref={refDiv}>
      <ScrollAnchor id={navBarButtons.SCHEDULES} />

      <SectionContainer
        style={{ paddingBottom: 35 }}
        id={navBarButtons.SCHEDULES}
      >
        <SectionHeader
          className={styles.header}
          SvgComponent={<Courses />}
          imageAlt={"I corsi"}
          label={"Calendario Corsi"}
        />
      </SectionContainer>

      <SchedulesTypesContainer />

      <Calendar />

      <div className={styles.button}>
        <Button
          onClick={handleBookLesson}
          label={"Prenota una lezione di prova"}
        />
      </div>
      <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
        <TrialLessonModal />
      </Modal>
    </div>
  );
};

export default Schedules;
