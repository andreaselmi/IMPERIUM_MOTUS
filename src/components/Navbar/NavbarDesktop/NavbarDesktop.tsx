import React, { useEffect, useState } from "react";
import styles from "./NavbarDesktop.module.scss";
import Typography from "../../Typography/Typography";
import Container from "../../Container/Container";

import logo from "../../../assets/icons/logo.svg";
import logoName from "../../../assets/icons/logoName.svg";
import { navBarButtons } from "../../../defs/navbarButtons";

const NavbarDesktop = () => {
  const [compact, setCompact] = useState(false);

  const onScroll = () => {
    if (window.scrollY == 0) {
      setCompact(false);
    } else {
      setCompact(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      onScroll();
    });

    return window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${styles.navbarContainer} ${compact && styles.compactNavbar}`}
    >
      <Container style={{ display: "flex", flex: 1 }}>
        <div className={styles.navbar}>
          <a>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.CALISTHENICS}
            />
          </a>
          <a>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.COACH}
            />
          </a>
          <div className={styles.logoContainer}>
            <img
              className={`${styles.logo} ${compact && styles.compactLogo}`}
              src={logo}
              alt={"Logo di Imperium Motus"}
            />

            <img
              className={`${styles.logo} ${compact && styles.compactLogoName}`}
              src={logoName}
              alt={"Scritta Imperium Motus"}
            />
          </div>
          <a>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.COURSES}
            />
          </a>
          <a>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.MAP}
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default NavbarDesktop;
