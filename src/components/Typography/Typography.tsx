import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
  variant:
    | "pageTitle"
    | "sectionTitle"
    | "heading"
    | "menu"
    | "paragraph"
    | "smallTitle"
    | "smallParagraph";

  label: string;
  className?: string;
}

const Typography = ({ className, variant, label }: TypographyProps) => {
  if (variant === "pageTitle") {
    return <h1 className={`${styles.pageTitle} ${className}`}>{label}</h1>;
  }

  if (variant === "sectionTitle") {
    return <h2 className={`${styles.sectionTitle} ${className}`}>{label}</h2>;
  }

  if (variant === "heading") {
    return <h3 className={`${styles.heading} ${className}`}>{label}</h3>;
  }

  if (variant === "menu") {
    return <p className={`${styles.menu} ${className}`}>{label}</p>;
  }

  if (variant === "smallTitle") {
    return <h5 className={`${styles.smallTitle} ${className}`}>{label}</h5>;
  }

  if (variant === "smallParagraph") {
    return <p className={`${styles.smallParagraph} ${className}`}>{label}</p>;
  }

  return <p className={`${styles.paragraph} ${className}`}>{label}</p>;
};

export default Typography;
