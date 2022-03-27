import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionContainer from "../SectionContainer/SectionContainer";
import styles from "./CoachSection.module.css";
import coachHeader from "../../../assets/images/sections/coachSection.svg";
import coachImg from "../../../assets/images/sections/coach.jpg";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";

import attestatoAICS from "../../../assets/images/sections/attestato1.png";
import attestatoFGI from "../../../assets/images/sections/attestato2.png";
import attestatoTrainingLab from "../../../assets/images/sections/attestato3.png";
import attestatoMidea from "../../../assets/images/sections/attestato4.png";

const CoachSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <SectionContainer>
        <div className={styles.container}>
          <SectionHeader
            imageSrc={coachHeader}
            imageAlt={"Il Coach"}
            label={"Alessandro Lupo"}
          />

          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              alt={"Un immagine del coach Alessandro Lupo"}
              src={coachImg}
            />
          </div>
          <div className={styles.textContainer}>
            <Typography
              variant={"paragraph"}
              label={
                "Alessandro Lupo, classe 1992, prima di tutto un atleta e per passione e professione faccio il personal trainer. Nel mio passato ho fatto molti sport: karate, calcio, kung fu, pallavolo, golf e il tennis che tutt’ora è una grande passione."
              }
            />
            <br />
            <Typography
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
        </div>
      </SectionContainer>
      <div className={styles.certificatesScrollableContainer}>
        <div className={styles.certificatesContainer}>
          <Typography
            style={{ marginBottom: 24 }}
            variant={"heading"}
            label={"Attestati"}
          />
          <div className={styles.certificatesContentContainer}>
            <div className={styles.singleCertificateContainer}>
              <div className={styles.certificateImgContainer}>
                <img
                  src={attestatoAICS}
                  alt={"Logo Attestato Istruttore Calisthenico (AICS)"}
                />
              </div>
              <Typography
                className={styles.certificateText}
                variant={"smallTitle"}
                label={"Istruttore Allenamento Calisthenico (AICS)"}
              />
            </div>
            <div className={styles.singleCertificateContainer}>
              <div className={styles.certificateImgContainer}>
                <img
                  style={{ height: 101, width: 101 }}
                  src={attestatoFGI}
                  alt={"Logo federazione Ginnastica Italiana"}
                />
              </div>
              <Typography
                className={styles.certificateText}
                variant={"smallTitle"}
                label={"Master “L’ ABC della GINNASTICA”"}
              />
            </div>
            <div className={styles.singleCertificateContainer}>
              <div className={styles.certificateImgContainer}>
                <img
                  src={attestatoTrainingLab}
                  alt={"Logo Training Lab Italia"}
                />
              </div>
              <Typography
                className={styles.certificateText}
                variant={"smallTitle"}
                label={"Istruttore Functional Training"}
              />
            </div>
            <div className={styles.singleCertificateContainer}>
              <div className={styles.certificateImgContainer}>
                <img src={attestatoMidea} alt={"Logo Midea"} />
              </div>
              <Typography
                className={styles.certificateText}
                variant={"smallTitle"}
                label={"Istruttore Posturologia"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
