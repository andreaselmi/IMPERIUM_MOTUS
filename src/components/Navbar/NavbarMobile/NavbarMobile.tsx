import React, { useState } from "react";
import { navBarButtons } from "../../../defs/navbarButtons";
import Logo from "../../../assets/icons/logoHorizontal.svg";
import styles from "./NavbarMobile.module.scss";
import { animateScroll as scroll, Events } from "react-scroll";
import Container from "../../Container/Container";
import Typography from "../../Typography/Typography";
import Scroller from "../../Scroller/Scroller";

const NavbarMobile = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleNavbar = (target?: HTMLSpanElement) => {
    if (target) {
      if (isOpened) {
        target.setAttribute("aria-pressed", "false");
      } else {
        target.setAttribute("aria-pressed", "true");
      }
    }
    setIsOpened((prevState) => !prevState);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (
      event.key === " " ||
      event.key === "Enter" ||
      event.key === "Spacebar"
    ) {
      // "Spacebar" for IE11 support
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      toggleNavbar(event.currentTarget);
    }
  };

  Events.scrollEvent.register("end", () => {
    if (window.scrollY !== 0) toggleNavbar();
  });

  return (
    <div
      className={`${styles.navBarContainer} ${isOpened && styles.navbarOpened}`}
    >
      <Container>
        <nav>
          <div className={styles.collapseNavbarContainer}>
            <span role={"button"} onClick={() => scroll.scrollToTop()}>
              <img src={Logo} alt={"Imperium motus logo"} />
            </span>

            <span
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e)}
              aria-pressed={"false"}
              role="button"
              className={styles.navBarMenuButton}
              style={{
                cursor: "pointer",
              }}
              onClick={(e) => toggleNavbar(e.currentTarget)}
            >
              <Typography
                className={styles.menuButton}
                variant={"menu"}
                label={"MENU"}
              />
            </span>
          </div>

          <div style={{ marginTop: 32 }}>
            <div className={styles.collapseMenuSection}>
              <Scroller
                path={navBarButtons.CALISTHENICS}
                className={styles.collapseMenuLink}
              >
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={navBarButtons.CALISTHENICS}
                />
              </Scroller>
              <Scroller
                path={navBarButtons.COACH}
                className={styles.collapseMenuLink}
              >
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={navBarButtons.COACH}
                />
              </Scroller>
            </div>

            <div className={styles.collapseMenuSection}>
              <Scroller
                path={navBarButtons.COURSES}
                className={styles.collapseMenuLink}
              >
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={navBarButtons.COURSES}
                />
              </Scroller>
              <Scroller
                path={navBarButtons.MAP}
                className={styles.collapseMenuLink}
              >
                <Typography
                  className={styles.menuButton}
                  variant={"menu"}
                  label={navBarButtons.MAP}
                />
              </Scroller>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavbarMobile;
