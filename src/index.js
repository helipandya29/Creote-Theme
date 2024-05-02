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
import Layout from "./components/Layout.js";
import Home from "./components/Home";
import Service from "./pages/Service.js";
import Team from "./pages/Team.js";
import TabSection from "./pages/Tab.js";
import Price from "./pages/Price.js";
import TestimonialSection from "./pages/TestimonialSection.js";
import OurTeam from "./pages/OurTeam.js";
import AboutUs from "./pages/AboutUs.js";
import ServiceClassic from "./pages/ServiceClassic.js"
import ServiceDefault from "./pages/ServiceDefault.js";
import ServiceDetails from "./pages/ServiceDetails.js";
import PricingPackages from "./components/PricingPackages.js";
import Faqs from "./pages/Faqs.js";
import Contact from "./pages/Contact.js";
import BlogClassic from "./pages/BlogClassic.js";
import BlogModern from "./pages/BlogModern.js";
import BlogSimple from "./pages/BlogSimple.js";
import BlogListView from "./pages/BlogListView.js";
import BlogMetro from "./pages/BlogMetro.js";
import BlogSinglePost from "./pages/BlogSinglePost.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Layout />}>
      <Route path="*" element={<Home />} />
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
      <Route path="faqs" element={<Faqs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<BlogClassic />} />
      <Route path="blogModern" element={<BlogModern />} />
      <Route path="blogSimple" element={<BlogSimple />} />
      <Route path="blogListView" element={<BlogListView />} />
      <Route path="blogMetro" element={<BlogMetro />} />
      <Route path="blogSinglePost" element={<BlogSinglePost />}/>
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