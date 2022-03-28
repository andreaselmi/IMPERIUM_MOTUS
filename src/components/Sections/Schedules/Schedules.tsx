import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionHeader from "../SectionHeader/SectionHeader";

import courses from "../../../assets/images/sections/coursesSection.svg";
import styles from "./Schedules.module.css";
import ScheduleType from "../ScheduleType/ScheduleType";

const Schedules = () => {
  return (
    <SectionContainer>
      <SectionHeader
        className={styles.header}
        imageSrc={courses}
        imageAlt={"I corsi"}
        label={"Calendario Corsi"}
      />
      <div className={styles.scheduleTypesContainer}>
        <ScheduleType
          type={"small"}
          title={"Small group"}
          subTitle={"Lezione con massimo 6 persone"}
        />
        <ScheduleType
          type={"calisthenics"}
          title={"Calisthenics"}
          subTitle={"Lezione con massimo 16 persone"}
        />
        <ScheduleType type={"open"} title={"Open"} subTitle={"Studio Aperto"} />
      </div>
    </SectionContainer>
  );
};

export default Schedules;
