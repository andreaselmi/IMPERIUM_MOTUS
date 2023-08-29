import React from "react";
import ModalHeader from "../../ModalHeader/ModalHeader";
import styles from "../ModalCalisthenicsContent.module.scss";
import Typography from "../../../Typography/Typography";
import { textVariant } from "../../../../defs/textVariant";
import ModalFooter from "../../ModalFooter/ModalFooter";

const ModalPosturalContent = () => {
  return (
    <>
      <ModalHeader title={"Ginnastica posturale"} />
      <Typography variant={textVariant.paragraph} style={{marginBottom: "40px"}}>
      È considerata uno dei principali strumenti terapeutici in caso di dolori articolari, 
      dolori muscolari e problematiche molto comuni come il dolore alla schiena, l’ernia del disco, 
      la scoliosi e il male alla cervicale. È così nata nel corso degli anni un’enorme attenzione verso questa particolare categoria 
      terapeutica composta essenzialmente da una serie di esercizi posturali.
      </Typography>
      <Typography variant={textVariant.heading}>Cos&apos;è?</Typography>

      <div className={styles.firstSectionText}>
        <Typography variant={textVariant.paragraph}>
        È l’allenamento all&apos;ascolto del proprio corpo, 
        alla concentrazione e alla propriocezione, infatti, permettono di portare ciò che si impara e si sperimenta nella vita di tutti i giorni.
        Ciò comporta che le posizioni corrette apprese durante la pratica diventano sempre più naturali e spontanee, 
        così come diviene sempre più semplice acquisire e mantenere una corretta igiene posturale.
        <br/>
        <br/>
        Lo ginnastica posturale ha, però, il <b style={{ fontWeight: "bold" }}>principale obiettivo di correggere i problemi e gli squilibri posturali;</b> possiamo considerarlo una 
        sorta di derivazione occidentale della pratica originaria, visto che si concentra proprio su quelle posizioni che sfruttano i riflessi neuro muscolari 
        per ripristinare la condizione di equilibrio; in questo modo è possibile combattere un torcicollo, risolvere un mal di schiena, lenire il dolore cervicale e,
        più in generale, acquisire una condizione armonia e di benessere.
        </Typography>
      </div>
      <div className={styles.secondSectionText}>
        <Typography variant={textVariant.heading}>
          A chi è adatta?
        </Typography>
        <Typography variant={textVariant.paragraph} style={{ marginTop: 16 }}>
          I problemi di postura stanno diventando sempre più frequenti a
          qualsiasi età; Per questo la ginnastica terapeutica è adatta per chiunque soffra di squilibri posturali,
          e quindi si rivela perfetta per:
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography variant={textVariant.paragraph}>
              I giovani che passano troppo tempo seduti a una scrivania;
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Gli anziani che hanno le articolazioni un po’ usurate e
              irrigidite;
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Chiunque passa troppo tempo in piedi per lavoro ed è costretto ad
              assumere posizioni scorrette durante la giornata;
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Chi è dovuto stare fermo per tanto tempo e sta affrontando un
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
          <li>
            <Typography variant={textVariant.paragraph}>
              Favorisce la concentrazione
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Aumenta la forza e la calma e combatte la debolezza
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Stimola le ghiandole ormonali
            </Typography>
          </li>
          <li>
            <Typography variant={textVariant.paragraph}>
              Massaggia gli organi interni
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
      <ModalFooter
        footerText="Jim Rohn"
        label={`ABBI BUONA CURA DEL TUO CORPO, E' L'UNICO POSTO IN CUI DEVI VIVERE`}
      />
    </>
  );
};

export default ModalPosturalContent;
