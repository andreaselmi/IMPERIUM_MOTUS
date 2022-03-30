import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionContainer from "../SectionContainer/SectionContainer";
import styles from "./CoachSection.module.scss";
import coachHeader from "../../../assets/images/sections/coachSection.svg";
import coachImg from "../../../assets/images/sections/coach.jpg";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import Certificates from "./Certificates/Certificates";
import { navBarButtons } from "../../../defs/navbarButtons";

const CoachSection = () => {
  return (
    <>
      <span
        style={{ position: "relative", top: -96 }}
        id={navBarButtons.COACH}
      />
      <div id={navBarButtons.COACH} className={styles.sectionContainer}>
        <SectionContainer>
          <div className={styles.headerContainer}>
            <SectionHeader
              imageSrc={coachHeader}
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
              variant={"paragraph"}
              label={
                "Alessandro Lupo, classe 1992, prima di tutto un atleta e per passione e professione faccio il personal trainer. Nel mio passato ho fatto molti sport: karate, calcio, kung fu, pallavolo, golf e il tennis che tutt’ora è una grande passione."
              }
            />
            <br />
            <Typography
              className={styles.text}
              variant={"paragraph"}
              label={
                "Una sera del 2012 un amico mi mostrò un video di Frank Medrano, quel giorno scoprì la passione per il Calisthenics. Rimasi così impressionato da mollare immediatamente la sala pesi, il giorno dopo alle 8:00 di mattina ero già al parco per fare il mio primo allenamento."
              }
            />

            <Button
              className={styles.button}
              label={"Leggi la mia storia"}
              type={"primary"}
            />
          </div>
        </SectionContainer>
        <Certificates />
      </div>
    </>
  );
};

export default CoachSection;
