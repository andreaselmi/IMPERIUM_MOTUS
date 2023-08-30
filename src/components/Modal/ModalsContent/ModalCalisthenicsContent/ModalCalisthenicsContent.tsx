import React from "react";
import Typography from "../../../Typography/Typography";
import ModalHeader from "../../ModalHeader/ModalHeader";
import ModalFooter from "../../ModalFooter/ModalFooter";
import styles from "../ModalCalisthenicsContent.module.scss";
import { textVariant } from "../../../../defs/textVariant";

const ModalCalisthenicsContent = () => {
  return (
    <>
      <ModalHeader title={"CALISTHENICS GARAGE"} />
      <div className={styles.firstSectionText}>
        <Typography style={{marginBottom: "16px"}} variant={textVariant.heading}>
          Uno sport per tutti
        </Typography>
        <Typography variant={textVariant.paragraph}>
          Uomini e donne, giovani e meno giovani: il calisthenics è una disciplina che presenta poche controindicazioni, è per tutti. 
          Anche per chi si avvicina all&apos;attività fisica per la prima volta dopo una vita sedentaria, a condizione di imparare gli esercizi in modo corretto e procedere per gradi.
          <br/>
          <br/>
          Anche le donne possono praticarlo con soddisfazione, visto che è un allenamento completo e che regala un fisico armonioso, senza eccessi e squilibri.
          <br/>
          <br/>
          Importante: l&apos;obiettivo da perseguire è il benessere, quindi è fondamentale conoscere i propri punti deboli e tutelarli, per non incorrere in problemi muscolari, articolari o dei tendini.
          Attenzione anche a non sottovalutare eventuali chili in eccesso: se sono molti, possono creare problemi, visto che si lavora con il peso del proprio corpo come carico.
          <br/>
          <br/>
          Come ho già accennato, il calisthenics usa il peso corporeo dell&apos;atleta come resistenza e dunque lo trasforma in uno strumento per allenarsi attraverso movimenti come tirare (pull),
          spingere (push), piegare (bend), saltare (jump), oscillare (swing). Gli esercizi hanno l&apos;obiettivo di aumentare la forza e allo stesso tempo sviluppare flessibilità e mobilità articolare, 
          migliorando anche la coordinazione. Prevede sequenze a corpo libero ma anche agli attrezzi, come sbarre, parallele, anelli. Il lavoro a carico naturale permette di migliorare le proprie capacità motorie
          e l&apos;apparato muscolo-scheletrico in un modo divertente, che porta a grandi soddisfazioni. 
          Man mano che si progredisce si possono infatti inserire nuove skills, ovvero nuovi esercizi sempre più sfidanti: nel calisthenics avanzato si arrivano a fare figure anche spettacolari, sia statiche che dinamiche. 
          E per questo spesso le persone si fermano ad ammirare gli atleti calistenici che si allenano nei parchi. 
          Tuttavia si tratta di un allenamento perfetto per i principianti, perché prevede un lavoro modulare e progressivo: 
          l&apos;importante è iniziare con gradualità, partendo con gli esercizi base per poi avanzare salendo di livello e complessità, in modo da evitare il rischio di infortuni.
          <br/>
          <br/>
          Io credo che questa disciplina, se fatta bene, sia una delle migliori attività sportive per chiunque. Nasce come una forma di allenamento semplice, 
          che non ha bisogno di spazi particolari né di alcuna sovrastruttura. Di base, infatti, l&apos;unica cosa necessaria per eseguire la quasi totalità degli esercizi è il proprio corpo. 
          Lo si può fare da soli, in pochi metri quadri di spazio, ma anche i pochi attrezzi utili per le sequenze più avanzate sono tutti facilmente reperibili ed economici.
        </Typography>
      </div>

      <div style={{marginTop: 40}} className={styles.firstSectionText}>
        <Typography variant={textVariant.heading}>
          STORIA DEL CALISTHENICS
        </Typography>
        <Typography style={{fontWeight: "bold", margin: "16px 0"}} variant={textVariant.paragraph}>Dalle termopili al parchetto dietro casa</Typography>
        <Typography variant={textVariant.paragraph}>
          C&apos;è chi sostiene che i primi esercizi calistenici della storia siano stati ideati dai guerrieri spartani del re Leonida, che si allenavano cosi alla vigilia della battaglia delle Termopili (come si vede nel film 300). 
          Anche nelle scuole dei gladiatori dell&apos;antica Roma non mancavano workout a corpo libero simili a quelli odierni.
          <br/>
          <br/>
          La disciplina moderna è però nata negli Stati Uniti all&apos;inizio degli anni Duemila, come versione da strada della ginnastica artistica che sfruttava elementi dell&apos;arredo urbano come attrezzi. 
          Il calisthenics è dunque figlio naturale della ginnastica artistica? Si, sono due mondi molto vicini: basta pensare agli esercizi di base della ginnastica artistica, 
          così come ad alcune delle evoluzioni più caratterizzanti del calisthenics e agli attrezzi utilizzati (sbarre, parallele, anelli).
          <br/>
          <br/>
          Certo, l&apos;estetica non potrebbe essere più lontana: tanto la ginnastica artistica appare elegante, con le sue giurie in giacca e cravatta, 
          quanto il calisthenics che si diffonde nelle strade d&apos;oltreoceano è bello sì, ma povero e sporco, nato come strumento di emancipazione sociale di collettivi di ragazzi, 
          spesso ex detenuti, che cercano redenzione attraverso l&apos;allenamento a corpo libero nei parchi.
          <br/>
          <br/>
          Il carcere è stata veramente la culla del calisthenics made in Usa: pare che alcuni prigionieri, in mancanza di ogni tipo di attrezzatura, 
          abbiano iniziato ad adattare l&apos;allenamento a corpo libero agli spazi ristretti delle celle e dei cortili durante l&apos;ora d&apos;aria. 
          Lo testimonia il motto di una delle crew di quegli anni (2002-2003), i Ruff Ryders: «Make sure you hang around the right bars, so you don&apos;t wind up behind the wrong bars».
          Tradotto in italiano: «Assicurati di appenderti alle sbarre giuste per non finire dietro le sbarre sbagliate».
          <br/>
          <br/>
          Sarà poi Youtube a trasformare le evoluzioni di questi piccoli collettivi urbani in un fenomeno mondiale. Nel 2008 Hannibal For King, un gigante di colore di più di 80 chili di peso, 
          inizia a pubblicare alcuni video ambientati in un parchetto di New York: dips, pull-up, bent planche, front lever, L-sit e altre skills del calisthenics diventano virali, con milioni di visualizzazioni. 
          Seguono i video di altri gruppi di atleti, caratterizzati da stili diversi ma con obiettivi simili: oltre a salvare dalla criminalità giovani a rischio, combattere il diffuso problema dell&apos;obesità.
          <br/>
          <br/>
          Anche in Italia il calisthenics prende sempre più piede: singoli atleti o gruppi di appassionati diffondono la pratica, ritrovandosi nei parchi, postando i loro video sui social. 
          Con la pandemia e il lockdown il fenomeno esplode, grazie alla possibilità di praticare la disciplina in piccoli spazi e con attrezzi economici.
        </Typography>
      </div>

      <div style={{marginTop:16}} className={styles.firstSectionText}>
        <Typography style={{marginBottom: 16}} variant={textVariant.heading}>
          PERCHE CALISTHENICS GARAGE?
        </Typography>
        <Typography variant={textVariant.paragraph}>
          {" "}
          Prima di aprire il mio primo Studio di Calisthenics, abbiamo
          trascorso, insieme ad amici e tanti ragazzi che si sono uniti poi
          succesivamente nel team, circa 7 anni ad{" "}
          <b style={{ fontWeight: "bold" }}> allenarci nel mio garage.</b>
          <br />
          <br />
          Negli anni mi sono fatto seguire sempre da vari Coach per poter
          imparare e migliorare sempre nuove tecniche di allenamento. Tutto ciò
          che imparavo sia dai trainer e sia dai tantissimi libri letti negli
          ultimi anni lo tramandavo ai miei compagni nei vari parchi attrezzati.
          C’era talmente tanta voglia di imparare, che ci si allenava in
          qualunque condizione metereologica, freddo, caldo, pioggia o neve. A
          volte però l’attrezzatura a disposizione era poca o rotta, cosi decisi
          di allestire il mio garage con attrezzatura fai da te, qualche ruota e
          corda recuperata qua e la, panche di legno costruite con il nonno e la
          home gym è fatta.
        </Typography>
      </div>
      <br />
      <div className={styles.secondSectionText}>
        <Typography variant={textVariant.paragraph}>
          Imperium Motus ha scelto di mantenere il nome
          <b style={{ fontWeight: "bold" }}> Calisthenics Garage</b> aprendo il
          primo centro di Calisthenics nel rione Castromediano, a Cavallino,
          semplicemente trasferendo dal Garage tutto il nostro impegno e la
          nostra passione per questo sport, ma soprattutto cercando di mantenere
          la stessa energia e atmosfera che si è creata in ogni gruppo e con
          ognuno dei ragazzi e ragazze, tra risate e sudate.
          <br />
          <br />
          Vienici a trovare e prefisseremo
          <b style={{ fontWeight: "bold" }}> insieme</b> degli obiettivi
          raggiungibili.
        </Typography>
        <br />

        <Typography variant={textVariant.paragraph}>Ti aspetto.</Typography>
        <br />
      </div>

      <ModalFooter
        label={`NON DEVI ESSERE BRAVO PER INIZIARE, MA DEVI INIZIARE PER POTER ESSERE BRAVO.`}
      />
    </>
  );
};

export default ModalCalisthenicsContent;
