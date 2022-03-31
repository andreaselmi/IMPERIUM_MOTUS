import React, { useState } from "react";
import Button from "../components/Button/Button";
import styles from "./TestModal.module.scss";

const TestModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button
        role={"button"}
        label={"Toggle modal"}
        onClick={() => toggleModal()}
      />

      <div
        // style={isOpen ? { bottom: 20 } : {}}
        className={`${styles.modal} ${isOpen ? styles.open : ""}`}
      >
        <h1>Awesome modal</h1>
      </div>
    </div>
  );
};

export default TestModal;
