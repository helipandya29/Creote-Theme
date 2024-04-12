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
import OurTeam from "./components/OurTeam.js";
import AboutUs from "./components/AboutUs.js";
import ServiceClassic from "./components/ServiceClassic.js"
import ServiceDefault from "./components/ServiceDefault.js";
import ServiceDetails from "./components/ServiceDetails.js";
import PricingPackages from "./components/PricingPackages.js";
import Faqs from "./components/Faqs.js";
import Contact from "./components/Contact.js";
import BlogClassic from "./components/BlogClassic.js";
import BlogModern from "./components/BlogModern.js";
import BlogSimple from "./components/BlogSimple.js";
import BlogListView from "./components/BlogListView.js";
import BlogMetro from "./components/BlogMetro.js";
import BlogSinglePost from "./components/BlogSinglePost.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="team" element={<Team />} />
      <Route path="tabSection" element={<TabSection />} />
      <Route path="price" element={<Price />} />
      <Route path="testimonial" element={<TestimonialSection />} />
      <Route path="ourTeam" element={<OurTeam />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="serviceClassic" element={<ServiceClassic />} />
      <Route path="serviceDefault" element={<ServiceDefault />} />
      <Route path="serviceDetails" element={<ServiceDetails />} />
      <Route path="pricingPackages" element={<PricingPackages />} />
      <Route path="faqs" element={<Faqs/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="blog" element={<BlogClassic/>} />
      <Route path="blogModern" element={<BlogModern/>} />
      <Route path="blogSimple" element={<BlogSimple/>} />
      <Route path="blogListView" element={<BlogListView/>} />
      <Route path="blogMetro" element={<BlogMetro/>} />
      <Route path="blogSinglePost" element={<BlogSinglePost/>} />
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