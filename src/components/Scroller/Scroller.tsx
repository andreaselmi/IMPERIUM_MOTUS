/*
Component that uses the react-scroll library and allows you to scroll to a specific point on the page
*/
import React from "react";
import { Link } from "react-scroll";

interface ScrollerProps {
  path: string;
  spy?: boolean;
  smooth?: boolean;
  duration?: number;
  className?: string;
}

const Scroller: React.FC<ScrollerProps> = ({
  path,
  smooth = true,
  spy = true,
  duration = 500,
  children,
  className,
}) => {
  return (
    <Link
      style={{ cursor: "pointer" }}
      to={path}
      spy={spy}
      smooth={smooth}
      duration={duration}
      className={className}
    >
      {children}
    </Link>
  );
};

export default Scroller;
