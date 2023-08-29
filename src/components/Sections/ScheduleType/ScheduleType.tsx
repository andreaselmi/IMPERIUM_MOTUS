import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./ScheduleType.module.scss";
import { textVariant } from "../../../defs/textVariant";

interface ScheduleTypeProps {
  type:
    | "califunctional"
    | "calisthenics"
    | "smallGroup"
    | "calistretching"
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
            type === "califunctional"
              ? styles.functionalBar
              : type === "calisthenics"
              ? styles.calisthenicsBar
              : type === "smallGroup"
              ? styles.smallBar
              : type === "calistretching"
              ? styles.yogaBar
              : null
          }`}
        />
        <div className={styles.textContainer}>
          <Typography variant={textVariant.smallTitle}>{title}</Typography>
          <Typography
            className={styles.subTitle}
            variant={textVariant.smallParagraph}
          >
            {subTitle}
          </Typography>
          {paragraph ? (
            <Typography
              className={styles.subTitle}
              variant={textVariant.smallParagraph}
            >
              {paragraph}
            </Typography>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ScheduleType;
