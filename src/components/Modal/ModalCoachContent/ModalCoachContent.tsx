import React from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import styles from "../ModalCalisthenicsContent/ModalCalisthenicsContent.module.scss";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";
import ModalFooter from "../ModalFooter/ModalFooter";

const ModalCoachContent = () => {
  return (
    <>
      <ModalHeader title={"Il coach"} />
      <div className={styles.firstSectionText}>
        <Typography variant={textVariant.paragraph} label={""}>
          <p>
            Ciao, sono Alessandro Lupo, giovane atleta e Istruttore di
            Calisthenics.
          </p>

          <br />
          <Typography
            variant={textVariant.paragraph}
            label={
              "Ho scoperto questa disciplina nel 2012 all'età di 21 anni da autodidatta dopo aver trascorso in sala pesi molti anni e dopo aver provato vari sport nell’ arco della mia adolescenza."
            }
          />
          <br />
          <Typography variant={textVariant.paragraph} label={""}>
            <p>
              Ho frequentato l&apos;Università degli Studi di L&apos;Aquila
              iscrivendomi alla facoltà di Scienze Motorie per arricchire le mie
              conoscenze e per fare della mia passione anche una professione. Da
              sempre appassionato al mondo della ginnastica artistica, al primo
              anno di università iniziai ad approcciarmi all&apo;allenamento
              calistenico, perché mi dava la sensazione di poter superare
              qualsiasi limite mentale.
            </p>
          </Typography>
          <br />
          <Typography
            variant={textVariant.paragraph}
            label={
              "Quando ho iniziato questo sport erano molto pochi gli atleti in circolazione e con potenzialità veramente incredibili e l’unica voce che gridava nella mia testa era “Se loro riescono a farlo, posso farlo anch’io”."
            }
          />
          <br />
        </Typography>{" "}
        <Typography variant={textVariant.paragraph} label={""}>
          <p>
            Sono ormai più di nove anni che pratico questo sport, diventato
            ormai una disciplina sempre più diffusa e sempre più studiata tanto
            che si sono migliorate tantissimo le tecniche di allenamento
            eliminando tante controindicazioni presenti in passato. É un tipo di
            allenamento adatto a tutti che prevede il raggiungimento di abilità
            atletiche a corpo libero volto al potenziamento della forza, della
            resistenza, dell&apos;equilibrio, e delle abilità isometriche oltre
            che dinamiche; mi ha insegnato quanto funzionale può essere il
            nostro corpo e che non c’è nulla che realmente non si può fare con
            disciplina, impegno e dedizione.
          </p>
        </Typography>
      </div>

      <div className={styles.secondSectionText}>
        <Typography variant={textVariant.paragraph} label={""}>
          <p>
            Dopo anni di sacrifici, e grazie al supporto e alla fiducia che sin
            da sempre i miei allievi hanno riposto in me, ho avuto finalmente la
            possibilità di realizzare il sogno di aprire il mio primo studio di
            Personal Trainer. Mi auguro, perciò, che questo sia uno stimolo per
            chi vorrà darsi un&apos;occasione e la possibilità di mettere alla
            prova il proprio corpo superando i propri limiti e che possa
            affiancarmi in questo mio percorso di vita.
          </p>
        </Typography>
        <br />
        <Typography
          variant={textVariant.paragraph}
          label={
            "Ti aspetto, non vedo l’ora di conoscerti e di lavorare al tuo fianco per far si che tu possa raggiungere i tuoi obiettivi."
          }
        />
      </div>

      <ModalFooter
        label={
          "Solo chi rischia di andare troppo lontano avrà la possibilità di scoprire quanto lontano si può andare"
        }
        footerText={"T.S. Elliot"}
      />
    </>
  );
};

export default ModalCoachContent;
