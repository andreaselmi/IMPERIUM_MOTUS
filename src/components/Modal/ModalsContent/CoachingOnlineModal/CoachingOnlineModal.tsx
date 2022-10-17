import React from "react";
import ModalHeader from "../../ModalHeader/ModalHeader";
import styles from "../ModalCalisthenicsContent.module.scss";
import Typography from "../../../Typography/Typography";
import { textVariant } from "../../../../defs/textVariant";

import formIcon from "../../../../assets/icons/form.png";
import videoCallIcon from "../../../../assets/icons/videoCall.png";
import programIcon from "../../../../assets/icons/program.png";
import supportIcon from "../../../../assets/icons/support.png";
import ModalFooter from "../../ModalFooter/ModalFooter";
import Button from "../../../Button/Button";

const CoachingOnlineModal = () => {
  return (
    <>
      <ModalHeader title={"Online Coaching"} />

      <div className={styles.firstSectionText}>
        <Typography variant={textVariant.heading}>A chi è rivolto?</Typography>

        <div className={styles.coachingOnlineSection}>
          <Typography variant={textVariant.paragraph}>
            Il servizio è pensato principalmente per{" "}
            <b style={{ fontWeight: "bold" }}>
              chi vuole iniziare o ha iniziato da poco e per chi ha già buone
              basi
            </b>
            .
          </Typography>

          <ul className={styles.list}>
            <li>
              <Typography variant={textVariant.paragraph}>
                Sei un <b style={{ fontWeight: "bold" }}>calisthenico</b> e vuoi
                migliorare i tuoi allenamenti per raggiungere prima i tuoi
                risultati, senza stal li e senza infortuni
              </Typography>
            </li>
            <li>
              <Typography variant={textVariant.paragraph}>
                Sei un{" "}
                <b style={{ fontWeight: "bold" }}>
                  appassionato di allenamento a corpo libero
                </b>{" "}
                e vuoi dei consigli su come impostare al meglio il tuo
                allenamento
              </Typography>
            </li>
            <li>
              <Typography variant={textVariant.paragraph}>
                Sei un <b style={{ fontWeight: "bold" }}>calisthenico</b> e vuoi
                imparare esercizi di livello intermedio-avanzato.
              </Typography>
            </li>
          </ul>
        </div>

        <Typography variant={textVariant.heading}>
          Quali vantaggi puoi ottenere con una consulenza tecnica online?
        </Typography>
        <div className={styles.coachingOnlineSection}>
          <Typography variant={textVariant.paragraph}>
            Il servizio proposto prevede il raggiungimento di{" "}
            <b style={{ fontWeight: "bold" }}> elevati standard di qualità</b>{" "}
            tramite un{" "}
            <b style={{ fontWeight: "bold" }}>
              continuo interscambio di materiale fra cliente e personal trainer
            </b>{" "}
            in modo da controllare la corretta esecuzione degli esercizi.
            <br />
            <br />
            Il percorso proposto sarà composto in un primo momento da{" "}
            <b style={{ fontWeight: "bold" }}>
              esercizi di preparazione generale
            </b>{" "}
            volti ad acquisire una{" "}
            <b style={{ fontWeight: "bold" }}>ottima propriocezione</b> per
            eseguire in modo sicuro ed efficace gli esercizi proposti.
            <br />
            <br />
            Questi esercizi hanno lo scopo di{" "}
            <b style={{ fontWeight: "bold" }}>
              creare basi solide in un percorso personalizzato e graduale
            </b>
            , che mette al{" "}
            <b style={{ fontWeight: "bold" }}>primo posto sempre la salute</b>
            del cliente ed il suo benessere fisico e poi il raggiungimento di
            esercizi via via più complessi.
          </Typography>
        </div>
      </div>

      <div className={styles.secondSectionText}>
        <div className={styles.coachingOnlinePhases}>
          <Typography variant={textVariant.heading}>
            Fasi del coaching
          </Typography>

          <div className={styles.coachingOnlineFieldWithIcon}>
            <div className={styles.iconContainer}>
              <img src={formIcon} alt={"Icona di compilazione form"} />
            </div>
            <div className={styles.coachingOnlineFieldWithIconTextContainer}>
              <Typography variant={textVariant.smallTitle}>
                Richiesta e consulenza
              </Typography>{" "}
              <Typography variant={textVariant.smallParagraph}>
                Una volta inviata la candidatura via email verrai contattato dal
                nostro staff tramite chiamata telefonica, WhatsApp o Telegram.
                Per individuare meglio il tuo livello atletico, ti verranno
                assegnati dei test da svolgere e prefisserete un appuntamento
                con il coach per andare a lavorare sui test svolti.
              </Typography>
            </div>
          </div>
          <div className={styles.coachingOnlineFieldWithIcon}>
            <div className={styles.iconContainer}>
              <img src={videoCallIcon} alt={"Icona di un computer"} />
            </div>
            <div className={styles.coachingOnlineFieldWithIconTextContainer}>
              <Typography variant={textVariant.smallTitle}>
                Lezione tramite videochiamata
              </Typography>{" "}
              <Typography variant={textVariant.smallParagraph}>
                La lezione è individuale, verrà effettuata tramite l’App zoom ed
                avrà la durata di 1 ora.
              </Typography>
            </div>
          </div>
          <div className={styles.coachingOnlineFieldWithIcon}>
            <div className={styles.iconContainer}>
              <img src={programIcon} alt={"Icona di un taccuino"} />
            </div>
            <div className={styles.coachingOnlineFieldWithIconTextContainer}>
              <Typography variant={textVariant.smallTitle}>
                Consegna del programma
              </Typography>{" "}
              <Typography variant={textVariant.smallParagraph}>
                Il programma vi verrà inviato completo di mini video lezioni in
                cui ci sarà la spiegazione degli esercizi che dovrai andare a
                svolgere.
              </Typography>
            </div>
          </div>
          <div className={styles.coachingOnlineFieldWithIcon}>
            <div className={styles.iconContainer}>
              <img src={supportIcon} alt={"Icona di uno smartphone"} />
            </div>
            <div className={styles.coachingOnlineFieldWithIconTextContainer}>
              <Typography variant={textVariant.smallTitle}>Supporto</Typography>{" "}
              <Typography variant={textVariant.smallParagraph}>
                Durante il percorso di coaching, ogni settimana, dovrai inviare
                il video con esecuzione di ogni esercizio. Riceverai supporto
                tramite whatsapp o telegram per risolvere i tuoi dubbi e
                ricevere eventuali correzioni.
              </Typography>
            </div>
          </div>
        </div>
        <Typography
          className={styles.coachingOnlineHighlightedText}
          variant={textVariant.paragraph}
        >
          Ricordiamo che il percorso prevede la lezione individuale, non lezioni
          collettive.
        </Typography>
        <Typography variant={textVariant.paragraph}>
          Una volta inviata la candidatura, se ritenuta idonea, lo Staff ti
          indicherà le prime disponibilità per iniziare il percorso.
          <br />
          <br />
          Il percorso è accessibile a qualsiasi livello, partendo da 0 fino ai
          movimenti più avanzati su un braccio, a condizione che ci sia{" "}
          <b style={{ fontWeight: "bold" }}>impegno, serietà, costanza</b> e si
          rispettino i requisiti del percorso presentati durante la consulenza.
          <br />
          <br />
          In questa esperienza riceverai il{" "}
          <b style={{ fontWeight: "bold" }}>massimo</b>, ma dovrai anche dare il
          massimo!
        </Typography>
      </div>

      <ModalFooter
        style={{ marginBottom: 60 }}
        label={
          "NON è IMPORTANTE IL LIVELLO MA SONO DETERMINANTI GLI OBIETTIVI, DISPONIBILITA' DI ALLENAMENTO E costanza"
        }
      />

      <a
        target={"_blank"}
        href={"https://forms.gle/oDufrxyNJfhZixGz7"}
        rel="noreferrer"
        style={{ margin: "0 auto 20px" }}
      >
        <Button label={"Compila la candidatura"} />
      </a>
    </>
  );
};

export default CoachingOnlineModal;
