import React from "react";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";
import styles from "./CalendarSlot.module.scss";
import { CourseType } from "../../../defs/calendarDataTypes";
import checkCoursePosition from "../../../utils/checkCoursePosition";

interface CalendarSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  item: CourseType;
}

const CalendarSlot = ({ item, ...restProps }: CalendarSlotProps) => {
  const checkDay = () => {
    switch (item.day) {
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

  return (
    <div
      className={`${styles.container} ${checkDay()}`}
      style={{
        gridRow: `${checkCoursePosition(item.startHour)}/${checkCoursePosition(
          item.endHour
        )}`,
        backgroundColor: item.type.color,
      }}
      {...restProps}
    >
      <Typography
        className={`${styles.label} ${styles.text}`}
        style={{ color: item.type.hoursLabelColor }}
        variant={textVariant.label}
      >
        {item.startHour} - {item.endHour}
      </Typography>
      <Typography
        className={styles.text}
        style={{ color: item.type.labelColor }}
        variant={textVariant.smallParagraph}
        
      >
        <span dangerouslySetInnerHTML={{__html:item.type.label}}/>
      </Typography>
    </div>
  );
};

export default CalendarSlot;
