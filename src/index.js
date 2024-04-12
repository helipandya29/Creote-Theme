import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Service from "./components/Service";
import Team from "./components/Team";
import TabSection from "./components/Tab";
import Price from "./components/Price";
import TestimonialSection from "./components/TestimonialSection";
import Blog from "./components/Blog";
import OurTeam from "./components/OurTeam.js";
import AboutUs from "./components/AboutUs.js";
import ServiceClassic from "./components/ServiceClassic.js"
import ServiceDefault from "./components/ServiceDefault.js";
import ServiceDetails from "./components/ServiceDetails.js";
import PricingPackages from "./components/PricingPackages.js";
import Faqs from "./components/Faqs.js";
import Contact from "./components/Contact.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="team" element={<Team />} />
      <Route path="tabSection" element={<TabSection />} />
      <Route path="price" element={<Price />} />
      <Route path="testimonial" element={<TestimonialSection />} />
      <Route path="blog" element={<Blog />} />
      <Route path="ourTeam" element={<OurTeam />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="serviceClassic" element={<ServiceClassic />} />
      <Route path="serviceDefault" element={<ServiceDefault />} />
      <Route path="serviceDetails" element={<ServiceDetails />} />
      <Route path="pricingPackages" element={<PricingPackages />} />
      <Route path="faqs" element={<Faqs/>} />
      <Route path="contact" element={<Contact/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();