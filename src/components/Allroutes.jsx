import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./landingpage/Home";

import Layout from "./layout/Layout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsBlogs from "./pages/NewsBlogs";
import Work from "./pages/Works";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Awardpage from "./pages/Awardpage";
import Partners from "./pages/Partners";

import AllProjectwork from "./work/AllProjectwork";
import Workdetail from "./work/Workdetail";


const RouteContent = () => {
  const location = useLocation();

  const previousPath = useRef(location.pathname);

  const previous = previousPath.current;
  const current = location.pathname;

  const fromHome = previous === "/";
  const toHome = current === "/";

  let animationClass = "route-no-animation";

  // ==========================================
  // HOME -> OTHER PAGE
  // Bottom -> Top
  // ==========================================
  if (fromHome && !toHome) {
    animationClass = "route-home-to-page";
  }

  // ==========================================
  // OTHER PAGE -> HOME
  // Top -> Bottom
  // ==========================================
  else if (!fromHome && toHome) {
    animationClass = "route-page-to-home";
  }

  // ==========================================
  // OTHER PAGE -> OTHER PAGE
  // NO ANIMATION
  // ==========================================
  else {
    animationClass = "route-no-animation";
  }

  // Update previous route after calculating animation
  previousPath.current = current;

  return (
    <div
      key={location.pathname}
      className={`route-transition ${animationClass}`}
    >
      <Routes location={location}>

        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />


        {/* =============== INNER PAGES =============== */}
        <Route element={<Layout />}>

          <Route path="/about" element={<About />} />

          <Route path="/work" element={<Work />} />

          <Route path="/news" element={<News />} />

          <Route path="/newsblogs" element={<NewsBlogs />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms-of-use"
            element={<TermsOfUse />}
          />

          {/* Work */}
          <Route
            path="/work-projects"
            element={<AllProjectwork />}
          />

          <Route
            path="/workdetail"
            element={<Workdetail />}
          />

          <Route
            path="/awardpage"
            element={<Awardpage />}
          />

          <Route
            path="/partners"
            element={<Partners />}
          />

        </Route>

      </Routes>
    </div>
  );
};


const Allroutes = () => {
  return <RouteContent />;
};


export default Allroutes;