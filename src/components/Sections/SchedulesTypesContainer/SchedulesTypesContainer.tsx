import React from "react";
import styles from "./SchedulesTypesContainer.module.scss";
import ScheduleType from "../ScheduleType/ScheduleType";

const SchedulesTypesContainer = () => {
  return (
    <div className={styles.scheduleTypesScrollableContainer}>
      <div className={styles.scheduleTypesContent}>
      <ScheduleType
          className={styles.scheduleType}
          type={"calisthenics"}
          title={"Calisthenics"}
          subTitle={"Lezione di Calishtenics, massimo 12 persone"}
        />
        <ScheduleType
          className={styles.scheduleType}
          type={"califunctional"}
          title={"Ginnastica funzionale"}
          subTitle={`Lezione di Circuit training, massimo 8 persone`}
        />
        <ScheduleType
          className={styles.scheduleType}
          type={"calistretching"}
          title={"Yoga Posturale"}
          subTitle={"Lezione di gruppo di stretching"}
        />
        <ScheduleType
          className={styles.scheduleType}
          type={"smallGroup"}
          title={"Imperium Motus Class"}
          subTitle={"Lezione individuale o in gruppi di massimo 6 persone"}
        />
      </div>
    </div>
  );
};

export default SchedulesTypesContainer;
