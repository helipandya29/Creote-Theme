import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Team from "./components/Team.js";
import { Outlet } from "react-router-dom";
import PagePreHeader from "./components/PagePreHeader.js";
import TestimonialSection from "./components/TestimonialSection.js";

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