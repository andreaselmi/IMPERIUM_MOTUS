import React from "react";
import Typography from "../../Typography/Typography";
import styles from "../CoursesDescription.module.scss";
import { textVariant } from "../../../defs/textVariant";
import Button from "../../Button/Button";

interface YogaDescriptionProps {
  onClickButton: () => void;
}

const YogaDescription = ({ onClickButton }: YogaDescriptionProps) => {
  return (
    <>
      <section className={styles.courseDescriptionContainer}>
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          I problemi di postura stanno diventando sempre più frequenti a
          qualsiasi età; secondo recenti studi il della popolazione mondiale
          soffre di mal di schiena e non è così azzardato affermare che si
          tratta di uno dei problemi principali dell’era moderna.
        </Typography>
        <br />
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
          Per questo lo yoga terapeutico è adatto per chiunque soffra di
          squilibri posturali,e quindi si rivela perfetto per:
        </Typography>
        <Button
          className={styles.modalButton}
          onClick={onClickButton}
          buttonType={"secondary"}
          buttonStyle={"light"}
          label={"Scopri di più"}
        />
      </section>
    </>
  );
};

export default YogaDescription;
