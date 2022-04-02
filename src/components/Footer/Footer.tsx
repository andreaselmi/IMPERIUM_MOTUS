import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import styles from "./Footer.module.scss";
import logo from "../../assets/icons/logoHorizontalWhite.svg";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Grid>
          <div className={styles.footerContentContainer}>
            <div className={`${styles.footerElement} ${styles.logoContainer}`}>
              <img alt={"Logo Imperium motus esteso"} src={logo} />
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
                <a>
                  <Typography
                    variant={textVariant.smallParagraph}
                    label={"Enrico Capone"}
                  />
                </a>
                &nbsp;
                <Typography variant={textVariant.smallParagraph} label={"e"} />
                &nbsp;
                <a>
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
