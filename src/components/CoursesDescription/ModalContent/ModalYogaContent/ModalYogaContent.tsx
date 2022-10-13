import React from "react";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import styles from "../ModalCalisthenicsContent.module.scss";
import Typography from "../../../Typography/Typography";
import { textVariant } from "../../../../defs/textVariant";

const ModalYogaContent = () => {
  return (
    <>
      <ModalHeader title={"Hatha yoga"} />

      <div className={styles.firstSectionText}>
        <Typography variant={textVariant.paragraph}>
          Conosciuto anche come Yoga della forza, agisce sia sul piano fisico
          che su quello psichico-spirituale. Con posizioni semplici ed eseguite
          con calma, unitamente a nozioni di respirazione,rilassamento e
          meditazione, questo stile è perfetto per i principianti, ma viene
          utilizzato anche dai più esperti per trovare un maggior equilibrio.
        </Typography>
      </div>
      <div className={styles.secondSectionText}>
        <Typography variant={textVariant.heading}>I benefici</Typography>

        <ul className={styles.list}>
          <li>
            <Typography variant={textVariant.paragraph}>
              Previene mal di schiena, scoliosi e{" "}
              <span className={styles.underlinedText}>dolori cervicali</span>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Mantiene mobile la colonna vertebrale, le articolazioni e il
              sistema scheletrico e muscolare in generale
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Favorisce il controllo del proprio corpo
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Previene le{" "}
              <span className={styles.underlinedText}>vene varicose</span>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Rafforza i muscoli dell’addome
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Migliora la <span className={styles.underlinedText}>postura</span>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Regolarizza il peso corporeo
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Migliora l’elasticità di tendini e muscoli
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Risveglia la respirazione diaframmatica
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Combatte <span className={styles.underlinedText}>ansia</span>,{" "}
              <span className={styles.underlinedText}>stress cronico</span> e{" "}
              <span className={styles.underlinedText}>attacchi di panico</span>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Aiuta in caso di{" "}
              <span className={styles.underlinedText}>depressione</span>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Combatte l’
              <span className={styles.underlinedText}>insonnia</span>
            </Typography>
          </li>
        </ul>

        <Typography variant={textVariant.heading} style={{ marginBottom: 16 }}>
          Le Controindicazioni
        </Typography>

        <Typography variant={textVariant.paragraph}>
          Per la complessità delle posizioni che richiede, non è adatto in
          gravidanza.
        </Typography>
      </div>
    </>
  );
};

export default ModalYogaContent;
