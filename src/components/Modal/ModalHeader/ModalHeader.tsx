import React, { CSSProperties } from "react";
import styles from "./ModalHeader.module.scss";
import Typography from "../../Typography/Typography";
import { textVariant } from "../../../defs/textVariant";

interface ModalHeaderProps {
  title: string;
  titleStyle?: CSSProperties;
}

const ModalHeader = ({ title, titleStyle }: ModalHeaderProps) => {
  return (
    <header className={styles.contentHeader}>
      <Typography style={titleStyle} variant={textVariant.sectionTitle}>
        {title}
      </Typography>
    </header>
  );
};

export default ModalHeader;
