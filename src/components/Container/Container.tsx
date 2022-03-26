import React from "react";
import styles from "./Container.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={`${styles.container} ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
