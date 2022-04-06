import React from "react";
import styles from "./Calendar.module.scss";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";
import CalendarSlot from "./CalendarSlot/CalendarSlot";
import calendarSlotData from "../../defs/calendarSlotData";

const Calendar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.hoursContainer}>
          <div className={styles.hours}>
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"9:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"10:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"11:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"12:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"13:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"14:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"15:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"16:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"17:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"18:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"19:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"20:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"21:00"}
            />
            <Typography
              className={styles.hourText}
              variant={textVariant.smallParagraph}
              label={"22:00"}
            />
          </div>
        </div>
        <div className={styles.slotContainer}>
          <div className={styles.daysHeaderContainer}>
            <Typography
              variant={textVariant.heading}
              className={styles.singleDayContainer}
              label={"Lun"}
            />
            <Typography
              variant={textVariant.heading}
              className={styles.singleDayContainer}
              label={"Mar"}
            />
            <Typography
              variant={textVariant.heading}
              className={styles.singleDayContainer}
              label={"Mer"}
            />
            <Typography
              variant={textVariant.heading}
              className={styles.singleDayContainer}
              label={"Gio"}
            />
            <Typography
              variant={textVariant.heading}
              className={styles.singleDayContainer}
              label={"Ven"}
            />
            <Typography
              variant={textVariant.heading}
              className={styles.singleDayContainer}
              label={"Sab"}
            />
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
            {calendarSlotData.map((item) => {
              return (
                <CalendarSlot
                  key={item.id}
                  start={item.start}
                  slotTime={item.duration}
                  day={item.day}
                  hoursLabel={item.hoursLabel}
                  slotType={item.type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
