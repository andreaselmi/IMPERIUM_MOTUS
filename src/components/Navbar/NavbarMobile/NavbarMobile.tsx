import React from "react";
import styles from "./NavbarMobile.module.css";
import Container from "../../Container/Container";
import Typography from "../../Typography/Typography";

import Logo from "../../../assets/icons/logoHorizontal.svg";

const NavbarMobile = () => {
  return (
    <div className={styles.navBarContainer}>
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.collapseNavbarContainer}>
            <img src={Logo} alt={"Imperium motus logo"} />
            <a
              style={{ cursor: "pointer" }}
              onClick={() => console.log("ciao")}
            >
              <Typography
                className={styles.menuButton}
                variant={"menu"}
                label={"MENU"}
              />
            </a>
          </div>

          <div>
            <p>OPZIONE 1</p>
            <p>OPZIONE 2</p>
            <p>OPZIONE 3</p>
            <p>OPZIONE 4</p>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavbarMobile;
