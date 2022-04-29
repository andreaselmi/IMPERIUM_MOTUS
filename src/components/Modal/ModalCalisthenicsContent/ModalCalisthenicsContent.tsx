import React from "react";
import Typography from "../../Typography/Typography";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalFooter from "../ModalFooter/ModalFooter";
import styles from "./ModalCalisthenicsContent.module.scss";
import { textVariant } from "../../../defs/textVariant";

const ModalCalisthenicsContent = () => {
  return (
    <>
      <ModalHeader title={"Perchè CALISTHENICS GARAGE?"} />

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

      <ModalFooter
        label={
          "NON DEVI ESSERE BRAVO PER INIZIARE MA DEVI INIZIARE PER POTER ESSERE BRAVO."
        }
      />
    </>
  );
};

export default ModalCalisthenicsContent;
