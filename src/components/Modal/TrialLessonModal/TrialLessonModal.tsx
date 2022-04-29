import React, { FormEvent, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import styles from "./TrialLessonModal.module.scss";
import Button from "../../Button/Button";

const TrialLessonModal = () => {
  const [fname, setFname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [info, setInfo] = useState("");

  const onSubmittingForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(fname, phoneNumber, info);
  };

  return (
    <>
      <ModalHeader title={"Prenota una lezione di prova"} />
      <div className={styles.formContainer}>
        <form onSubmit={onSubmittingForm} className={styles.form}>
          <label className={styles.label} htmlFor="fname">
            Nome e Cognome
          </label>
          <br />
          <input
            onChange={(e) => setFname(e.currentTarget.value)}
            className={styles.input}
            placeholder={"Juri Chechi"}
            type="text"
            id="fname"
            value={fname}
          />
          <br />
          <label className={styles.label} htmlFor="phonenumber">
            Numero di telefono
          </label>
          <br />

          <input
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
            className={styles.input}
            placeholder={"333 0000000"}
            type="tel"
            id="phonenumber"
            value={phoneNumber}
          />
          <br />

          <label className={styles.label} htmlFor="moreInfo">
            Preferenze di giorno e orario
          </label>
          <br />

          <textarea
            onChange={(e) => setInfo(e.currentTarget.value)}
            className={`${styles.input} ${styles.textArea}`}
            placeholder={"Preferirei venire Venerdì alle 15:00"}
            id="moreInfo"
            value={info}
          />

          <Button label={"Prenota una lezione di prova"} />
        </form>
      </div>
    </>
  );
};

export default TrialLessonModal;
