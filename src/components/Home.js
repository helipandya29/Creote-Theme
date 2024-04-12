import React from "react";
import Slider from "./Slider";
import Service from "./Service";
import Team from "./Team";
import TabSection from "./Tab";
import Price from "./Price";
import HumanResource from "./HumanResource";
import Blog from "./Blog";
import TestimonialSection from "./TestimonialSection";

function Home() {
  return (
    <div>
      <Slider />
      <Service />
      <HumanResource/>
      <Team />
      <TabSection />
      <Price />
      <TestimonialSection/>
      <Blog/>
      
    </div>
  );
}

export default Home;