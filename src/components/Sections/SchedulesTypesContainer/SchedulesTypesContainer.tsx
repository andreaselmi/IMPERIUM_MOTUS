import React from "react";
import styles from "./SchedulesTypesContainer.module.scss";
import ScheduleType from "../ScheduleType/ScheduleType";
import { textVariant } from "../../../defs/textVariant";
import Typography from "../../Typography/Typography";

const SchedulesTypesContainer = () => {
  return (
    <div className={styles.scheduleTypesScrollableContainer}>
      <div className={styles.scheduleTypesContent}>
      <ScheduleType
          className={styles.scheduleType}
          type={"calisthenics"}
          subTitle={"Lezione di Calishtenics, massimo 12 persone"}
        >
          <Typography variant={textVariant.smallTitle}><span style={{fontWeight: "bolder"}}>Cali</span>sthenics</Typography>
        </ScheduleType>

        <ScheduleType
          className={styles.scheduleType}
          type={"smallGroup"}
          subTitle={"Lezione di Calishtenics, massimo 6 persone"}
        >
          <Typography variant={textVariant.smallTitle}><span style={{fontWeight: "bolder"}}>Cali</span>sthenics Small Group</Typography>
        </ScheduleType>
        <ScheduleType
          className={styles.scheduleType}
          type={"califunctional"}
          subTitle={`Lezione di Circuit training, massimo 8 persone`}
        >
          <Typography variant={textVariant.smallTitle}><span style={{fontWeight: "bolder"}}>Cali</span>functional</Typography>
        </ScheduleType>
        <ScheduleType
          className={styles.scheduleType}
          type={"smallGroup"}
          subTitle={"Lezione individuale o di coppia"}
        
        >
          <Typography variant={textVariant.smallTitle}><span style={{fontWeight: "bolder"}}>Cali</span>personal</Typography>
          </ScheduleType>
      </div>
    </div>
  );
};

export default SchedulesTypesContainer;
