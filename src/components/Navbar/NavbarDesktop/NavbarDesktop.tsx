import React, { useEffect, useState } from "react";
import styles from "./NavbarDesktop.module.scss";
import Container from "../../Container/Container";
import NavbarLinkButton from "../../NavbarLinkButton/NavbarLinkButton";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as LogoName } from "../../../assets/icons/logoName.svg";
import { navBarButtons } from "../../../defs/navbarButtons";
import { animateScroll as scroll } from "react-scroll/modules";
import { useAppSelector } from "../../../store/store";
import { SiteSectionTypes } from "../../../defs/siteSection";

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
            path={navBarButtons.OUR_COURSES}
            label={navBarButtons.OUR_COURSES}
            isActive={activeSection === SiteSectionTypes.OUR_COURSES}
          />
          <NavbarLinkButton
            path={navBarButtons.COACH}
            label={navBarButtons.COACH}
            isActive={activeSection === SiteSectionTypes.COACH}
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
            path={navBarButtons.SCHEDULES}
            label={navBarButtons.SCHEDULES}
            isActive={activeSection === SiteSectionTypes.SCHEDULES}
          />
          <NavbarLinkButton
            path={navBarButtons.MAP}
            label={navBarButtons.MAP}
            isActive={activeSection === SiteSectionTypes.MAP}
          />
        </div>
      </Container>
    </div>
  );
};

export default NavbarDesktop;
