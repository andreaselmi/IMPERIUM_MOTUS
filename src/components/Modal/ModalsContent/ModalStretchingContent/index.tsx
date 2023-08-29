import React from "react";
import ModalHeader from "../../ModalHeader/ModalHeader";
import styles from "../ModalCalisthenicsContent.module.scss";
import Typography from "../../../Typography/Typography";
import { textVariant } from "../../../../defs/textVariant";

const ModalStretchingContent = () => {
  return (
    <>
      <ModalHeader title={"Stretching"} />
      <Typography variant={textVariant.paragraph} style={{marginBottom: "40px"}}>
        È una pratica attraverso la quale poniamo in allungamento le nostre strutture muscolari, tendinee, ossee e nervose. 
        Ogni posizione può essere diversa dall’altra, ma alla base c’è una pratica che pone il corpo in posizioni di allungamento atte a migliorare la flessibilità di una o più muscolature.
      </Typography>
      <Typography variant={textVariant.heading}>PERCHÉ FARE STRETCHING?</Typography>

      <div className={styles.firstSectionText}>
        <Typography variant={textVariant.paragraph}>
            Perchè fa bene, perché migliora la performance, e poi lo si è sempre fatto, lo fanno i giocatori di calcio prima d’entrare in campo, lo fanno tutti gli altri sportivi prima e dopo l’allenamento, lo fai a pilates ed a yoga.
        </Typography>
      </div>
      <div className={styles.secondSectionText}>
        <Typography variant={textVariant.heading}>
            Quali sono gli effetti benefici dello stretching?
        </Typography>
        <Typography variant={textVariant.paragraph} style={{ marginTop: 16 }}>
            Una regolare attività di stretching può portare numerosi benefici, tra i quali:
            <br/>
            <br/>
            <ol>
                <li>
                    1. Miglior mobilità articolare e salute delle articolazioni.
                </li>
                <li>
                    2. Più libertà di movimento
                </li>
                <li>
                    3. Minor rischio di incorrere in infortuni
                </li>
                <li>
                    4. Aumento delle performance
                </li>
            </ol>
            <br/>
            
            Questi 4 punti sono punti che meritano in ogni caso un approfondimento perchè a seconda del contesto possono essere più o meno veri.
         </Typography>
      </div>
      <div className={styles.secondSectionText}>
        <Typography style={{marginBottom: "16px"}} variant={textVariant.heading}>Lo stretching migliora la mobilità articolare e la salute delle articolazioni.</Typography>
        <Typography variant={textVariant.paragraph}>
            Questo è sicuramente vero visto che per mobilità articolare intendiamo la capacità di muovere una determinata articolazione attraverso il suo range di movimento, 
            e se questa articolazione non gode di buona flessibilità (qualità allenabile attraverso lo stretching) sarà impossibile muoverla in maniera consona.
            <br/>
            <br/>
            Da quì deriva che una articolazione in salute sarà di sicuro una articolazione anche flessibile visto che questa qualità le permetterà di muoversi nel corso del tempo: 
            dovesse perdere flessibilità, potrebbe essere meno in grado di muoversi.
        </Typography>
      </div>
      <div className={styles.secondSectionText}>

        <Typography style={{marginBottom: "16px"}} variant={textVariant.heading}>Lo stretching garantisce più libertà di movimento..</Typography>
        <Typography variant={textVariant.paragraph}>
            Molto spesso non si riesce a muovere il proprio corpo per dei limiti di flessibilità che non ci consentono di esprimere un determinato gesto sportivo o movimento di vita quotidiana. 
            L’allungamento muscolare in questo senso può migliorare la flessibilità delle articolazioni, consentendoci di preservarle nella miglior maniera possibile nel tempo.
        </Typography>
        </div>

        <div className={styles.secondSectionText}>

        <Typography style={{marginBottom: "16px"}} variant={textVariant.heading}>Minor rischio di incorrere in infortuni.</Typography>
        <Typography variant={textVariant.paragraph}>
            La probabilità di incorrere in infortuni può dipendere, in una sua piccola parte, dall’equilibrio delle forze che agiscono su una data articolazione. 
            Se queste forze muscolari non sono bilanciate, ed una parte è spropositamente più rigida dell’altra o delle altre, l’articolazione sarà inevitabilmente non in equilibrio, 
            esponendosi così ad un rischio di infortunio.
            <br/>
            <br/>
            Mantenere un buono stato di allungamento muscolare può prevenire queste condizioni e quindi porre il corpo al riparo da infortuni, 
            anche se è assolutamente necessario dire che questa può essere una causa, ma non la sola ed unica causa di infortuni.
        </Typography>
        </div>

        <div className={styles.secondSectionText}>

        <Typography style={{marginBottom: "16px"}} variant={textVariant.heading}>Aumento della performance.</Typography>
        <Typography variant={textVariant.paragraph}>
            Questo dipende. 
            Dipende di che performance parliamo. 
            Se come attività sportiva si praticano discipline dove è richiesto un ottimo livello di flessibilità 
            (arti marziali, ginnastica, yoga, calisthenics, ecc.) allora un aumento della flessibilità andrà sicuramente ad agire in modo positivo sulla performance. 
            Se si parla di performance di forza dove è richiesto un grande impegno muscolo/neurale nell’immediato invece, 
            lo stretching non aumenta la performance ma anzi sembra diminuirla, visto che un allungamento di tipo passivo e sostenuto per diversi secondi subito prima 
            di una performance di forza possa inibire la contrazione muscolare e portare a dei cali di performance.
        </Typography>
        </div>

        <div className={styles.secondSectionText}>
            <Typography variant={textVariant.paragraph}>
                Per concludere, lo stretching può essere un ottimo alleato per la costruzione di un corpo sano e flessibile nel tempo, 
                con dei benefici tremendi non solo da un punto di vista prestativo ma anche salutare, 
                visto che avere una buona mobilità articolare può giovare a qualunque età ed in qualunque disciplina, anzi, direi che ne è la base!
                </Typography>
        </div>
    </>
  );
};

export default ModalStretchingContent;
