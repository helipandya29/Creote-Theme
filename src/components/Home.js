import React from "react";
import Slider from "../pages/Home/Slider";
import Service from "../pages/Home/Service";
import Team from "../pages/Home/Team";
import TabSection from "../pages/Home/Tab";
import Price from "../pages/Home/Price";
import HumanResource from "../pages/Home/HumanResource";
import Blog from "../pages/Home/Blog";
import TestimonialSection from "../pages/Home/TestimonialSection";
import Logo from "../pages/Home/Logo";
import ImageBoxSection from "../pages/Home/ImageBoxSection";

function Home() {
  return (
    <div>
      <Slider />
      <Service />
      <ImageBoxSection />
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
