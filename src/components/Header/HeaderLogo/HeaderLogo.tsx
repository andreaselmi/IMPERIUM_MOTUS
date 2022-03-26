import React from "react";
import styles from "./HeaderLogo.module.css";

import header1 from "../../../assets/images/header/header1.svg";
import header2 from "../../../assets/images/header/header2.svg";
import header3 from "../../../assets/images/header/header3.svg";

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo1Container}>
        <img className={styles.logo1} alt={"Il primo studio"} src={header1} />
      </div>
      <div className={styles.logo2Container}>
        <img className={styles.logo2} alt={"Calisthenics"} src={header2} />
      </div>
      <div className={styles.logo3Container}>
        <img className={styles.logo3} alt={"A Lecce"} src={header3} />
      </div>
    </div>
  );
};

export default HeaderLogo;
