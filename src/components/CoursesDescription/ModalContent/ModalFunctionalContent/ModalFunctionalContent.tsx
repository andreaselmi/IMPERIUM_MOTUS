import React from "react";
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader";
import styles from "../ModalCalisthenicsContent.module.scss";
import Typography from "../../../Typography/Typography";
import { textVariant } from "../../../../defs/textVariant";
import ModalFooter from "../../../Modal/ModalFooter/ModalFooter";

const ModalFunctionalContent = () => {
  return (
    <>
      <ModalHeader title={"Perchè ginnastica funzionale?"} />
      <Typography variant={textVariant.heading}>
        Storia del fitness funzionale
      </Typography>

      <div className={styles.firstSectionText}>
        <Typography variant={textVariant.paragraph}>
          Il Functional Training (o allenamento funzionale) nasce nei primi anni
          &apos;70 in America come risposta all&apos;uso e all&apos;abuso delle
          attrezzature sportive che tappezzano le palestre di tutto il mondo,
          riportando prepotentemente in primo piano l&apos;efficacia della
          ginnastica a corpo libero o con piccoli attrezzi come i{" "}
          <b style={{ fontWeight: "bold" }}>
            Kettlebell, Suspension trainer, Powerbag
          </b>
          , ecc.
          <br />
          <br />
          Funzionale, perché l&apos;allenamento non deve essere fine a se stesso
          ma deve avere come obiettivo il benessere psico-fisico complessivo.
          Ecco perché gli esercizi che si andranno a compiere non saranno
          finalizzati unicamente a sviluppare i bicipiti, gli addominali o i
          glutei, né a consumare il maggior numero possibile di calorie. Questi{" "}
          <b style={{ fontWeight: "bold" }}>
            risultati, che verranno comunque raggiunti
          </b>
          , non sono l&apos;obiettivo primario dell&apos;allenamento, che è
          invece studiato per creare un armonico equilibrio di tutte le parti
          del corpo.
        </Typography>
      </div>
      <div className={styles.secondSectionText}>
        <Typography variant={textVariant.paragraph}>
          L&apos;allenamento è funzionale perché mette in moto i muscoli in modo
          che sia sempre rispettata la biomeccanica e la fisionomia umana.
          <br />
          <br />
          Funzionale perché migliora (o, nei casi di riabilitazione, ripristina)
          le capacità propriocettive di ciascun individuo, andando a lavorare
          sull&apos;equilibrio e sul modo di rapportarsi su tutti i piani dello
          spazio (sagittale, frontale e orizzontale) con l&apos;ambiente che ci
          circonda.
          <br />
          <br />
          L’allenamento Funzionale mira a rendere le persone{" "}
          <b style={{ fontWeight: "bold" }}>
            più agili, più scattanti, più coordinate
          </b>
          , ma soprattutto più preparate ad affrontare anche i più semplici
          movimenti quotidiani, scongiurando il rischio di incorrere in
          fastidiosi indolenzimenti o veri e propri microtraumi.
          <br />
          <br />
          Funzionale perché è un allenamento di gruppo e ciò fa sì che agisce
          anche a livello psicologico perché trasmette motivazione e rende lo
          sforzo più sopportabile aumentando cosi la performance, lo spirito di
          gruppo e l’umore.
          <br />
          <br />
          Funzionale perché è adatto a tutte le età,{" "}
          <b style={{ fontWeight: "bold" }}>senza limiti</b>.
        </Typography>
      </div>

      <ModalFooter
        label={`L’ ALLENAMENTO è COSI INTERPRETATO, COME UN VIAGGIO ALLA SCOPERTA DEL CORPO UMANO, DELLE SUE CAPACITà E DEI SUOI CONFINI. 
        ATTRAVERSO L’ ALLENAMENTO IL PRATICANTE CONOSCE E CAPISCE IL PROPRIO CORPO, SCOPRE
        I PROPRI LIMITI E IMPARA COME SUPERARLI`}
      />
    </>
  );
};

export default ModalFunctionalContent;
