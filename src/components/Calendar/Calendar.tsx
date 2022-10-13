import React from "react";
import styles from "./Calendar.module.scss";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";
import CalendarSlot from "./CalendarSlot/CalendarSlot";
import calendarSlotData from "../../defs/calendarDataTypes";

const Calendar = () => {
  const hours = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const days = ["lun", "mar", "mer", "gio", "ven", "sab"];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.hoursContainer}>
          <div className={styles.hours}>
            {hours.map((hour, index) => {
              return (
                <Typography
                  key={index}
                  className={styles.hourText}
                  variant={textVariant.smallParagraph}
                >
                  {hour}
                </Typography>
              );
            })}
          </div>
        </div>
        <div className={styles.slotContainer}>
          <div className={styles.daysHeaderContainer}>
            {days.map((day, index) => {
              return (
                <Typography
                  key={index}
                  variant={textVariant.heading}
                  className={styles.singleDayContainer}
                >
                  {day}
                </Typography>
              );
            })}
          </div>

          <div className={styles.scheduleGrid}>
            <div className={styles.backgroundGrid}>
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
              <div className={styles.separator} />
            </div>

            {calendarSlotData.map((slot) => {
              return <CalendarSlot key={slot.id} item={slot} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
