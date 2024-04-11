import React from "react";
import Layout from "../Layout";
import Slider from "./Slider";
import Service from "./Service";
import Team from "./Team";
import TabSection from "./Tab";
import Price from "./Price";
function Home() {
  return (
    <div>
      <Slider />
      <Service />
      <Team />
      <TabSection />
      <Price />
    </div>
  );
}

export default Home;