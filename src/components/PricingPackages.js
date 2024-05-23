import React from "react";
import Price from "../pages/Home/Price";
import Service from "../pages/Home/Service";
import SecondHeader from "./SecondHeader";

function PricingPackages() {
  return (
    <div style={{ marginTop: "100px" }}>
      <SecondHeader page="Pricing Packages"/>
      <Price />
      <Service />
    </div>
  );
}

export default PricingPackages;