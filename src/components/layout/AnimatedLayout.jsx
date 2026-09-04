import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const AnimatedLayout = () => {
  const location = useLocation();

  const previousPath = useRef(location.pathname);

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const previous = previousPath.current;
    const current = location.pathname;

    const fromHome = previous === "/";
    const toHome = current === "/";

    // HOME -> OTHER PAGE
    if (fromHome && !toHome) {
      setAnimationClass("page-enter-from-bottom");

      setTimeout(() => {
        setAnimationClass("page-visible");
      }, 50);
    }

    // OTHER PAGE -> HOME
    else if (!fromHome && toHome) {
      setAnimationClass("page-enter-from-top");

      setTimeout(() => {
        setAnimationClass("page-visible");
      }, 50);
    }

    // OTHER PAGE -> OTHER PAGE
    else {
      setAnimationClass("page-normal");
    }

    previousPath.current = current;
  }, [location.pathname]);

  return (
    <div className={`page-wrapper ${animationClass}`}>
      <Outlet />
    </div>
  );
};

export default AnimatedLayout;