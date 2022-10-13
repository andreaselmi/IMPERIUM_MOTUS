import React from "react";
import Typography from "../../Typography/Typography";
import styles from "../../Sections/OurCoursesSection/OurCoursesSection.module.scss";
import { textVariant } from "../../../defs/textVariant";
import Button from "../../Button/Button";

interface CalisthenicsDescriptionProps {
  onClickButton: () => void;
}

const CalisthenicsDescription = ({
  onClickButton,
}: CalisthenicsDescriptionProps) => {
  return (
    <>
      <section className={styles.courseDescriptionContainer}>
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          <b style={{ fontWeight: "bold" }}>Imperium Motus</b>, che in latino
          sta a significare{" "}
          <i style={{ fontStyle: "italic" }}>Controllo del movimento</i> nasce
          proprio dalla filosofia del{" "}
          <b style={{ fontWeight: "bold" }}>Calisthenics</b>.
        </Typography>
        <br />
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          Il termine calistenia deriva dal greco Kalòs (bello) e Sthenos (forza)
          e già l&apos;analisi etimologica lascia intendere come la pratica
          dell&apos;allenamento calistenico abbia tra i suoi obiettivi il
          miglioramento sia della performance del soggetto che del suo aspetto
          fisico con il massimo controllo del proprio corpo.
        </Typography>
        <br />
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          {" "}
          Il Calisthenics è l&apos;arte di usare il proprio peso corporeo come
          resistenza per allenarsi e sviluppare il fisico tramite il sistema di
          allenamento basato sulla ginnastica a corpo libero, includendo tutti
          quegli esercizi ginnici atti a sviluppare la bellezza, la forza e
          l&apos;eleganza dei movimenti.
        </Typography>
      </section>
      <Button
        className={styles.modalButton}
        onClick={onClickButton}
        buttonType={"secondary"}
        buttonStyle={"light"}
        label={"Perchè Calisthenics Garage?"}
      />
    </>
  );
};

export default CalisthenicsDescription;
