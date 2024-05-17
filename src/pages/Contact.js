import React from "react";
import SecondHeader from "../components/SecondHeader";

const Contact = () => {
  return (
    <div id="content" className="site-content " style={{marginTop : "100px"}}>
        <SecondHeader page="Contact"/>
      <section className="contact-section">
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_90"></div>
        {/* <!--===============spacing==============--> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
              <div className="contact_form_box_all type_one">
                <div className="contact_form_box_inner">
                  <div className="contact_form_shortcode">
                    <form
                      id="contact-form"
                      method="post"
                      action="contact.php"
                    >
                      <div className="messages"></div>

                      <div className="controls">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>
                                {" "}
                                Your Name
                                <br />
                              </label>
                              <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                required="required"
                                data-error="Enter Your Name"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>
                                {" "}
                                Your Email
                                <br />
                              </label>
                              <input
                                type="text"
                                name="email"
                                required="required"
                                placeholder="Email *"
                                data-error="Enter Your Email Id"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>
                                {" "}
                                Your Subject
                                <br />
                              </label>
                              <input
                                type="text"
                                name="subject"
                                required="required"
                                placeholder=" Subject  (Optional)"
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>
                                {" "}
                                Your Message
                                <br />
                              </label>
                              <textarea
                                name="message"
                                placeholder="Additional Information... (Optional) "
                                rows="3"
                                required="required"
                                data-error="Please, leave us a message."
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group mg_top apbtn">
                              <button className="theme_btn" type="submit">
                                Appointment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 pd_left_30">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  <div className="before_title">Contact Info to</div>
                  <h2>Reach Our Expert Team</h2>
                  <p>
                    Send a message through given form, If your enquiry is time
                    sensitive please use below contact details.
                  </p>
                </div>
              </div>

              <div className="contact_box_content style_one">
                <div className="contact_box_inner icon_yes">
                  <div className="icon_bx">
                    <span className=" icon-placeholder"></span>
                  </div>
                  <div className="contnet">
                    <h3> Post Address </h3>
                    <p>280 Granite Run Drive Suite #200 Lancaster, PA 1760</p>
                  </div>
                </div>
              </div>
              {/* <!--===============spacing==============--> */}
              <div className="pd_bottom_15"></div>
              {/* <!--===============spacing==============--> */}
              <div className="contact_box_content style_one">
                <div className="contact_box_inner icon_yes">
                  <div className="icon_bx">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="contnet">
                    <h3> General Enquires </h3>
                    <p>Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com</p>
                  </div>
                </div>
              </div>
              {/* <!--===============spacing==============--> */}
              <div className="pd_bottom_15"></div>
              {/* <!--===============spacing==============--> */}
              <div className="contact_box_content style_one">
                <div className="contact_box_inner icon_yes">
                  <div className="icon_bx">
                    <span className="fa fa-clock-o"></span>
                  </div>
                  <div className="contnet">
                    <h3> Operation Hours </h3>
                    <p>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</p>
                  </div>
                </div>
              </div>
              {/* <!--===============spacing==============--> */}
              <div className="pd_bottom_40"></div>
              {/* <!--===============spacing==============--> */}
              <div className="social_media_v_one style_two">
                <ul>
                  <li>
                    <a href="/">
                      {" "}
                      <span className="fa fa-facebook"></span>
                      <small>facebook</small>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      {" "}
                      <span className="fa fa-twitter"></span>
                      <small>twitter</small>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      {" "}
                      <span className="fa fa-skype"></span>
                      <small>skype</small>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      {" "}
                      <span className="fa fa-instagram"></span>
                      <small>instagram</small>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_70"></div>
        {/* <!--===============spacing==============--> */}
      </section>
    </div>
  );
};

export default Contact;
