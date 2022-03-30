import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./ScrollAnchor.module.scss";
import { breakpoints } from "../../defs/breakpoints";

interface ScrollAnchorProps extends React.HTMLAttributes<HTMLSpanElement> {
  id: string;
}

const ScrollAnchor: React.FC<ScrollAnchorProps> = ({ id, ...restProps }) => {
  const { width } = useWindowDimensions();

  return (
    <span
      className={`${styles.anchor} ${
        width && width < breakpoints.DESKTOPSMALL
          ? styles.mobileHeight
          : styles.desktopHeight
      }`}
      id={id}
      {...restProps}
    />
  );
};

export default ScrollAnchor;
