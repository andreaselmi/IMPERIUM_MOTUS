import React from "react";
import styles from "./SchedulesTypesContainer.module.scss";
import ScheduleType from "../ScheduleType/ScheduleType";

const SchedulesTypesContainer = () => {
  return (
    <div className={styles.scheduleTypesScrollableContainer}>
      <div className={styles.scheduleTypesContent}>
        <ScheduleType
          className={styles.scheduleType}
          type={"smallGroup"}
          title={"Imperium Motus Class"}
          subTitle={`Metodo Imperium Motus con massimo 6 persone`}
        />
        <ScheduleType
          className={styles.scheduleType}
          type={"functionalTraining"}
          title={"Ginnastica funzionale"}
          subTitle={`Lezioni di 6/8 persone, Circuit training`}
        />
        <ScheduleType
          className={styles.scheduleType}
          type={"calisthenics"}
          title={"Calisthenics"}
          subTitle={"Lezione di gruppo di Calishtenics"}
        />
        <ScheduleType
          className={styles.scheduleType}
          type={"yoga"}
          title={"Yoga Posturale"}
          subTitle={"Lezione di gruppo di Yoga"}
        />
        <ScheduleType
          className={styles.scheduleType}
          type={"personal"}
          title={"Personal"}
          subTitle={"Studio aperto solo su prenotazione."}
        />
      </div>
    </div>
  );
};

export default SchedulesTypesContainer;
