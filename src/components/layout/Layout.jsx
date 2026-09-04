import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedLayout from "./AnimatedLayout"; // Import AnimatedLayout

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <AnimatedLayout /> {/* Call AnimatedLayout here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;