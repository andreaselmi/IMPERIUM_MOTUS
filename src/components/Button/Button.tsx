import React from "react";
import styles from "./Button.module.scss";
import Typography from "../Typography/Typography";

import ArrowRightBlack from "../../assets/icons/arrowRightBlack.svg";
import ArrowRightWhite from "../../assets/icons/arrowRightWhite.svg";

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
          variant={"menu"}
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
        <img
          alt={"Button arrow right icon"}
          src={type === "primary" ? ArrowRightBlack : ArrowRightWhite}
        />
      </div>
    </button>
  );
};

export default Button;
