import React, { ReactNode } from "react";
import styles from "./ModalFooter.module.scss";
import quotesIcon from "../../../assets/icons/quotes.svg";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";

interface ModalFooterProps extends React.ComponentProps<"div"> {
  label: ReactNode;
  footerText?: string;
}

const ModalFooter = ({ footerText, label, ...restProps }: ModalFooterProps) => {
  return (
    <div className={styles.footer} {...restProps}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerTextContainer}>
          <img className={styles.quotes} src={quotesIcon} alt={"Virgolette"} />
          <Typography
            style={{ lineHeight: "150%" }}
            variant={textVariant.quotes}
          >
            {label}
          </Typography>
        </div>
      </div>
      {footerText && (
        <Typography variant={textVariant.smallTitle} style={{ marginLeft: 20, marginTop: 10 }}>{footerText}</Typography>
      )}
    </div>
  );
};

export default ModalFooter;
