import React from "react";
import styles from "./HeaderLogo.module.scss";

import { ReactComponent as Calisthenics } from "../../../assets/images/header/header2.svg";
import { ReactComponent as FirstStudio } from "../../../assets/images/header/header1.svg";
import { ReactComponent as InLecce } from "../../../assets/images/header/header3.svg";

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo1Container}>
        <FirstStudio className={styles.logo1} />
      </div>
      <div className={styles.logo2Container}>
        <Calisthenics className={styles.logo2} />
      </div>
      <div className={styles.logo3Container}>
        <InLecce className={styles.logo3} />
      </div>
    </div>
  );
};

export default HeaderLogo;
