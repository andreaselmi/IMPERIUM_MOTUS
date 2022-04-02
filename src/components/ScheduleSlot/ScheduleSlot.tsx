import React from "react";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";
import styles from "./ScheduleSlot.module.scss";

export enum scheduleSlotTime {
  half = 30,
  hour = 60,
  hourHalf = 90,
  twoHour = 120,
  twoHalfHour = 150,
}

interface ScheduleSlotProps {
  slotTime: scheduleSlotTime;
  slotType: "empty" | "small" | "calisthenics" | "open";
}

const ScheduleSlot = ({ slotTime, slotType }: ScheduleSlotProps) => {
  const checkHeight = (val: scheduleSlotTime) => {
    if (val === 30) {
      return val;
    }

    const halfNumber = val / 30;
    const totalTimeHeight = 26 * halfNumber;
    return totalTimeHeight + (halfNumber - 1) * 3;
  };

  if (slotType === "empty") {
    return <div className={styles.emptyContainer} />;
  }

  return (
    <div className={styles.container}>
      <Typography variant={textVariant.label} label={"9:00 - 10:00"} />
      <Typography variant={textVariant.smallParagraph} label={"Small group"} />
    </div>
  );
};

export default ScheduleSlot;
