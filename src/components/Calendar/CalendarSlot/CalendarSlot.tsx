import React from "react";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";
import styles from "./CalendarSlot.module.scss";
import { ScheduleSlotTime } from "../../../defs/calendarSlotData";

type ScheduleDayType = "lun" | "mar" | "mer" | "gio" | "ven" | "sab";

interface CalendarSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  slotTime: ScheduleSlotTime;
  slotType: "empty" | "small" | "calisthenics" | "open";
  hoursLabel: string;
  day: ScheduleDayType;
  start: number;
}

const CalendarSlot = ({
  day,
  hoursLabel,
  slotType,
  slotTime,
  start,
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
      case "lun":
        return styles.mon;
      case "mar":
        return styles.tue;
      case "mer":
        return styles.wed;
      case "gio":
        return styles.thu;
      case "ven":
        return styles.fri;
      case "sab":
        return styles.sat;
      default:
        return styles.mon;
    }
  };
  const checkSpan = (time: ScheduleSlotTime) => {
    switch (time) {
      case ScheduleSlotTime.half:
        return 1;
      case ScheduleSlotTime.hour:
        return 2;
      case ScheduleSlotTime.hourHalf:
        return 3;
      case ScheduleSlotTime.twoHour:
        return 4;
      case ScheduleSlotTime.twoHalfHour:
        return 5;
      case ScheduleSlotTime.threeHours:
        return 6;
      case ScheduleSlotTime.fourHours:
        return 8;
    }
  };

  return (
    <div
      className={`${styles.container} ${checkContainerStyle()} ${checkDay()}`}
      style={{ gridRow: `${start}/span ${checkSpan(slotTime)}` }}
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
