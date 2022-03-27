import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  titleClass?: string;
  className?: string;
  imageContainerClassName?: string;
}

const SectionHeader = ({
  className,
  imageAlt,
  imageContainerClassName,
  imageSrc,
  label,
  titleClass,
}: SectionHeaderProps) => {
  return (
    <div style={{ position: "relative", zIndex: 1 }} className={className}>
      <div className={`${styles.imageContainer} ${imageContainerClassName}`}>
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
