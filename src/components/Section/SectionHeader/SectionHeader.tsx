import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  titleClass?: string;
}

const SectionHeader = ({
  imageAlt,
  imageSrc,
  label,
  titleClass,
}: SectionHeaderProps) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt={imageAlt} src={imageSrc} />
      </div>
      <Typography
        className={titleClass}
        label={label}
        variant={"sectionTitle"}
      />
    </>
  );
};

export default SectionHeader;
