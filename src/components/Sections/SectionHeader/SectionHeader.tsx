import React from "react";
import Typography from "../../Typography/Typography";
import styles from "./SectionHeader.module.scss";
import { textVariant } from "../../../defs/textVariant";

interface SectionHeaderProps {
  SvgComponent?: React.SVGProps<SVGSVGElement>;
  imageAlt?: string;
  label: string;
  titleClass?: string;
  className?: string;
  imageContainerClassName?: string;
}

const SectionHeader = ({
  className,
  imageContainerClassName,
  label,
  titleClass,
  SvgComponent,
}: SectionHeaderProps) => {
  return (
    <header style={{ position: "relative", zIndex: 1 }} className={className}>
      <div className={`${styles.imageContainer} ${imageContainerClassName}`}>
        <span className={styles.image}>{SvgComponent}</span>
      </div>
      <Typography
        className={titleClass}
        label={label}
        variant={textVariant.sectionTitle}
      />
    </header>
  );
};

export default SectionHeader;
