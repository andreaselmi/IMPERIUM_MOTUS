import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionContainer from "../SectionContainer/SectionContainer";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import Certificates from "./Certificates/Certificates";
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import styles from "./CoachSection.module.scss";
import { ReactComponent as CoachHeader } from "../../../assets/images/sections/coachSection.svg";
import coachImg from "../../../assets/images/sections/coach.jpg";
import { navBarButtons } from "../../../defs/navbarButtons";
import { textVariant } from "../../../defs/textVariant";
import Modal from "../../Modal/Modal";
import ModalCoachContent from "../../Modal/ModalCoachContent/ModalCoachContent";

const CoachSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ScrollAnchor id={navBarButtons.COACH} />
      <div id={navBarButtons.COACH} className={styles.sectionContainer}>
        <SectionContainer>
          <div className={styles.headerContainer}>
            <SectionHeader
              SvgComponent={<CoachHeader />}
              imageAlt={"Il Coach"}
              label={"Alessandro Lupo"}
            />
          </div>

          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              alt={"Un immagine del coach Alessandro Lupo"}
              src={coachImg}
            />
          </div>

          <div className={styles.textContainer}>
            <Typography
              className={styles.text}
              variant={textVariant.paragraph}
              label={
                "Alessandro Lupo, classe 1992, prima di tutto un atleta e per passione e professione faccio il personal trainer. Nel mio passato ho fatto molti sport: karate, calcio, kung fu, pallavolo, golf e il tennis che tutt’ora è una grande passione."
              }
            />
            <br />
            <Typography
              className={styles.text}
              variant={textVariant.paragraph}
              label={
                "Una sera del 2012 un amico mi mostrò un video di Frank Medrano, quel giorno scoprì la passione per il Calisthenics. Rimasi così impressionato da mollare immediatamente la sala pesi, il giorno dopo alle 8:00 di mattina ero già al parco per fare il mio primo allenamento."
              }
            />

            <Button
              onClick={() => setShowModal(true)}
              className={styles.button}
              label={"Leggi la mia storia"}
              type={"primary"}
            />
          </div>
        </SectionContainer>
        <Certificates />

        <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
          <ModalCoachContent />
        </Modal>
      </div>
    </>
  );
};

export default CoachSection;
