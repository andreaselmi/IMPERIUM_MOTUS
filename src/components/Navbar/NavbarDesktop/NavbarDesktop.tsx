import React from "react";
import styles from "./NavbarDesktop.module.css";
import Typography from "../../Typography/Typography";
import Container from "../../Container/Container";

import logo from "../../../assets/icons/logo.svg";
import logoName from "../../../assets/icons/logoName.svg";

const NavbarDesktop = () => {
  return (
    <div className={styles.navbarContainer}>
      <Container style={{ display: "flex", flex: 1 }}>
        <div className={styles.navbar}>
          <a>
            <Typography
              style={{ color: "white" }}
              variant={"menu"}
              label={"IL CALISTHENICS"}
            />
          </a>
          <a>
            <Typography
              style={{ color: "white" }}
              variant={"menu"}
              label={"IL COACH"}
            />
          </a>
          <div className={styles.logoContainer}>
            <img
              style={{ width: "75%" }}
              src={logo}
              alt={"Logo di Imperium Motus"}
            />
            <img
              style={{ width: "75%" }}
              src={logoName}
              alt={"Scritta Imperium Motus"}
            />
          </div>
          <a>
            <Typography
              style={{ color: "white" }}
              variant={"menu"}
              label={"I CORSI"}
            />
          </a>
          <a>
            <Typography
              style={{ color: "white" }}
              variant={"menu"}
              label={"DOVE SIAMO"}
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default NavbarDesktop;
