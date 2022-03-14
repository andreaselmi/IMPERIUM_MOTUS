import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "primary" | "secondary";
}

const Button = ({ type = "primary" }: ButtonProps) => {
  return (
    <button
      className={`${styles.container}`}
      style={
        type === "primary"
          ? { backgroundColor: "red" }
          : { backgroundColor: "blue" }
      }
    >
      Ciao
    </button>
  );
};

export default Button;
