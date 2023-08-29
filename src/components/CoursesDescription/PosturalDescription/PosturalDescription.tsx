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
        È considerata uno dei principali strumenti terapeutici in caso di dolori articolari, 
        dolori muscolari e problematiche molto comuni come il dolore alla schiena, {" "}
        <span style={{textDecoration: "underline"}}>l’ernia del disco</span>, la scoliosi e il male alla cervicale. 
        È così nata nel corso degli anni un’enorme attenzione verso questa particolare categoria terapeutica composta essenzialmente da una serie di esercizi posturali.
        </Typography>
        <br />
        <Typography className={styles.bodyText} variant={textVariant.paragraph}>
        È l’allenamento all&apos;ascolto del proprio corpo, 
        alla concentrazione e alla propriocezione, 
        infatti, permettono di portare ciò che si impara e si sperimenta nella vita di tutti i giorni.
        Ciò comporta che le posizioni corrette apprese durante la pratica diventano sempre più naturali e spontanee, 
        così come diviene sempre più semplice acquisire e mantenere una corretta igiene posturale.
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
