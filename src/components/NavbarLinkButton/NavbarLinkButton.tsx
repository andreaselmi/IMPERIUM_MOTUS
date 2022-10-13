import React from "react";
import Scroller from "../Scroller/Scroller";
import styles from "./NavbarLinkButton.module.scss";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";

interface NavbarLinkProps {
  path: string;
  label: string;
  isActive: boolean;
}

const NavbarLinkButton = ({ isActive, path, label }: NavbarLinkProps) => {
  return (
    <Scroller className={styles.navbarMenuButton} path={path}>
      <Typography className={styles.navbarMenu} variant={textVariant.menu}>
        {label}
      </Typography>
      <span
        style={isActive ? { opacity: 1 } : {}}
        className={styles.hoverElement}
      />
    </Scroller>
  );
};

export default NavbarLinkButton;
