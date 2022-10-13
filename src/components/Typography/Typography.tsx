import React, { CSSProperties, ReactNode } from "react";
import styles from "./Typography.module.scss";
import { textVariant } from "../../defs/textVariant";

interface TypographyProps {
  variant: textVariant;
  className?: string;
  style?: CSSProperties | undefined;
  children?: ReactNode;
}

const Typography = ({
  className,
  variant,
  children,
  style,
}: TypographyProps) => {
  if (variant === textVariant.pageTitle) {
    return (
      <h1 style={style} className={`${styles.pageTitle} ${className}`}>
        {children}
      </h1>
    );
  }

  if (variant === textVariant.sectionTitle) {
    return (
      <h2 style={style} className={`${styles.sectionTitle} ${className}`}>
        {children}
      </h2>
    );
  }

  if (variant === textVariant.heading) {
    return (
      <h3 style={style} className={`${styles.heading} ${className}`}>
        {children}
      </h3>
    );
  }

  if (variant === textVariant.menu) {
    return (
      <p style={style} className={`${styles.menu} ${className}`}>
        {children}
      </p>
    );
  }

  if (variant === textVariant.smallTitle) {
    return (
      <h5 style={style} className={`${styles.smallTitle} ${className}`}>
        {children}
      </h5>
    );
  }

  if (variant === textVariant.smallParagraph) {
    return (
      <p style={style} className={`${styles.smallParagraph} ${className}`}>
        {children}
      </p>
    );
  }

  if (variant === textVariant.quotes) {
    return (
      <h2 style={style} className={`${styles.quotes} ${className}`}>
        {children}
      </h2>
    );
  }

  if (variant === textVariant.label) {
    return (
      <p style={style} className={`${styles.label} ${className}`}>
        {children}
      </p>
    );
  }

  return (
    <p style={style} className={`${styles.paragraph} ${className}`}>
      {children}
    </p>
  );
};

export default Typography;
