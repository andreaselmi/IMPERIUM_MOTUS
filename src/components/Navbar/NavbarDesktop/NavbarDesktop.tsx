import React, { useEffect, useState } from "react";
import styles from "./NavbarDesktop.module.scss";
import Container from "../../Container/Container";
import NavbarLinkButton from "../../NavbarLinkButton/NavbarLinkButton";
import logo from "../../../assets/icons/logo.svg";
import logoName from "../../../assets/icons/logoName.svg";
import { navBarButtons } from "../../../defs/navbarButtons";
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
          <NavbarLinkButton
            path={navBarButtons.CALISTHENICS}
            label={navBarButtons.CALISTHENICS}
          />
          <NavbarLinkButton
            path={navBarButtons.COACH}
            label={navBarButtons.COACH}
          />
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
          <NavbarLinkButton
            path={navBarButtons.COURSES}
            label={navBarButtons.COURSES}
          />
          <NavbarLinkButton
            path={navBarButtons.MAP}
            label={navBarButtons.MAP}
          />
        </div>
      </Container>
    </div>
  );
};

export default NavbarDesktop;
