import React from "react";
import styles from "./Button.module.scss";
import Typography from "../Typography/Typography";

import { ReactComponent as ArrowRightBlack } from "../../assets/icons/arrowRightBlack.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/icons/arrowRightWhite.svg";
import { textVariant } from "../../defs/textVariant";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "secondary";
  label: string;
  className?: string;
}

const Button = ({
  className,
  label,
  type = "primary",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={`${styles.container} ${
        type === "primary" ? styles.primary : styles.secondary
      } ${className}`}
      {...restProps}
    >
      <div className={styles.buttonSection}>
        <Typography
          className={
            type === "primary" ? styles.primaryText : styles.secondaryText
          }
          variant={textVariant.menu}
          label={label}
        />
      </div>
      <div
        className={`${styles.separator} ${
          type === "primary"
            ? styles.primarySeparator
            : styles.secondarySeparator
        }`}
      />
      <div className={styles.buttonSection}>
        {type === "primary" ? <ArrowRightBlack /> : <ArrowRightWhite />}
      </div>
    </button>
  );
};

export default Button;
