import React from "react";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";
import styles from "./CalendarSlot.module.scss";

export enum ScheduleSlotTime {
  half = 30,
  hour = 60,
  hourHalf = 90,
  twoHour = 120,
  twoHalfHour = 150,
}

export enum ScheduleDayType {
  lun = "lun",
  mar = "mar",
  mer = "mer",
  gio = "gio",
  ven = "ven",
  sab = "sab",
}

interface CalendarSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  // slotTime: scheduleSlotTime;
  slotType: "empty" | "small" | "calisthenics" | "open";
  hoursLabel: string;
  day: ScheduleDayType;
}

const CalendarSlot = ({
  day,
  hoursLabel,
  slotType,
  ...restProps
}: CalendarSlotProps) => {
  if (slotType === "empty") {
    return <div className={styles.container} {...restProps} />;
  }

  const checkSlotTitle = () => {
    if (slotType === "small") {
      return "Small group";
    } else if (slotType === "calisthenics") {
      return "Calisthenics";
    } else return "Open";
  };

  const checkContainerStyle = () => {
    if (slotType === "small") {
      return styles.small;
    } else if (slotType === "calisthenics") {
      return styles.calisthenics;
    } else return styles.open;
  };

  const checkDay = () => {
    switch (day) {
      case ScheduleDayType.lun:
        return styles.mon;
      case ScheduleDayType.mar:
        return styles.tue;
      case ScheduleDayType.mer:
        return styles.wed;
      case ScheduleDayType.gio:
        return styles.thu;
      case ScheduleDayType.ven:
        return styles.fri;
      case ScheduleDayType.sab:
        return styles.sat;
      default:
        return styles.mon;
    }
  };

  return (
    <div
      className={`${styles.container} ${checkContainerStyle()} ${checkDay()}`}
      {...restProps}
    >
      <Typography
        className={styles.label}
        variant={textVariant.label}
        label={hoursLabel}
      />
      <Typography
        variant={textVariant.smallParagraph}
        label={checkSlotTitle()}
      />
    </div>
  );
};

export default CalendarSlot;
