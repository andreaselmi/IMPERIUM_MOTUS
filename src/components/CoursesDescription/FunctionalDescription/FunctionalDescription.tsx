import React from "react";
import Typography from "../../Typography/Typography";
import styles from "../CoursesDescription.module.scss";
import { textVariant } from "../../../defs/textVariant";
import Button from "../../Button/Button";

interface FunctionalDescriptionProps {
  onClickButton: () => void;
}

const FunctionalDescription = ({
  onClickButton,
}: FunctionalDescriptionProps) => {
  return (
    <>
      <section className={styles.courseDescriptionContainer}>
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          L&apos;allenamento è funzionale perché mette in moto i muscoli in modo
          che sia sempre rispettata la biomeccanica e la fisionomia umana.
        </Typography>
        <br />
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          Funzionale perché migliora (o, nei casi di riabilitazione, ripristina)
          le capacità propriocettive di ciascun individuo, andando a lavorare
          sull&apos;equilibrio e sul modo di rapportarsi su tutti i piani dello
          spazio (sagittale, frontale e orizzontale) con l&apos;ambiente che ci
          circonda.
        </Typography>
        <br />
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          L&apos;allenamento Funzionale mira a rendere le persone{" "}
          <b style={{ fontWeight: "bold" }}>
            più agili, più scattanti, più coordinate
          </b>
          , ma soprattutto più preparate ad affrontare anche i più semplici
          movimenti quotidiani, scongiurando il rischio di incorrere in
          fastidiosi indolenzimenti o veri e propri microtraumi.
        </Typography>
        <Button
          className={styles.modalButton}
          onClick={onClickButton}
          buttonType={"secondary"}
          buttonStyle={"light"}
          label={"Perchè Ginnastica Funzionale?"}
        />
      </section>
    </>
  );
};

export default FunctionalDescription;
