import React, { CSSProperties, ReactNode } from "react";
import styles from "./Typography.module.scss";
import { textVariant } from "../../defs/textVariant";

interface TypographyProps {
  variant: textVariant;
  label: string;
  className?: string;
  style?: CSSProperties | undefined;
  children?: ReactNode;
}

const Typography = ({
  className,
  children,
  variant,
  label,
  style,
}: TypographyProps) => {
  if (children) {
    return (
      <div style={style} className={`${styles[variant]} ${className}`}>
        {children}
      </div>
    );
  }

  if (variant === textVariant.pageTitle) {
    return (
      <h1 style={style} className={`${styles.pageTitle} ${className}`}>
        {label}
      </h1>
    );
  }

  if (variant === textVariant.sectionTitle) {
    return (
      <h2 style={style} className={`${styles.sectionTitle} ${className}`}>
        {label}
      </h2>
    );
  }

  if (variant === textVariant.heading) {
    return (
      <h3 style={style} className={`${styles.heading} ${className}`}>
        {label}
      </h3>
    );
  }

  if (variant === textVariant.menu) {
    return (
      <p style={style} className={`${styles.menu} ${className}`}>
        {label}
      </p>
    );
  }

  if (variant === textVariant.smallTitle) {
    return (
      <h5 style={style} className={`${styles.smallTitle} ${className}`}>
        {label}
      </h5>
    );
  }

  if (variant === textVariant.smallParagraph) {
    return (
      <p style={style} className={`${styles.smallParagraph} ${className}`}>
        {label}
      </p>
    );
  }

  if (variant === textVariant.quotes) {
    return (
      <h2 style={style} className={`${styles.quotes} ${className}`}>
        {label}
      </h2>
    );
  }

  if (variant === textVariant.label) {
    return (
      <p style={style} className={`${styles.label} ${className}`}>
        {label}
      </p>
    );
  }

  return (
    <p style={style} className={`${styles.paragraph} ${className}`}>
      {label}
    </p>
  );
};

export default Typography;
