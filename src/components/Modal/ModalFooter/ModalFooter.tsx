import React from "react";
import styles from "./ModalFooter.module.scss";
import quotesIcon from "../../../assets/icons/quotes.svg";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";

interface ModalFooterProps {
  label: string;
}

const ModalFooter = ({ label }: ModalFooterProps) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerTextContainer}>
          <img className={styles.quotes} src={quotesIcon} alt={"Virgolette"} />
          <Typography
            style={{ lineHeight: "150%" }}
            variant={textVariant.quotes}
            label={label}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
