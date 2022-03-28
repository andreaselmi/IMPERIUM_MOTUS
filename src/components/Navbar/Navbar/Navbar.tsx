import React from "react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import NavbarDesktop from "../NavbarDesktop/NavbarDesktop";
import { breakpoints } from "../../../defs/breakpoints";

const Navbar = () => {
  const { width } = useWindowDimensions();
  return width && width >= breakpoints.DESKTOPSMALL ? (
    <NavbarDesktop />
  ) : (
    <NavbarMobile />
  );
};

export default Navbar;
