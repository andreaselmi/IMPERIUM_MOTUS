import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "primary" | "secondary";
  label: string;
}

const Button = ({ label, type = "primary" }: ButtonProps) => {
  return (
    <button
      className={`${styles.container}`}
      style={
        type === "primary"
          ? { backgroundColor: "red" }
          : { backgroundColor: "blue" }
      }
    >
      {label}
    </button>
  );
};

export default Button;
