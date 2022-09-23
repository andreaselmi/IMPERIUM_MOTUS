import React, { useEffect, useRef, useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";

import { ReactComponent as Courses } from "../../../assets/images/sections/coursesSection.svg";
import styles from "./Schedules.module.scss";
import ScheduleType from "../ScheduleType/ScheduleType";
import Button from "../../Button/Button";
import { navBarButtons } from "../../../defs/navbarButtons";
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import Calendar from "../../Calendar/Calendar";
import Modal from "../../Modal/Modal";
import TrialLessonModal from "../../Modal/TrialLessonModal/TrialLessonModal";
import { useAppDispatch } from "../../../store/store";
import changeActiveSection from "../../../utils/changeActiveSection";

const Schedules = () => {
  const [showModal, setShowModal] = useState(false);

  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      changeActiveSection(refDiv.current, "Courses", dispatch)
    );
  }, []);
  return (
    <div ref={refDiv}>
      <ScrollAnchor id={navBarButtons.COURSES} />
      <SectionContainer
        style={{ paddingBottom: 35 }}
        id={navBarButtons.COURSES}
      >
        <SectionHeader
          className={styles.header}
          SvgComponent={<Courses />}
          imageAlt={"I corsi"}
          label={"Calendario Corsi"}
        />
        <div className={styles.scheduleTypesContainer}>
          <ScheduleType
            className={styles.scheduleType}
            type={"smallGroup"}
            title={"Small group"}
            subTitle={`Lezioni Calisthenics di 6 persone.`}
          />
          <ScheduleType
            className={styles.scheduleType}
            type={"functionalTraining"}
            title={"Functional training"}
            subTitle={`Lezioni di massimo 8 persone. `}
            paragraph={"Circuit training"}
          />
          <ScheduleType
            className={styles.scheduleType}
            type={"calisthenics"}
            title={"Calisthenics"}
            subTitle={"Lezione di gruppo di Calishtenics."}
          />
          <ScheduleType
            className={styles.scheduleType}
            type={"personal"}
            title={"Personal"}
            subTitle={"Studio aperto solo su prenotazione."}
          />
        </div>
      </SectionContainer>

      <Calendar />

      <div className={styles.button}>
        <Button
          onClick={() => setShowModal(true)}
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
