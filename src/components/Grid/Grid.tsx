import React from "react";
import styles from "./Grid.module.css";

const Grid: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.grid}>
        <div>Ciao</div>
        <div>Ciao</div>

        <div>Ciao</div>
        <div>Ciao</div>
      </div>
    </>
  );
};

export default Grid;
