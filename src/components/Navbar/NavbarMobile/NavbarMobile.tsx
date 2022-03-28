import React, { useState } from "react";
import styles from "./NavbarMobile.module.scss";
import Container from "../../Container/Container";
import Typography from "../../Typography/Typography";

import Logo from "../../../assets/icons/logoHorizontal.svg";
import { navBarButtons } from "../../../defs/navbarButtons";

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
                  label={navBarButtons.CALISTHENICS}
                />
              </a>
              <a className={styles.collapseMenuLink}>
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={navBarButtons.COACH}
                />
              </a>
            </div>

            <div className={styles.collapseMenuSection}>
              <a className={styles.collapseMenuLink}>
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={navBarButtons.COURSES}
                />
              </a>
              <a className={styles.collapseMenuLink}>
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={navBarButtons.MAP}
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
