import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
// import Team from "./pages/Team.js";
import { Outlet } from "react-router-dom";
import PagePreHeader from "../pages/PagePreHeader.js";
// import TestimonialSection from "./pages/TestimonialSection.js";

function Layout() {
  return (
    <>
      <PagePreHeader />
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;