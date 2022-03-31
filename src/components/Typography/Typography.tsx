import React, { CSSProperties } from "react";
import styles from "./Typography.module.scss";

interface TypographyProps {
  variant:
    | "pageTitle"
    | "sectionTitle"
    | "heading"
    | "menu"
    | "paragraph"
    | "smallTitle"
    | "smallParagraph"
    | "quotes";

  label: string;
  className?: string;
  style?: CSSProperties | undefined;
}

const Typography = ({ className, variant, label, style }: TypographyProps) => {
  if (variant === "pageTitle") {
    return (
      <h1 style={style} className={`${styles.pageTitle} ${className}`}>
        {label}
      </h1>
    );
  }

  if (variant === "sectionTitle") {
    return (
      <h2 style={style} className={`${styles.sectionTitle} ${className}`}>
        {label}
      </h2>
    );
  }

  if (variant === "heading") {
    return (
      <h3 style={style} className={`${styles.heading} ${className}`}>
        {label}
      </h3>
    );
  }

  if (variant === "menu") {
    return (
      <p style={style} className={`${styles.menu} ${className}`}>
        {label}
      </p>
    );
  }

  if (variant === "smallTitle") {
    return (
      <h5 style={style} className={`${styles.smallTitle} ${className}`}>
        {label}
      </h5>
    );
  }

  if (variant === "smallParagraph") {
    return (
      <p style={style} className={`${styles.smallParagraph} ${className}`}>
        {label}
      </p>
    );
  }

  if (variant === "quotes") {
    return (
      <h2 style={style} className={`${styles.quotes} ${className}`}>
        {label}
      </h2>
    );
  }

  return (
    <p style={style} className={`${styles.paragraph} ${className}`}>
      {label}
    </p>
  );
};

export default Typography;
