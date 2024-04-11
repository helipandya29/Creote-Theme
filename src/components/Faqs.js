import React from "react";
import SecondHeader from "./SecondHeader";

function Faqs() {
  return (
    <div id="content" class="site-content " style={{ marginTop: "100px" }}>
      <SecondHeader page="Faq's" />
      {/* <!---faq---> */}
      <section class="faqs-section">
        {/* <!--===============spacing==============--> */}
        <div class="pd_top_90"></div>
        {/* <!--===============spacing==============--> */}
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title_all_box style_one text-center dark_color">
                <div class="title_sections">
                  <div class="before_title"> Find Useful</div>
                  <h2>Question &amp; Answer</h2>
                  <p>
                    Check our FAQs for quick answers to frequently asked
                    questions we receive.
                    <br /> If you have other questions write.
                  </p>
                </div>
                {/* <!--===============spacing==============--> */}
                <div class="pd_top_15"></div>
                {/* <!--===============spacing==============--> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="faq_section type_two">
                <div class="block_faq">
                  <div class="accordion">
                    <dl>
                      <dt class="faq_header active">
                        What recruitment services do you offer?
                        <span class="icon-play"></span>
                      </dt>
                      <dd
                        class="accordion-content hide"
                        style={{ display: "block" }}
                      >
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                      <dt class="faq_header ">
                        What sectors or industries do you recruit for?
                        <span class="icon-play"></span>
                      </dt>
                      <dd class="accordion-content hide">
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                      <dt class="faq_header ">
                        How can I register a job?<span class="icon-play"></span>
                      </dt>
                      <dd class="accordion-content hide">
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
            <div class="col-lg-6">
              <section class="faq_section type_two">
                <div class="block_faq">
                  <div class="accordion">
                    <dl>
                      <dt class="faq_header active">
                        What sectors or industries do you recruit for?
                        <span class="icon-play"></span>
                      </dt>
                      <dd
                        class="accordion-content hide"
                        style={{ display: "block" }}
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
                      <dt class="faq_header">
                        What recruitment services do you offer?
                        <span class="icon-play"></span>
                      </dt>
                      <dd class="accordion-content hide">
                        <p>
                          Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                          Energy Retailer For The People, Focusing On The
                          Promotion Of Sustainable Living, Renewable Energy
                          Production And Smart Energy Grid Utility Services.
                        </p>
                      </dd>
                      <dt class="faq_header">
                        Where will you advertise my job vacancy?
                        <span class="icon-play"></span>
                      </dt>
                      <dd class="accordion-content hide">
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
        <div class="pd_bottom_60"></div>
        {/* <!--===============spacing==============--> */}
      </section>
      {/* <!---faqs---> */}
    </div>
  );
}

export default Faqs;