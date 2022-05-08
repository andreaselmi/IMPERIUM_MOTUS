import React, { FormEvent, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import styles from "./TrialLessonModal.module.scss";
import Button from "../../Button/Button";
import axios from "axios";
import Lottie from "lottie-react";

import loader from "../../../assets/loader/loader.json";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";

import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";

const mailUrl = process.env.REACT_APP_SERVER_MAIL;

const TrialLessonModal = () => {
  const [fname, setFname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const [fnameError, setFNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [infoError, setInfoError] = useState(false);

  const validateForm = async (e: FormEvent) => {
    let error;
    e.preventDefault();
    if (fname === "") {
      setFNameError(true);
      error = true;
    }
    if (phoneNumber === "") {
      setPhoneNumberError(true);
      error = true;
    }
    if (info === "") {
      setInfoError(true);
      error = true;
    }

    if (!error) {
      await onSubmittingForm(e);
    }
  };

  const onSubmittingForm = async (e: FormEvent) => {
    e.preventDefault();
    setShowSuccessMsg(false);
    setLoading(true);
    if (mailUrl) {
      try {
        const res = await axios.post(mailUrl, {
          name: fname,
          phone: phoneNumber,
          info,
        });

        setLoading(false);
        console.log(res.data);
        setShowSuccessMsg(true);
      } catch (e) {
        setLoading(false);
        console.log(e, "errore");
      }
    } else {
      setLoading(false);
      console.log("L'invio non è disponibile");
    }
  };

  return (
    <>
      <ModalHeader title={"Prenota una lezione di prova"} />
      <div className={styles.formContainer}>
        <form onSubmit={validateForm} className={styles.form}>
          {loading && (
            <div className={styles.loaderContainer}>
              <Lottie
                className={styles.loader}
                animationData={loader}
                autoplay={true}
                loop={true}
              />
              <Typography
                variant={textVariant.paragraph}
                label={"Invio in corso..."}
              />
            </div>
          )}

          {showSuccessMsg && (
            <div
              style={{ backgroundColor: "white" }}
              className={`${styles.loaderContainer} ${styles.successContainer}`}
            >
              <div className={styles.checkIconContainer}>
                <CheckIcon style={{ width: 64, height: 64 }} />
              </div>
              <Typography
                style={{ fontWeight: "bold" }}
                variant={textVariant.paragraph}
                label={"Grazie per la richiesta"}
              />
              <Typography
                variant={textVariant.paragraph}
                label={
                  "Ti ricontatteremo a breve per confermare giorno e orario"
                }
              />
            </div>
          )}
          <label className={styles.label} htmlFor="fname">
            Nome e Cognome
          </label>
          <br />
          <input
            onChange={(e) => {
              if (fnameError) {
                setFNameError(false);
              }
              setFname(e.currentTarget.value);
            }}
            className={`${styles.input} ${fnameError && styles.inputError}`}
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
            onChange={(e) => {
              if (phoneNumberError) {
                setPhoneNumberError(false);
              }
              setPhoneNumber(e.currentTarget.value);
            }}
            className={`${styles.input} ${
              phoneNumberError && styles.inputError
            }`}
            placeholder={"333 0000000"}
            style={phoneNumberError ? { border: "1px solid #E11900" } : {}}
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
            onChange={(e) => {
              if (infoError) {
                setInfoError(false);
              }
              setInfo(e.currentTarget.value);
            }}
            className={`${styles.input} ${infoError && styles.inputError}`}
            placeholder={"Preferirei venire Venerdì alle 15:00"}
            style={infoError ? { border: "1px solid #E11900" } : {}}
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
