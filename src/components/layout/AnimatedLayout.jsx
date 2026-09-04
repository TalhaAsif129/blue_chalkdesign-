import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const AnimatedLayout = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const [animationClass, setAnimationClass] = useState("page-normal");

  useEffect(() => {
    const previous = previousPath.current;
    const current = location.pathname;

    const fromHome = previous === "/";
    const toHome = current === "/";

    // HOME -> OTHER PAGE (Bottom to Top)
    if (fromHome && !toHome) {
      setAnimationClass("page-enter-from-bottom");
      setTimeout(() => {
        setAnimationClass("page-visible");
      }, 50);
    }
    // OTHER PAGE -> HOME (Top to Bottom)
    else if (!fromHome && toHome) {
      setAnimationClass("page-enter-from-top");
      setTimeout(() => {
        setAnimationClass("page-visible");
      }, 50);
    }
    // OTHER PAGE -> OTHER PAGE (No animation)
    else {
      setAnimationClass("page-normal");
    }

    previousPath.current = current;
  }, [location.pathname]);

  return (
    <div className={`animated-page-wrapper ${animationClass}`}>
      <div className="animated-page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AnimatedLayout;