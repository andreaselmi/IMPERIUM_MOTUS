import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  titleClass?: string;
  className?: string;
}

const SectionHeader = ({
  className,
  imageAlt,
  imageSrc,
  label,
  titleClass,
}: SectionHeaderProps) => {
  return (
    <div className={className}>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt={imageAlt} src={imageSrc} />
      </div>
      <Typography
        className={titleClass}
        label={label}
        variant={"sectionTitle"}
      />
    </div>
  );
};

export default SectionHeader;
