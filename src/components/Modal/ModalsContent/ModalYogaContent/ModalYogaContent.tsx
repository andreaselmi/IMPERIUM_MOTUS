import React from "react";
import ModalHeader from "../../ModalHeader/ModalHeader";
import styles from "../ModalCalisthenicsContent.module.scss";
import Typography from "../../../Typography/Typography";
import { textVariant } from "../../../../defs/textVariant";

const ModalYogaContent = () => {
  return (
    <>
      <ModalHeader title={"Yoga Posturale"} />

      <div className={styles.firstSectionText}>
        <Typography variant={textVariant.paragraph}>
          È forse limitante parlare di yoga posturale perché, in effetti, tutto
          lo yoga è adatto per mantenere una corretta postura. L’allenamento
          all’ascolto del proprio corpo, alla concentrazione, alla
          propriocezione e alla meditazione, infatti, permettono di portare ciò
          che si impara e si sperimenta sul tappetino anche nella vita di tutti
          i giorni; ciò comporta che le posizioni corrette apprese durante la
          pratica diventano sempre più naturali e spontanee, così come diviene
          sempre più semplice acquisire e mantenere una corretta igiene
          posturale. Lo yoga posturale ha, però, il principale obiettivo di
          correggere i problemi e gli squilibri posturali; possiamo considerarlo
          una sorta di derivazione occidentale della pratica originaria, visto
          che si concentra proprio su quelle posizioni che sfruttano i riflessi
          neuro muscolari per ripristinare la condizione di equilibrio; in
          questo modo è possibile combattere un torcicollo, risolvere un mal di
          schiena, lenire il{" "}
          <b style={{ fontWeight: "bold" }}>dolore cervicale</b> e, più in
          generale, acquisire una condizione armonia e di benessere. Ovviamente
          anche lo yoga posturale, sebbene abbia una vocazione più fisica,
          mantiene anche la componente spirituale; non mancano infatti gli asana
          dedicati al rilassamento e alla concentrazione e gli esercizi di
          respirazione. Da aggiungere, per concludere, che lo yoga posturale si
          rivela perfetto anche quando si deve recuperare la condizione fisica
          dopo un incidente o un’operazione; possiamo quindi considerarlo una
          forma base dello{" "}
          <b style={{ fontWeight: "bold" }}>yoga terapeutico</b>.
        </Typography>
      </div>
      <div className={styles.secondSectionText}>
        <Typography variant={textVariant.heading}>
          Yoga posturale: a chi è adatto
        </Typography>
        <Typography variant={textVariant.paragraph} style={{ marginTop: 16 }}>
          I problemi di postura stanno diventando sempre più frequenti a
          qualsiasi età; secondo recenti studi il della popolazione mondiale
          soffre di mal di schiena e non è così azzardato affermare che si
          tratta di uno dei problemi principali dell’era moderna.
        </Typography>
        <br />
        <Typography variant={textVariant.paragraph}>
          Per questo lo yoga terapeutico è adatto per chiunque soffra di
          squilibri posturali, e quindi si rivela perfetto per:
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography variant={textVariant.paragraph}>
              i giovani che passano troppo tempo seduti a una scrivania;
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              gli anziani che hanno le articolazioni un po’ usurate e
              irrigidite;
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              chiunque passa troppo tempo in piedi per lavoro ed è costretto ad
              assumere posizioni scorrette durante la giornata;
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              chi è dovuto stare fermo per tanto tempo e sta affrontando un
              percorso riabilitativo.
            </Typography>
          </li>
        </ul>

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
