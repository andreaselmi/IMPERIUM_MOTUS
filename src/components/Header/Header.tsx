import React from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import styles from "./Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { breakpoints } from "../../defs/breakpoints";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header style={{ backgroundColor: "#121212", display: "flex" }}>
      <Container
        style={
          width
            ? width >= breakpoints.DESKTOPSMALL
              ? { paddingTop: 160 }
              : { paddingTop: 96 }
            : {}
        }
        className={styles.container}
      >
        <div className={styles.headerLogoContainer}>
          <HeaderLogo />
        </div>

        <Button
          onClick={() => console.log("prenota lezione")}
          type={"secondary"}
          label={"Prenota una lezione di prova"}
        />
      </Container>
    </header>
  );
};

export default Header;
