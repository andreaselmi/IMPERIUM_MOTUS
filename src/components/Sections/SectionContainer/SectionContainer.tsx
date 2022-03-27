import React from "react";
import Container from "../../Container/Container";
import Grid from "../../Grid/Grid";
import styles from "./SectionContainer.module.css";

interface SectionContainerProps {
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
}) => {
  return (
    <section className={`${styles.container} ${className}`}>
      <Container>
        <Grid>{children}</Grid>
      </Container>
    </section>
  );
};

export default SectionContainer;
