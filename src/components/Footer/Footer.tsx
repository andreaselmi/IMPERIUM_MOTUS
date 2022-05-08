import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../assets/icons/logoHorizontalWhite.svg";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Grid>
          <div className={styles.footerContentContainer}>
            <div className={`${styles.footerElement} ${styles.logoContainer}`}>
              <Logo />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.footerElement}>
                <Typography
                  variant={textVariant.smallParagraph}
                  label={
                    "Lupo Alessandro · Via A De Gasperi, 25 Cavallino 73020 (LE) · P.IVA 05198550757"
                  }
                />
              </div>

              <div className={styles.footerElement}>
                <Typography
                  variant={textVariant.smallParagraph}
                  label={"Sito creato da"}
                />
                &nbsp;
                <a
                  href={"https://www.enricocapone.com"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={styles.footerLinkText}
                >
                  <Typography
                    variant={textVariant.smallParagraph}
                    label={"Enrico Capone"}
                  />
                </a>
                &nbsp;
                <Typography variant={textVariant.smallParagraph} label={"e"} />
                &nbsp;
                <a
                  className={styles.footerLinkText}
                  href={"https://www.linkedin.com/in/andrea-selmi"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Typography
                    variant={textVariant.smallParagraph}
                    label={"Andrea Selmi"}
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
