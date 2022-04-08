import React from "react";
import styles from "./ModalCalisthenics.module.scss";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";
import quotesIcon from "../../../assets/icons/quotes.svg";

const ModalCalisthenics = () => {
  return (
    <>
      <header className={styles.contentHeader}>
        <Typography
          variant={textVariant.heading}
          label={"Perché CALISTHENICS GARAGE?"}
        />
      </header>

      <div className={styles.firstSectionText}>
        <Typography
          variant={textVariant.paragraph}
          label={
            "Prima di aprire il mio primo Studio di Calisthenics, abbiamo trascorso, insieme ad amici e tanti ragazzi che si sono uniti poi succesivamente nel team, circa 7 anni ad allenarci nel mio garage."
          }
        />
        <br />
        <Typography
          variant={textVariant.paragraph}
          label={
            'Negli anni mi sono fatto seguire sempre da vari Coach per poter imparare e migliorare sempre nuove tecniche di allenamento. Tutto ciò che imparavo sia dai trainer e sia dai tantissimi libri letti negli ultimi anni lo tramandavo ai miei compagni nei vari parchi attrezzati. C’era talmente tanta voglia di imparare, che ci si allenava in qualunque condizione metereologica, freddo, caldo, pioggia o neve. A volte però l’attrezzatura a disposizione era poca o rotta, cosi decisi di allestire il mio garage con attrezzatura fai da te, qualche ruota e corda recuperata qua e la, panche di legno costruite con il nonno e la home gym è fatta."'
          }
        />
      </div>
      <br />
      <div className={styles.secondSectionText}>
        <Typography
          variant={textVariant.paragraph}
          label={
            "Imperium Motus ha scelto di mantenere il nome Calisthenics Garage aprendo il primo centro di Calisthenics nel rione Castromediano, a Cavallino, semplicemente trasferendo dal Garage tutto il nostro impegno e la nostra passione per questo sport, ma soprattutto cercando di mantenere la stessa energia e atmosfera che si è creata in ogni gruppo e con ognuno dei ragazzi e ragazze, tra risate e sudate."
          }
        />
        <br />
        <Typography
          variant={textVariant.paragraph}
          label={
            "Allenarsi nello Studio Imperium Motus è come allenarsi nel proprio garage con amici e amiche, ci piace coccolarvi facendovi sentire come se stesse a casa vostra e prefissare insieme degli obiettivi raggiungibili."
          }
        />
        <br />
        <Typography variant={textVariant.paragraph} label={"Ti aspetto."} />
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContentContainer}>
          <div className={styles.footerTextContainer}>
            <img
              className={styles.quotes}
              src={quotesIcon}
              alt={"Virgolette"}
            />
            <Typography
              style={{ lineHeight: "150%" }}
              variant={textVariant.quotes}
              label={
                "NON DEVI ESSERE BRAVO PER INIZIARE MA DEVI INIZIARE PER POTER ESSERE BRAVO."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCalisthenics;
