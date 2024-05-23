import React, { useState } from "react";
import SecondHeader from "../components/SecondHeader";
import Service from "./Home/Service";
import Logo from "./Home/Logo";

function Faqs() {
  // State to manage which question is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="content" className="site-content" style={{ marginTop: "100px" }}>
      <SecondHeader page="Faq's" />
      {/* <!---faq---> */}
      <section className="faqs-section">
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_90"></div>
        {/* <!--===============spacing==============--> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <div className="before_title"> Find Useful</div>
                  <h2>Question &amp; Answer</h2>
                  <p>
                    Check our FAQs for quick answers to frequently asked
                    questions we receive.
                    <br /> If you have other questions write.
                  </p>
                </div>
                {/* <!--===============spacing==============--> */}
                <div className="pd_top_15"></div>
                {/* <!--===============spacing==============--> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="faq_section type_two">
                <div className="block_faq">
                  <div className="accordion">
                    <dl>
                      <dt
                        className={`faq_header ${
                          activeIndex === 0 ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(0)}
                      >
                        What recruitment services do you offer?
                        <span className="icon-play"></span>
                      </dt>
                      <dd
                        className="accordion-content"
                        style={{
                          display: activeIndex === 0 ? "block" : "none",
                        }}
                      >
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                      <dt
                        className={`faq_header ${
                          activeIndex === 1 ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(1)}
                      >
                        What sectors or industries do you recruit for?
                        <span className="icon-play"></span>
                      </dt>
                      <dd
                        className="accordion-content"
                        style={{
                          display: activeIndex === 1 ? "block" : "none",
                        }}
                      >
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                      <dt
                        className={`faq_header ${
                          activeIndex === 2 ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(2)}
                      >
                        How can I register a job?
                        <span className="icon-play"></span>
                      </dt>
                      <dd
                        className="accordion-content"
                        style={{
                          display: activeIndex === 2 ? "block" : "none",
                        }}
                      >
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <section className="faq_section type_two">
                <div className="block_faq">
                  <div className="accordion">
                    <dl>
                      <dt
                        className={`faq_header ${
                          activeIndex === 3 ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(3)}
                      >
                        What sectors or industries do you recruit for?
                        <span className="icon-play"></span>
                      </dt>
                      <dd
                        className="accordion-content"
                        style={{
                          display: activeIndex === 3 ? "block" : "none",
                        }}
                      >
                        <p>
                          Blinded by desire, that they cannot foresee the
                          trouble that are bound to ensue; and equal blame
                          belongs to those who fail in their duty which is the
                          same as saying through shrinking. Nor again is there
                          anyone who loves or pursues or desires to obtain pain
                          itself is pains but circumstances great
                        </p>
                      </dd>
                      <dt
                        className={`faq_header ${
                          activeIndex === 4 ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(4)}
                      >
                        What recruitment services do you offer?
                        <span className="icon-play"></span>
                      </dt>
                      <dd
                        className="accordion-content"
                        style={{
                          display: activeIndex === 4 ? "block" : "none",
                        }}
                      >
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                      <dt
                        className={`faq_header ${
                          activeIndex === 5 ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(5)}
                      >
                        Where will you advertise my job vacancy?
                        <span className="icon-play"></span>
                      </dt>
                      <dd
                        className="accordion-content"
                        style={{
                          display: activeIndex === 5 ? "block" : "none",
                        }}
                      >
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* <!--===============spacing==============--> */}
        <div className="pd_bottom_60"></div>
        {/* <!--===============spacing==============--> */}
      </section>
      {/* <!---faqs---> */}
      <Service />
      <Logo />
    </div>
  );
}

export default Faqs;
