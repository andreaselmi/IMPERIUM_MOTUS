import React, { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import styles from "./Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { breakpoints } from "../../defs/breakpoints";
import Modal from "../Modal/Modal";
import ModalHeaderContent from "../Modal/ModalHeaderContent/ModalHeaderContent";

const Header = () => {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);

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
          onClick={() => setShowModal(true)}
          type={"secondary"}
          label={"Prenota una lezione di prova"}
        />
      </Container>

      <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
        <ModalHeaderContent />
      </Modal>
    </header>
  );
};

export default Header;
