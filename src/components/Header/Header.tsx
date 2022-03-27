import React from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import styles from "./Header.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <div style={{ backgroundColor: "#121212", display: "flex" }}>
      <Container
        style={
          width ? (width > 991 ? { paddingTop: 160 } : { paddingTop: 96 }) : {}
        }
        className={styles.container}
      >
        <div className={styles.headerLogoContainer}>
          <HeaderLogo />
        </div>

        <Button type={"secondary"} label={"Prenota una lezione di prova"} />
      </Container>
    </div>
  );
};

export default Header;