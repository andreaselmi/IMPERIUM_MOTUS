import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";

import { ReactComponent as Courses } from "../../../assets/images/sections/coursesSection.svg";
import styles from "./Schedules.module.scss";
import ScheduleType from "../ScheduleType/ScheduleType";
import Button from "../../Button/Button";
import { navBarButtons } from "../../../defs/navbarButtons";
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import Calendar from "../../Calendar/Calendar";

const Schedules = () => {
  return (
    <>
      <ScrollAnchor id={navBarButtons.COURSES} />
      <SectionContainer id={navBarButtons.COURSES}>
        <SectionHeader
          className={styles.header}
          SvgComponent={<Courses />}
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
      </SectionContainer>

      <Calendar />

      <div className={styles.button}>
        <Button
          onClick={() => console.log("prenota lezione")}
          label={"Prenota una lezione di prova"}
        />
      </div>
    </>
  );
};

export default Schedules;
