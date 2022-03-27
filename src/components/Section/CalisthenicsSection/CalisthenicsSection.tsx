import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import calisthenics from "../../../assets/images/sections/calisthenicsSection.svg";
import styles from "./CalisthenicsSection.module.css";
import Container from "../../Container/Container";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Grid from "../../Grid/Grid";

const CalisthenicsSection = () => {
  const { width } = useWindowDimensions();

  const shortFirstText =
    "In Imperium Motus offriamo a tutti la possibilità di diventare la versione migliore di se stessi con dei corsi per potenziare la muscolaturà, diventare piú elastici, perdere peso o semplicemente sentirsi bene con se stessi.";
  const longFirstText =
    "Il termine calistenia deriva dal greco Kalòs (bello) e Sthenos (forza) e già l'analisi etimologica lascia intendere come la pratica dell'allenamento calistenico abbia tra i suoi obiettivi il miglioramento sia della performance del soggetto che del suo aspetto fisico con il massimo controllo del proprio corpo.";
  const shortSecondText =
    "In Imperium Motus offriamo a tutti la possibilità di diventare la versione migliore di se stessi.";
  const longSecondText =
    "Il Calisthenics è l'arte di usare il proprio peso corporeo come resistenza per allenarsi e sviluppare il fisico tramite il sistema di allenamento basato sulla ginnastica a corpo libero, includendo tutti quegli esercizi ginnici atti a sviluppare la bellezza, la forza e l'eleganza dei movimenti.";

  const firstText = width
    ? width > 1199
      ? longFirstText
      : shortFirstText
    : shortFirstText;

  const secondText = width
    ? width > 1199
      ? longSecondText
      : shortSecondText
    : shortSecondText;

  return (
    <section className={styles.container}>
      <div className={styles.overlay} />
      <Container>
        <Grid>
          <div className={styles.sectionContainer}>
            <SectionHeader
              titleClass={styles.sectionTitle}
              imageSrc={calisthenics}
              imageAlt={"Il Calisthenics"}
              label={"Calisthenics garage"}
            />

            <div className={styles.body}>
              <Typography
                className={styles.bodyText}
                variant={"paragraph"}
                label={firstText}
              />
              <br />
              <Typography
                className={styles.bodyText}
                variant={"paragraph"}
                label={secondText}
              />
            </div>

            <div>
              <Button
                type={"secondary"}
                label={"Perchè Calisthenics Garage?"}
              />
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default CalisthenicsSection;
