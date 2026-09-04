import React, { useEffect, useState } from "react";

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="page-loader">

      {/* Horizontal Line */}
      <div className="loader-horizontal"></div>

      {/* Vertical Line */}
      <div className="loader-vertical"></div>

    </div>
  );
};

export default PageLoader;