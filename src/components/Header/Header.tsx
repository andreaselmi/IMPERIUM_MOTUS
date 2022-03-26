import React from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Container
        style={{
          height: "100%",
          alignItems: "center",
          paddingTop: 150,
          paddingBottom: 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <HeaderLogo />
        </div>

        <Button type={"secondary"} label={"Prenota una lezione di prova"} />
      </Container>
    </div>
  );
};

export default Header;
