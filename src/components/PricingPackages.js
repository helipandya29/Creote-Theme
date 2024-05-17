import React from "react";
import Price from "../pages/Price";
import Service from "../pages/Service";
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