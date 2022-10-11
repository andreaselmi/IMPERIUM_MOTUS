import React from "react";
import styles from "./Button.module.scss";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";

interface ButtonProps extends React.ComponentProps<"button"> {
  label: string;
  className?: string;
  buttonType?: "primary" | "secondary";
  buttonStyle?: "dark" | "light";
}

const Button = ({
  className,
  label,
  buttonType = "primary",
  buttonStyle = "dark",
  ...restProps
}: ButtonProps) => {
  if (buttonType === "secondary") {
    return (
      <button
        className={`${styles.container} ${
          buttonStyle === "dark"
            ? styles.secondaryContainer
            : styles.secondaryLightContainer
        } ${className}`}
        {...restProps}
      >
        <Typography variant={textVariant.smallTitle} label={label} />
      </button>
    );
  } else
    return (
      <button
        className={`${styles.container} ${
          buttonStyle === "dark"
            ? styles.primaryContainer
            : styles.primaryLightContainer
        } ${className}`}
        {...restProps}
      >
        <Typography variant={textVariant.smallTitle} label={label} />
      </button>
    );
};

export default Button;
