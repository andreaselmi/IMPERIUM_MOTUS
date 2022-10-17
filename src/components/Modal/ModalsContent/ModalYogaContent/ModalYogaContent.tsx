import React from "react";
import ModalHeader from "../../ModalHeader/ModalHeader";
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
              <a
                rel="noreferrer"
                href={
                  "https://www.tuttogreen.it/cervicalgia-prevenzione-rimedi/"
                }
                target={"_blank"}
                className={styles.underlinedText}
              >
                dolori cervicali
              </a>
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
              <a
                rel="noreferrer"
                href={
                  "https://www.tuttogreen.it/vene-varicose-rimedi-naturali/"
                }
                target={"_blank"}
                className={styles.underlinedText}
              >
                vene varicose
              </a>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Rafforza i muscoli dell’addome
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Migliora la{" "}
              <a
                rel="noreferrer"
                href={"https://www.tuttogreen.it/adottare-postura-corretta/"}
                target={"_blank"}
                className={styles.underlinedText}
              >
                postura
              </a>
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
              Combatte{" "}
              <a
                rel="noreferrer"
                href={
                  "https://www.tuttogreen.it/come-combattere-l-ansia-sintomi-rimedi/"
                }
                target={"_blank"}
                className={styles.underlinedText}
              >
                ansia
              </a>
              ,{" "}
              <a
                rel="noreferrer"
                href={
                  "https://www.tuttogreen.it/rimedi-naturali-per-lo-stress/"
                }
                target={"_blank"}
                className={styles.underlinedText}
              >
                stress cronico
              </a>{" "}
              e{" "}
              <a
                rel="noreferrer"
                href={
                  "https://www.tuttogreen.it/attacchi-di-panico-sintomi-rimedi-e-consigli-per-prevenirli/"
                }
                target={"_blank"}
                className={styles.underlinedText}
              >
                attacchi di panico
              </a>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Aiuta in caso di{" "}
              <a
                rel="noreferrer"
                href={
                  "https://www.tuttogreen.it/come-curare-la-depressione-sintomi-cause/"
                }
                target={"_blank"}
                className={styles.underlinedText}
              >
                depressione
              </a>
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Combatte l’
              <a
                rel="noreferrer"
                href={"https://www.tuttogreen.it/rimedi-naturali-insonnia/"}
                target={"_blank"}
                className={styles.underlinedText}
              >
                insonnia
              </a>
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
