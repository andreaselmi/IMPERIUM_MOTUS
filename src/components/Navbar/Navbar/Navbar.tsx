import React from "react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import NavbarDesktop from "../NavbarDesktop/NavbarDesktop";

const Navbar = () => {
  const { width } = useWindowDimensions();
  return width && width > 991 ? <NavbarDesktop /> : <NavbarMobile />;
};

export default Navbar;
