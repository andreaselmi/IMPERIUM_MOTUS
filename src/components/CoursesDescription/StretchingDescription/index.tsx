import React from "react";
import Typography from "../../Typography/Typography";
import styles from "../CoursesDescription.module.scss";
import { textVariant } from "../../../defs/textVariant";
import Button from "../../Button/Button";

interface PosturalDescriptionProps {
  onClickButton: () => void;
}

const PosturalDescription = ({ onClickButton }: PosturalDescriptionProps) => {
  return (
    <>
      <section className={styles.courseDescriptionContainer}>
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
        È una pratica attraverso la quale poniamo in allungamento le nostre strutture muscolari, tendinee, ossee e nervose. Ogni posizione può essere diversa dall’altra, ma alla base c’è una pratica che pone il corpo in posizioni di allungamento atte a migliorare la flessibilità di una o più muscolature.
        </Typography>
        <br />
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
        <span style={{fontWeight: "bold"}}>Perché fare stretching? </span>
        <br/>
        Perchè fa bene, perché migliora la performance, e poi lo si è sempre fatto, 
        lo fanno i giocatori di calcio prima d’entrare in campo, lo fanno tutti gli altri sportivi prima e dopo l’allenamento, 
        lo fai a pilates ed a yoga.
        </Typography>
        <Button
          className={styles.modalButton}
          onClick={onClickButton}
          buttonType={"secondary"}
          buttonStyle={"light"}
          label={"Scopri di più"}
        />
      </section>
    </>
  );
};

export default PosturalDescription;
