import React from "react";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";
import styles from "./CalendarSlot.module.scss";
import { ScheduleSlotTime, SlotType } from "../../../defs/calendarSlotData";

type ScheduleDayType = "lun" | "mar" | "mer" | "gio" | "ven" | "sab";

interface CalendarSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  slotTime: ScheduleSlotTime;
  slotType: SlotType;
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
    if (slotType === "functionalTraining") {
      return "Functional";
    } else if (slotType === "calisthenics") {
      return "Calisthenics";
    } else if (slotType === "smallGroup") {
      return "Small group";
    } else if (slotType === "appointment") {
      return "Solo su appuntamento";
    } else return "Personal";
  };

  const checkContainerStyle = () => {
    if (slotType === "functionalTraining") {
      return styles.functional;
    } else if (slotType === "calisthenics") {
      return styles.calisthenics;
    } else if (slotType === "smallGroup") {
      return styles.small;
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
      case ScheduleSlotTime.twoHours:
        return 4;
      case ScheduleSlotTime.twoHalfHour:
        return 5;
      case ScheduleSlotTime.threeHours:
        return 6;
      case ScheduleSlotTime.threeHalfHour:
        return 7;
      case ScheduleSlotTime.fourHours:
        return 8;
      case ScheduleSlotTime.fiveHours:
        return 10;
      case ScheduleSlotTime.sixHalfHour:
        return 13;
    }
  };

  return (
    <div
      className={`${styles.container} ${checkContainerStyle()} ${checkDay()}`}
      style={{ gridRow: `${start}/span ${checkSpan(slotTime)}` }}
      {...restProps}
    >
      <Typography
        className={`${styles.label} ${styles.text}`}
        variant={textVariant.label}
        label={hoursLabel}
      />
      <Typography
        className={styles.text}
        variant={textVariant.smallParagraph}
        label={checkSlotTitle()}
      />
    </div>
  );
};

export default CalendarSlot;
