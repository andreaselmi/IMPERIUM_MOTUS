import React, { useState } from "react";
import styles from "./NavbarMobile.module.css";
import Container from "../../Container/Container";
import Typography from "../../Typography/Typography";

import Logo from "../../../assets/icons/logoHorizontal.svg";

const NavbarMobile = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleNavbar = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <div
      className={`${styles.navBarContainer} ${isOpened && styles.navbarOpened}`}
    >
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.collapseNavbarContainer}>
            <img src={Logo} alt={"Imperium motus logo"} />
            <a style={{ cursor: "pointer" }} onClick={() => toggleNavbar()}>
              <Typography
                className={styles.menuButton}
                variant={"menu"}
                label={"MENU"}
              />
            </a>
          </div>

          <div style={{ marginTop: 32 }}>
            <div className={styles.collapseMenuSection}>
              <a className={styles.collapseMenuLink}>
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={"Il calisthenics"}
                />
              </a>
              <a className={styles.collapseMenuLink}>
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={"Il coach"}
                />
              </a>
            </div>

            <div className={styles.collapseMenuSection}>
              <a className={styles.collapseMenuLink}>
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={"I corsi"}
                />
              </a>
              <a className={styles.collapseMenuLink}>
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={"Dove siamo"}
                />
              </a>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavbarMobile;
