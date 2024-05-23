import React from "react";
const imageUrl12 = "assets/images/testi-image.jpg";

const Footer = () => {
  return (
    <>
      <div id="content" className="site-content " style={{ marginTop: "70px" }}>
        {/* <!---==============footer start =================--> */}
        <div className="footer_area footer_two" id="footer_contents">
          <div className="container">
            <section
              className="newsteller mr_bottom_minus_110 style_two"
              style={{ backgroundImage: `url(${imageUrl12})` }}
            >
              <div className="auto-container">
                <div className="inner_stell">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="content">
                        <h2>Join Our Mailing List</h2>
                        <p>
                          For receiving our news and updates in your inbox
                          directly.{" "}
                        </p>
                      </div>
                      <div className="item_scubscribe">
                        <form
                          className="mc4wp-form"
                          method="post"
                          data-name="Subscibe"
                        >
                          <div className="mc4wp-form-fields">
                            <input
                              type="email"
                              name="EMAIL"
                              placeholder="Your email address"
                              required=""
                            />
                            <input type="submit" value="Sign up" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="footer_widgets_wrap bg_dark_2">
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_100"></div>
            <div className="pd_top_100"></div>
            {/* <!--===============spacing==============--> */}
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                  <div className="footer_widgets about_company light_color">
                    <div className="about_company_inner">
                      <div className="footer_logo">
                        <a href="/" target="_blank" rel="nofollow">
                          <img src="assets/images/logo-white.png" alt="logo" />
                        </a>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div className="mr_bottom_20"></div>
                      {/* <!--===============spacing==============--> */}
                      <div className="content_box">
                        <p>
                          Duty the obligations of business will frequently occur
                          that pleasure have too repudiated annoyances endures
                          accepted.
                        </p>
                        <div className="consulting">
                          <div className="image">
                            <img
                              src="assets/images/authour-image.png"
                              alt="need help"
                            />
                          </div>
                          <div className="help_con">
                            <h6>Need Help?</h6>
                            <h2>
                              <a href="/" target="_blank" rel="nofollow">
                                {" "}
                                Free Consultation
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 hidden-lg"></div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                  <div className="footer_widgets wid_tit style_one">
                    <div className="fo_wid_title">
                      <h2>Information</h2>
                    </div>
                  </div>
                  {/* <!--===============spacing==============--> */}
                  <div className="mr_bottom_20"></div>
                  {/* <!--===============spacing==============--> */}
                  <div className="footer_widgets clearfix navigation_foo light_color style_one">
                    <div className="navigation_foo_box">
                      <div className="navigation_foo_box">
                        <div className="navigation_foo_inner">
                          <div className="menu-information-container">
                            <ul className="menu">
                              <li className="menu-item">
                                <a href="/">How it’s Work</a>
                              </li>
                              <li className="menu-item">
                                <a href="/">Partners</a>
                              </li>
                              <li className="menu-item">
                                <a href="/">Testimonials</a>
                              </li>
                              <li className="menu-item">
                                <a href="/">Key Areas</a>
                              </li>
                              <li className="menu-item">
                                <a href="/">Case Studies</a>
                              </li>
                              <li className="menu-item">
                                <a href="/">Pricing</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                  <div className="footer_widgets wid_tit style_one">
                    <div className="fo_wid_title">
                      <h2>Essentials</h2>
                    </div>
                  </div>
                  {/* <!--===============spacing==============--> */}
                  <div className="mr_bottom_20"></div>
                  {/* <!--===============spacing==============--> */}
                  <div className="footer_widgets clearfix navigation_foo light_color style_one">
                    <div className="navigation_foo_box">
                      <div className="navigation_foo_inner">
                        <ul className="menu">
                          <li className="menu-item">
                            <a href="/">Careers</a>
                          </li>
                          <li className="menu-item">
                            <a href="/">Infrastructure</a>
                          </li>
                          <li className="menu-item">
                            <a href="/">Client Support</a>
                          </li>
                          <li className="menu-item">
                            <a href="/">Privacy Policy</a>
                          </li>
                          <li className="menu-item">
                            <a href="/">Terms of Use</a>
                          </li>
                          <li className="menu-item">
                            <a href="/">Sitemap</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 hidden-lg"></div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                  <div className="footer_widgets wid_tit style_one">
                    <div className="fo_wid_title">
                      <h2>Get In Touch</h2>
                    </div>
                  </div>
                  {/* <!--===============spacing==============--> */}
                  <div className="mr_bottom_20"></div>
                  {/* <!--===============spacing==============--> */}
                  <div className="footer_widgets get_in_touch_foo light_color">
                    <div className="get_intouch_inrfo">
                      <div className="foo_cont_inner">
                        <div className="top">
                          <h6> Location</h6>
                          <p>
                            {" "}
                            280 Granite Run Drive Suite #200 Lancaster, PA 1760
                          </p>
                        </div>
                        <div className="bottom">
                          <h6> Contact</h6>
                          <div className="con_content">
                            <h5> Phone :</h5>
                            <a href="tel:+9806071234"> +98 060 712 34</a>
                          </div>
                          <div className="con_content">
                            <h5> Mail Us :</h5>
                            <a href="tel:sendmail@creote.com">
                              {" "}
                              sendmail@creote.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--===============spacing==============--> */}
            <div className="pd_bottom_40"></div>
            {/* <!--===============spacing==============--> */}
          </div>
          <div className="footer_copy_right bg_dark_3">
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_20"></div>
            {/* <!--===============spacing==============--> */}
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="footer_copy_content">
                    © 2023{" "}
                    <a href="https://themeforest.net/user/steelthemes">
                      Steelthemes.
                    </a>{" "}
                    All Rights Reserved.
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="nav_link_v_one text-md-end">
                    <ul>
                      <li>
                        <a href="/" target="_blank" rel="nofollow">
                          Terms Of Use
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_blank" rel="nofollow">
                          Private Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--===============spacing==============--> */}
            <div className="pd_bottom_20"></div>
            {/* <!--===============spacing==============--> */}
          </div>
        </div>
        {/* <!---==============footer end =================--> */}
        {/* <!---==============mobile menu =================--> */}
        <div className="crt_mobile_menu">
          <div className="menu-backdrop"></div>
          <nav className="menu-box">
            <div className="close-btn">
              <i className="icon-close"></i>
            </div>
            <form role="search" method="get" action="#">
              <input
                type="search"
                className="search"
                placeholder="Search..."
                value=""
                name="s"
                title="Search"
              />
              <button type="submit" className="sch_btn">
                {" "}
                <i className="icon-search"></i>
              </button>
            </form>
            <div className="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
          </nav>
        </div>
        {/* <!---==============mobile menu end =================--> */}
        {/* <!---==============search popup =================--> */}
        <div id="search-popup" className="search-popup">
          <div className="close-search">
            <i className="fa fa-times"></i>
          </div>
          <div className="popup-inner">
            <div className="overlay-layer"></div>
            <div className="search-form">
              <fieldset>
                <form role="search" method="get" action="#">
                  <input
                    type="search"
                    className="search"
                    placeholder="Search..."
                    value=""
                    name="s"
                    title="Search"
                  />
                  <button type="submit" className="sch_btn">
                    {" "}
                    <i className="icon-search"></i>
                  </button>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
        {/* <!---==============search popup end =================--> */}
        {/* <!---==============modal popup =================--> */}
        <div className="modal_popup one">
          <div className="modal-popup-inner">
            <div className="close-modal">
              <i className="fa fa-times"></i>
            </div>
            <div className="modal_box">
              <div className="row">
                <div className="col-lg-5 col-md-12 form_inner">
                  <div className="form_content">
                    <form
                      className="contact-form"
                      method="post"
                      action="sendemail.php"
                    >
                      <p>
                        <label>
                          {" "}
                          Your name
                          <br />
                          <input
                            type="text"
                            name="name"
                            value=""
                            size="40"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Enter Your Name"
                          />
                          <br />
                          <i className="fa fa-user"></i>
                          <br />
                        </label>
                      </p>
                      <p>
                        <label>
                          {" "}
                          Your email
                          <br />
                          <input
                            type="email"
                            name="email"
                            value=""
                            size="40"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Enter Your Email"
                          />
                          <br />
                          <i className="fa fa-envelope"></i>
                          <br />
                        </label>
                      </p>
                      <p>
                        <label>
                          {" "}
                          Subject
                          <br />
                          <input
                            type="text"
                            name="subject"
                            value=""
                            size="40"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Enter Your Subject"
                          />
                          <br />
                          <i className="fa fa-folder"></i>
                          <br />
                        </label>
                      </p>
                      <p>
                        <label>
                          {" "}
                          Your message (optional)
                          <br />
                          <textarea
                            name="message"
                            cols="40"
                            rows="10"
                            className="wpcf7-form-control wpcf7-textarea"
                            aria-invalid="false"
                            placeholder="Enter Your Message"
                          ></textarea>
                          <br />
                          <i className="fa fa-comments"></i>
                          <br />
                        </label>
                      </p>
                      <p>
                        <input type="submit" value="Submit" />
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 about_company_inner">
                  <div className="abt_content">
                    <div className="logo">
                      <img
                        src="assets/images/logo-default.png"
                        alt="img"
                        className="company_logo_modal"
                      />
                    </div>
                    <div className="text">
                      <p>
                        {" "}
                        The great explorer of the truth, the master-builder of
                        human happiness no one rejects dislikes avoids pleasure
                        itself because it is pleasure but because know who do
                        not those how to pursue pleasures rationally encounter
                        consequences that are extremely painful desires to
                        obtain.
                      </p>
                      <a href="/">Read More</a>
                    </div>
                    <div className="post_contet_modal">
                      <h2> Latest News</h2>
                      <div className="post_enable">
                        <div className="modal_post_grid">
                          <a href="blog-single.html">
                            <img
                              width="852"
                              height="812"
                              src="assets/images/blog-image-9.jpg"
                              className="main_img wp-post-image"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="modal_post_grid">
                          <a href="blog-single.html">
                            <img
                              width="852"
                              height="812"
                              src="assets/images/blog-image-8.jpg"
                              className="main_img wp-post-image"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="modal_post_grid">
                          <a href="blog-single.html">
                            <img
                              width="852"
                              height="812"
                              src="assets/images/blog-image-7.jpg"
                              className="main_img wp-post-image"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="modal_post_grid">
                          <a href="blog-single.html">
                            <img
                              width="852"
                              height="812"
                              src="assets/images/blog-image-6.jpg"
                              className="main_img wp-post-image"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="modal_post_grid">
                          <a href="blog-single.html">
                            <img
                              width="852"
                              height="812"
                              src="assets/images/blog-image-5.jpg"
                              className="main_img wp-post-image"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="copright">
                      © 2023 Creote. All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!---==============modal popup end=================--> */}
        {/* <!---==============cart=================--> */}
        <div className="side_bar_cart" id="mini_cart">
          <div className="cart_overlay"></div>
          <div className="cart_right_conten">
            <div className="close">
              <div className="close_btn_mini">
                <i className="icon-close"></i>
              </div>
            </div>
            <div className="cart_content_box">
              <div className="contnet_cart_box">
                <div className="widget_shopping_cart_content">
                  <p className="woocommerce-mini-cart__empty-message">
                    No products in the cart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!---==============cart=================--> */}
      </div>
      {/* <!-- Back to top with progress indicator--> */}
      {/* <div className="progress_indicator">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
            </svg>
        </div> */}
    </>
  );
};

export default Footer;
