import React from "react";
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import SecondHeader from "../components/SecondHeader";
import TabSection from "./Home/Tab";
import Team from "./Home/Team";

const AboutUs = () =>{
   useEffect(() => {
      new Swiper('.swiper-container', {
        autoplay: { delay: 6000 },
        freemode: false,
        loop: true,
        speed: 1000,
        centeredSlides: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          1200: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          400: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });
    }, []);
    return(
      <div id="page" className="page_wapper hfeed site" style={{marginTop : "100px"}}>
      <SecondHeader page="About Us" />
      <div id="wrapper_full" className="content_all_warpper">
         
         <div id="content" className="site-content ">
            
            <section className="about-section">
    
               <div className="pd_top_90"></div>
               {/* <!--===============spacing==============--> */}
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-12 ">
                        <div className="about_content position-relative z_99">
                           <div className="title_all_box style_one text-left  dark_color">
                              <div className="title_sections">
                                 <div className="before_title">We are</div>
                                 <h2>Leaders in HR Solution</h2>
                              </div>
                           </div>
                           {/* <!--===============spacing==============--> */}
                           <div className="pd_bottom_15"></div>
                           {/* <!--===============spacing==============--> */}
                           <div className="extra_content image_with_content dark_color">
                              <div className="simple_image">
                                 <img src="assets/images/cuntry-1.png" alt="img"/>
                                 <h2> Since 1998, <br/> Operating in Birmingham.</h2>
                              </div>
                           </div>
                           {/* <!--===============spacing==============--> */}
                           <div className="pd_bottom_20"></div>
                           {/* <!--===============spacing==============--> */}
                           <div className="description_box">
                              <p>The great explorer of the truth, the master-builder of human happiness no one rejects
                                 dislikes avoids pleasure itself because it is pleasure but because know who do not
                                 those how to pursue pleasures rationally encounter consequences that are extremely
                                 painful desires to obtain. </p>
                           </div>
                           {/* <!--===============spacing==============--> */}
                           <div className="pd_bottom_25"></div>
                           {/* <!--===============spacing==============--> */}
                           <div className="row gutter_15px">
                              <div className="col-lg-6 col-md-12">
                                 <div className="icon_box_all  style_two">
                                    <div className="icon_content  icon_imgs ">
                                       <div className="icon">
                                          <img src="assets/images/icon-img-n-1.png" className="img-fluid svg_image" alt="icon png"/>
                                       </div>
                                       <div className="txt_content">
                                          <h3><a href="/" target="_blank" rel="nofollow">Tailored Advice &amp; Support</a>
                                          </h3>
                                       </div>
                                    </div>
                                    {/* <!--===============spacing==============--> */}
                                    <div className="pd_bottom_25"></div>
                                    {/* <!--===============spacing==============--> */}
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                 <div className="icon_box_all  style_two">
                                    <div className="icon_content  icon_imgs ">
                                       <div className="icon">
                                          <img src="assets/images/icon-img-n-2.png" className="img-fluid svg_image" alt="icon png"/>
                                       </div>
                                       <div className="txt_content">
                                          <h3><a href="/" target="_blank" rel="nofollow">Flexible Company Policies</a></h3>
                                       </div>
                                    </div>
                                    {/* <!--===============spacing==============--> */}
                                    <div className="pd_bottom_25"></div>
                                    {/* <!--===============spacing==============--> */}
                                 </div>
                              </div>
                           </div>

                           <div className="theme_btn_all color_one">
                              <a href="/" target="_blank" rel="nofollow" className="theme-btn five">Contact us<i className="icon-right-arrow"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-12">
                        <div className="image_boxes style_two">
                           <img src="assets/images/shape-1.png" className="background_image" alt=""/>
                           <div className="image one">
                              <img src="assets/images/about-6.png" className="img-fluid" alt=""/>
                           </div>
                           <div className="image two">
                              <img src="assets/images/about-7.png" className="img-fluid" alt=""/>
                              <div className="video_box">
                                 <a href="/" className="lightbox-image"><i className="icon-play"></i></a>
                              </div>
                           </div>
                           <div className="authour_quotes">
                              <i className="icon-quote"></i>
                              <h6>Making What’s Possible in Human Resource</h6>
                              <p>/ Liam Oliver</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--===============spacing==============--> */}
               <div className="pd_bottom_70"></div>
               {/* <!--===============spacing==============--> */}
            </section>
            {/* <!---about end---> */}
            {/* <!---service---> */}
            <section className="service-icon-section bg_light_1">
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_90"></div>
            {/* <!--===============spacing==============--> */}
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="title_all_box style_one text-center dark_color">
                           <div className="title_sections">
                              <div className="before_title">Our Business</div>
                              <h2 className="title">Stand Out From The Rest</h2>
                           </div>
                           {/* <!--===============spacing==============--> */}
                           <div className="pd_bottom_20"></div>
                           {/* <!--===============spacing==============--> */}
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="simple_image_boxes parallax_cover height_264px">
                              <img src="assets/images/icon-img-ab-1.jpg" className="simp_img cover-parallax" alt=""/>
                        </div>
                        {/* <!--===============spacing==============--> */}
                        <div className="pd_bottom_20"></div>
                        {/* <!--===============spacing==============--> */}
                        <div className="icon_box_all style_three">
                           <div className="icon_content ">
                              <div className="icon">
                                 <span className=" icon-bow-and-arrow"></span>
                              </div>
                              <div className="txt_content">
                                 <h3><a href="/" target="_blank" rel="nofollow">Our Mission</a></h3>
                                 <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                    the same as saying.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                        <div className="icon_box_all style_three">
                           <div className="icon_content ">
                              <div className="icon">
                                 <span className=" icon-growth"></span>
                              </div>
                              <div className="txt_content">
                                 <h3><a href="/" target="_blank" rel="nofollow">Our Core Values</a></h3>
                                 <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                    the same as saying.</p>
                                 <ul>
                                    <li>Integrity</li>
                                    <li>Commitment to excellence</li>
                                    <li>Consumer focus</li>
                                    <li>Accountability</li>
                                    <li>Inclusiveness</li>
                                 </ul>
                                 <div className="btn_left">
                                    <a href="/" target="_blank" rel="nofollow" className="theme-btn one">Read More</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                        <div className="icon_box_all style_three">
                           <div className="icon_content ">
                              <div className="icon">
                                 <span className=" icon-binoculars"></span>
                              </div>
                              <div className="txt_content">
                                 <h3><a href="/" target="_blank" rel="nofollow">Our Vision</a></h3>
                                 <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                    the same as saying.</p>
                              </div>
                           </div>
                        </div>
                        {/* <!--===============spacing==============--> */}
                        <div className="pd_bottom_20"></div>
                        {/* <!--===============spacing==============--> */}
                        <div className="simple_image_boxes  height_264px">
                           <img src="assets/images/icon-img-ab-2.jpg" className="simp_img img-fluid" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_90"></div>
            {/* <!--===============spacing==============--> */}
            </section>
            {/* <!---service end--->
            <!---timeline----> */}
            {/* <!---timeline----> */}
            <section className="timeline-section">
          {/* /  <!--===============spacing==============--> */}
            <div className="pd_top_90"></div>
            {/* <!--===============spacing==============--> */}
               <div className="row">
                  <div className="col-lg-12">
                     <div className="title_all_box style_one text-center dark_color">
                        <div className="title_sections">
                           <div className="before_title">Evaluation of</div>
                           <h2 className="title">Our Company &amp; Partners</h2>
                        </div>
                        {/* <!--===============spacing==============--> */}
                        <div className="pd_bottom_20"></div>
                        {/* <!--===============spacing==============--> */}
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12 pd_zero">
                     <div className="time_line_section style_one">
                     <div className="swiper-container" >
                           <div className="swiper-button-next">
                              <div className="border_one sme"></div>
                           </div>
                           <div className="swiper-button-prev">
                              <div className="border_two sme"></div>
                           </div>
                           <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">Company Started</a>
                                          </h2>
                                          <p>Expound the actual teachings of the great explorer the truth the masters
                                             builder of human happiness one rejects.</p>
                                       </div>
                                       <div className="year">
                                          1998
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-3-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">New Milestone</a>
                                          </h2>
                                          <p>No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                             but because those who pursue pleasure rationally.</p>
                                       </div>
                                       <div className="year">
                                          2000
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-5-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                First Award </a>
                                          </h2>
                                          <p> Undertakes laborious physical exercise except to obtain some advantage from
                                             it
                                             pursue pleasure rationally.
                                          </p>
                                       </div>
                                       <div className="year">
                                          2001
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/service-image-4.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                100 Employees </a>
                                          </h2>
                                          <p> Expound the actual teachings of the great
                                             explorer the truth the masters builder of human
                                             happiness one rejects.
                                          </p>
                                       </div>
                                       <div className="year">
                                          2004
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/blog-image-8.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                Company Started </a>
                                          </h2>
                                          <p> Expound the actual teachings of the great
                                             explorer the truth the masters builder of human
                                             happiness one rejects.
                                          </p>
                                       </div>
                                       <div className="year">
                                          1998
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-3-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                New Milestone </a>
                                          </h2>
                                          <p> No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                             but because those who
                                             pursue pleasure rationally.
                                          </p>
                                       </div>
                                       <div className="year">
                                          2000
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-5-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">Company Started</a>
                                          </h2>
                                          <p>Expound the actual teachings of the great explorer the truth the masters
                                             builder of human happiness one rejects.</p>
                                       </div>
                                       <div className="year">
                                          1998
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-3-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">New Milestone</a>
                                          </h2>
                                          <p>No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                             but because those who pursue pleasure rationally.</p>
                                       </div>
                                       <div className="year">
                                          2000
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-5-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                First Award </a>
                                          </h2>
                                          <p> Undertakes laborious physical exercise except to obtain some advantage from
                                             it
                                             pursue pleasure rationally.
                                          </p>
                                       </div>
                                       <div className="year">
                                          2001
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/service-image-4.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                100 Employees </a>
                                          </h2>
                                          <p> Expound the actual teachings of the great
                                             explorer the truth the masters builder of human
                                             happiness one rejects.
                                          </p>
                                       </div>
                                       <div className="year">
                                          2004
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/blog-image-8.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                Company Started </a>
                                          </h2>
                                          <p> Expound the actual teachings of the great
                                             explorer the truth the masters builder of human
                                             happiness one rejects.
                                          </p>
                                       </div>
                                       <div className="year">
                                          1998
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-3-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="swiper-slide">
                                 <div className="time_line_box">
                                    <div className="time_inner">
                                       <div className="border_liner">
                                          <span></span>
                                          <span className="last"></span>
                                       </div>
                                       <div className="content">
                                          <h2>
                                             <a href="/" target="_blank" rel="nofollow">
                                                New Milestone </a>
                                          </h2>
                                          <p> No one rejects dislikes or avoids pleasures itself because it is pleasures,
                                             but because those who
                                             pursue pleasure rationally.
                                          </p>
                                       </div>
                                       <div className="year">
                                          2000
                                       </div>
                                       <div className="image">
                                          <img src="assets/images/project-5-img.jpg" alt="img"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                          
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--===============spacing==============--> */}
               <div className="pd_top_90"></div>
               {/* <!--===============spacing==============--> */}
               <TabSection />
               <Team />
            </section>
            {/* <!---timeline----> */}
</div>
</div>
</div>

)

}

export default AboutUs;