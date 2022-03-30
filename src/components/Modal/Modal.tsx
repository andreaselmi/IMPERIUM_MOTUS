import React from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
}

const Modal = ({ isOpen }: ModalProps) => {
  return (
    <>
      <div className={`${isOpen ? styles.overlay : ""}`} />
      <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
        <h1>Awesome modal</h1>
      </div>
    </>
  );
};

export default Modal;
