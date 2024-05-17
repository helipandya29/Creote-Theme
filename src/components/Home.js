import React from "react";
import Slider from "../pages/Slider";
import Service from "../pages/Service";
import Team from "../pages/Team";
import TabSection from "../pages/Tab";
import Price from "../pages/Price";
import HumanResource from "../pages/HumanResource";
import Blog from "../pages/Blog";
import TestimonialSection from "../pages/TestimonialSection";
import Logo from "../pages/Logo";

function Home() {
  return (
    <div>
      <Slider />
      <Service />
      <Logo />
      <HumanResource />
      <Team />
      <TabSection />
      <Price />
      <TestimonialSection />
      <Blog />
    </div>
  );
}

export default Home;
