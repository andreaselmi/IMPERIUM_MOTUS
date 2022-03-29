import React from "react";
import Container from "../../Container/Container";
import Grid from "../../Grid/Grid";
import styles from "./SectionContainer.module.scss";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <section className={`${styles.container} ${className}`} {...restProps}>
      <Container>
        <Grid>{children}</Grid>
      </Container>
    </section>
  );
};

export default SectionContainer;
