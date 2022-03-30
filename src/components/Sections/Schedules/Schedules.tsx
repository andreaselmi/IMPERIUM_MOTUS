import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";

import courses from "../../../assets/images/sections/coursesSection.svg";
import styles from "./Schedules.module.scss";
import ScheduleType from "../ScheduleType/ScheduleType";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import { navBarButtons } from "../../../defs/navbarButtons";

const Schedules = () => {
  return (
    <>
      <span
        style={{ position: "relative", top: -96 }}
        id={navBarButtons.COURSES}
      />
      <SectionContainer id={navBarButtons.COURSES}>
        <SectionHeader
          className={styles.header}
          imageSrc={courses}
          imageAlt={"I corsi"}
          label={"Calendario Corsi"}
        />
        <div className={styles.scheduleTypesContainer}>
          <ScheduleType
            className={styles.scheduleType}
            type={"small"}
            title={"Small group"}
            subTitle={"Lezione con massimo 6 persone"}
          />
          <ScheduleType
            className={styles.scheduleType}
            type={"calisthenics"}
            title={"Calisthenics"}
            subTitle={"Lezione con massimo 16 persone"}
          />
          <ScheduleType
            className={styles.scheduleType}
            type={"open"}
            title={"Open"}
            subTitle={"Studio Aperto"}
          />
        </div>

        <div className={styles.calendarContainer} style={{ height: 300 }}>
          <Typography variant={"pageTitle"} label={"Qui andrà il calendario"} />
        </div>

        <div className={styles.button}>
          <Button label={"Prenota una lezione di prova"} />
        </div>
      </SectionContainer>
    </>
  );
};

export default Schedules;
