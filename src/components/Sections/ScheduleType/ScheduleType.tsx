import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./ScheduleType.module.scss";
import { textVariant } from "../../../defs/textVariant";

interface ScheduleTypeProps {
  type: "functionalTraining" | "calisthenics" | "personal";
  title: string;
  subTitle: string;
  paragraph?: string;
  className?: string;
}

const ScheduleType = ({
  className,
  paragraph,
  subTitle,
  title,
  type,
}: ScheduleTypeProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div style={{ display: "flex" }}>
        <div
          className={`${styles.typeBar} ${
            type === "functionalTraining"
              ? styles.smallBar
              : type === "calisthenics"
              ? styles.calisthenicsBar
              : styles.openBar
          }`}
        />
        <div className={styles.textContainer}>
          <Typography variant={textVariant.smallTitle} label={title} />
          <Typography
            className={styles.subTitle}
            variant={textVariant.smallParagraph}
            label={subTitle}
          />
          {paragraph ? (
            <Typography
              className={styles.subTitle}
              variant={textVariant.smallParagraph}
              label={paragraph}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ScheduleType;
