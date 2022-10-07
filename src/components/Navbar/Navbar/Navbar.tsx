import React from "react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import NavbarDesktop from "../NavbarDesktop/NavbarDesktop";

const Navbar = () => {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
};

export default Navbar;
