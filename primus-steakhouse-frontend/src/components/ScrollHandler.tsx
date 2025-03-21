"use client";

import { useEffect } from "react";
import { handleNavbarScroll } from "./scrollListener";

const ScrollHandler = () => {
  useEffect(() => {
    handleNavbarScroll();
  }, []);

  return null; // This component doesn’t render anything visible
};

export default ScrollHandler;
