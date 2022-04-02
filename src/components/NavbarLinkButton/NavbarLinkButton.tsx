import React from "react";
import Scroller from "../Scroller/Scroller";
import styles from "./NavbarLink.module.scss";
import Typography from "../Typography/Typography";
import { textVariant } from "../../defs/textVariant";

interface NavbarLinkProps {
  path: string;
  label: string;
}

const NavbarLinkButton = ({ path, label }: NavbarLinkProps) => {
  return (
    <Scroller className={styles.navbarMenuButton} path={path}>
      <Typography
        className={styles.navbarMenu}
        variant={textVariant.menu}
        label={label}
      />
      <span className={styles.hoverElement} />
    </Scroller>
  );
};

export default NavbarLinkButton;
