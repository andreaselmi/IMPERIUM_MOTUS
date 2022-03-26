import React from "react";
import styles from "./HeaderLogo.module.css";

import header1 from "../../../assets/images/header/header1.svg";
import header2 from "../../../assets/images/header/header2.svg";
import header3 from "../../../assets/images/header/header3.svg";

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo1}>
        <img
          style={{
            width: "50%",
            height: "50%",
          }}
          alt={"Il primo studio"}
          src={header1}
        />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            alignSelf: "center",
            width: "100%",
            height: "100%",
          }}
          alt={"Calisthenics"}
          src={header2}
        />
      </div>
      <div className={styles.logo3}>
        <img
          style={{
            width: "30%",
            height: "30%",
          }}
          alt={"A Lecce"}
          src={header3}
        />
      </div>
    </div>
  );
};

export default HeaderLogo;
