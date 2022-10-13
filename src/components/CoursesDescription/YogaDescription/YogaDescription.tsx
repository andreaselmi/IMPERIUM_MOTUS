import React from "react";
import Typography from "../../Typography/Typography";
import styles from "../../Sections/OurCoursesSection/OurCoursesSection.module.scss";
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
          Conosciuto anche come Yoga della forza, agisce sia sul piano fisico
          che su quello psichico-spirituale. Con posizioni semplici ed eseguite
          con calma, unitamente a nozioni di respirazione, rilassamento e
          meditazione, questo stile è perfetto per i principianti, ma viene
          utilizzato anche dai più esperti per trovare un maggior equilibrio.
        </Typography>
        <br />
        <ul>
          <li className={styles.listItem}>
            <Typography
              className={styles.bodyText}
              variant={textVariant.paragraph}
            >
              Previene mal di schiena, scoliosi edolori cervicali
            </Typography>
          </li>
          <li className={styles.listItem}>
            <Typography
              className={styles.bodyText}
              variant={textVariant.paragraph}
            >
              Mantiene mobile la colonna vertebrale, le articolazioni e il
              sistema scheletrico e muscolare in generale
            </Typography>
          </li>
          <li className={styles.listItem}>
            <Typography
              className={styles.bodyText}
              variant={textVariant.paragraph}
            >
              Favorisce il controllo del proprio corpo
            </Typography>
          </li>
          <li className={styles.listItem}>
            <Typography
              className={styles.bodyText}
              variant={textVariant.paragraph}
            >
              Previene le vene varicose
            </Typography>
          </li>
        </ul>
      </section>
      <Button
        className={styles.modalButton}
        onClick={onClickButton}
        buttonType={"secondary"}
        buttonStyle={"light"}
        label={"Scopri di più"}
      />
    </>
  );
};

export default YogaDescription;
