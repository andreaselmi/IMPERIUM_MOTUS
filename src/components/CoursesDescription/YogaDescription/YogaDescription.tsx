import React from "react";
import Typography from "../../Typography/Typography";
import styles from "../../Sections/OurCoursesSection/OurCoursesSection.module.scss";
import { textVariant } from "../../../defs/textVariant";

const YogaDescription = () => {
  return (
    <span role={"contentinfo"}>
      <Typography className={styles.bodyText} variant={textVariant.paragraph}>
        Conosciuto anche come Yoga della forza, agisce sia sul piano fisico che
        su quello psichico-spirituale. Con posizioni semplici ed eseguite con
        calma, unitamente a nozioni di respirazione, rilassamento e meditazione,
        questo stile è perfetto per i principianti, ma viene utilizzato anche
        dai più esperti per trovare un maggior equilibrio.
      </Typography>
      <br />
      <ul>
        <li className={styles.listItem}>
          <Typography
            className={styles.bodyText}
            variant={textVariant.paragraph}
          >
            Previene mal di schiena, scoliosi e dolori cervicali
          </Typography>
        </li>
        <li className={styles.listItem}>
          <Typography
            className={styles.bodyText}
            variant={textVariant.paragraph}
          >
            Mantiene mobile la colonna vertebrale, le articolazioni e il sistema
            scheletrico e muscolare in generale
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
    </span>
  );
};

export default YogaDescription;
