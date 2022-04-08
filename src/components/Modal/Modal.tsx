import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/icons/closeWhite.svg";
import Typography from "../Typography/Typography";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import { textVariant } from "../../defs/textVariant";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal, isOpen }) => {
  const handleUserKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);
  return (
    <>
      <div onClick={closeModal} className={`${isOpen ? styles.overlay : ""}`} />
      <div className={`${styles.modalBack} ${isOpen ? styles.open : ""}`}>
        <Container>
          <span
            role={"button"}
            onClick={closeModal}
            className={styles.closeContainer}
          >
            <img src={closeIcon} alt={"Pulsante per chiudere il modale"} />
            <Typography
              style={{
                color: "white",
                marginLeft: 8,
              }}
              variant={textVariant.heading}
              label={"Chiudi"}
            />
          </span>
        </Container>
      </div>
      <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
        <Container>
          <Grid className={styles.modalContentContainer}>{children}</Grid>
        </Container>
      </div>
    </>
  );
};

export default Modal;
