import React, { useEffect, useState } from "react";
import styles from "./NavbarDesktop.module.scss";
import Typography from "../../Typography/Typography";
import Container from "../../Container/Container";

import logo from "../../../assets/icons/logo.svg";
import logoName from "../../../assets/icons/logoName.svg";
import { navBarButtons } from "../../../defs/navbarButtons";
import Scroller from "../../Scroller/Scroller";
import { animateScroll as scroll } from "react-scroll/modules";

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
          <Scroller path={navBarButtons.CALISTHENICS}>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.CALISTHENICS}
            />
          </Scroller>
          <Scroller path={navBarButtons.COACH}>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.COACH}
            />
          </Scroller>
          <span
            onClick={() => scroll.scrollToTop()}
            className={styles.logoContainer}
          >
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
          </span>
          <Scroller path={navBarButtons.COURSES}>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.COURSES}
            />
          </Scroller>
          <Scroller path={navBarButtons.MAP}>
            <Typography
              className={styles.navbarMenu}
              variant={"menu"}
              label={navBarButtons.MAP}
            />
          </Scroller>
        </div>
      </Container>
    </div>
  );
};

export default NavbarDesktop;
