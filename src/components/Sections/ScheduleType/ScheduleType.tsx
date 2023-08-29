import React, { ReactNode } from "react";
import Typography from "../../Typography/Typography";
import styles from "./ScheduleType.module.scss";
import { textVariant } from "../../../defs/textVariant";

interface ScheduleTypeProps {
  type:
    | "califunctional"
    | "calisthenics"
    | "smallGroup"
    | "calistretching"
  children: ReactNode;
  subTitle: string;
  paragraph?: string;
  className?: string;
}

const ScheduleType = ({
  className,
  paragraph,
  subTitle,
  children,
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
          {children}
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
