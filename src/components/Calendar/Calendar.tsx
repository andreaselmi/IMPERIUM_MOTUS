import React from "react";
import styles from "./Calendar.module.scss";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";
import CalendarSlot, { ScheduleDayType } from "./CalendarSlot/CalendarSlot";

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
            <div className={styles.singleDayContainer}>Lun</div>
            <div className={styles.singleDayContainer}>Mar</div>
            <div className={styles.singleDayContainer}>Mer</div>
            <div className={styles.singleDayContainer}>Gio</div>
            <div className={styles.singleDayContainer}>Ven</div>
            <div className={styles.singleDayContainer}>Sab</div>
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
            {/* Lunedì */}
            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "1/3" }}
            />
            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "3/5" }}
            />
            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"9:00 - 12:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "5/8" }}
            />
            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "8/10" }}
            />

            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"15:00 - 16:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "13/16" }}
            />
            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"16:30 - 18:00"}
              slotType={"open"}
              style={{ gridRow: "16/19" }}
            />
            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"18:30 - 20:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "20/23" }}
            />
            <CalendarSlot
              day={ScheduleDayType.lun}
              hoursLabel={"20:00 - 21:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "23/26" }}
            />

            {/* Martedì */}

            <CalendarSlot
              day={ScheduleDayType.mar}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "2/4" }}
            />

            <CalendarSlot
              day={ScheduleDayType.mar}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "4/6" }}
            />

            <CalendarSlot
              day={ScheduleDayType.mar}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "6/8" }}
            />

            <CalendarSlot
              day={ScheduleDayType.mar}
              hoursLabel={"9:00 - 12:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "10/13" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mar}
              hoursLabel={"13:30 - 15:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "13/16" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mar}
              hoursLabel={"15:00 - 16:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "20/23" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mar}
              hoursLabel={"16:30 - 18:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "23/26" }}
            />

            {/* Mercoledì */}

            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "1/3" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "3/5" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"9:00 - 12:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "5/8" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "8/10" }}
            />

            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"15:00 - 16:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "13/16" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"16:30 - 18:00"}
              slotType={"open"}
              style={{ gridRow: "16/19" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"18:30 - 20:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "20/23" }}
            />
            <CalendarSlot
              day={ScheduleDayType.mer}
              hoursLabel={"20:00 - 21:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "23/26" }}
            />

            {/*/!* Giovedì *!/*/}

            <CalendarSlot
              day={ScheduleDayType.gio}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "2/4" }}
            />

            <CalendarSlot
              day={ScheduleDayType.gio}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "4/6" }}
            />

            <CalendarSlot
              day={ScheduleDayType.gio}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "6/8" }}
            />

            <CalendarSlot
              day={ScheduleDayType.gio}
              hoursLabel={"9:00 - 12:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "10/13" }}
            />
            <CalendarSlot
              day={ScheduleDayType.gio}
              hoursLabel={"13:30 - 15:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "13/16" }}
            />
            <CalendarSlot
              day={ScheduleDayType.gio}
              hoursLabel={"15:00 - 16:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "20/23" }}
            />
            <CalendarSlot
              day={ScheduleDayType.gio}
              hoursLabel={"16:30 - 18:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "23/26" }}
            />

            {/*/!* Venerdì *!/*/}

            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "1/3" }}
            />
            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "3/5" }}
            />
            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"9:00 - 12:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "5/8" }}
            />
            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"9:00 - 12:00"}
              slotType={"small"}
              style={{ gridRow: "8/10" }}
            />

            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"15:00 - 16:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "13/16" }}
            />
            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"16:30 - 18:00"}
              slotType={"open"}
              style={{ gridRow: "16/19" }}
            />
            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"18:30 - 20:00"}
              slotType={"calisthenics"}
              style={{ gridRow: "20/23" }}
            />
            <CalendarSlot
              day={ScheduleDayType.ven}
              hoursLabel={"20:00 - 21:30"}
              slotType={"calisthenics"}
              style={{ gridRow: "23/26" }}
            />

            {/*/!* Sabato *!/*/}

            <CalendarSlot
              day={ScheduleDayType.sab}
              hoursLabel={"20:00 - 21:30"}
              slotType={"open"}
              style={{ gridRow: "1/9" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
