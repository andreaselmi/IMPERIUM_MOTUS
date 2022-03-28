import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./ScheduleType.module.scss";

interface ScheduleTypeProps {
  type: "small" | "calisthenics" | "open";
  title: string;
  subTitle: string;
  className?: string;
}

const ScheduleType = ({
  className,
  subTitle,
  title,
  type,
}: ScheduleTypeProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={`${styles.typeBar} ${
          type === "small"
            ? styles.smallBar
            : type === "calisthenics"
            ? styles.calisthenicsBar
            : styles.openBar
        }`}
      />
      <div className={styles.textContainer}>
        <Typography variant={"smallTitle"} label={title} />
        <Typography
          className={styles.subTitle}
          variant={"smallParagraph"}
          label={subTitle}
        />
      </div>
    </div>
  );
};

export default ScheduleType;
