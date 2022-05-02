import React, { useEffect, useState } from "react";
import styles from "./NavbarDesktop.module.scss";
import Container from "../../Container/Container";
import NavbarLinkButton from "../../NavbarLinkButton/NavbarLinkButton";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as LogoName } from "../../../assets/icons/logoName.svg";
import { navBarButtons } from "../../../defs/navbarButtons";
import { animateScroll as scroll } from "react-scroll/modules";
import { useAppSelector } from "../../../store/store";

const NavbarDesktop = () => {
  const [compact, setCompact] = useState(false);
  const activeSection = useAppSelector((state) => state.activeSection);

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
            isActive={activeSection === "Calisthenics"}
          />
          <NavbarLinkButton
            path={navBarButtons.COACH}
            label={navBarButtons.COACH}
            isActive={activeSection === "Coach"}
          />
          <span
            onClick={() => scroll.scrollToTop()}
            className={styles.logoContainer}
          >
            <Logo
              className={`${styles.mark} ${compact && styles.compactLogo}`}
            />

            <LogoName
              className={`${styles.logoName} ${
                compact && styles.compactLogoName
              }`}
            />
          </span>
          <NavbarLinkButton
            path={navBarButtons.COURSES}
            label={navBarButtons.COURSES}
            isActive={activeSection === "Courses"}
          />
          <NavbarLinkButton
            path={navBarButtons.MAP}
            label={navBarButtons.MAP}
            isActive={activeSection === "Map"}
          />
        </div>
      </Container>
    </div>
  );
};

export default NavbarDesktop;
