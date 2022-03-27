import React from "react";
import styles from "./Grid.module.css";

interface GridProps {
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return <div className={`${styles.grid} ${className}`}>{children}</div>;
};

export default Grid;
