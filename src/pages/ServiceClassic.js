import React from "react";
import SecondHeader from "../components/SecondHeader.js";
import HumanResource from "./HumanResource.js"
const imageUrl1 = "assets/images/service/service-image-1.png"
const imageUrl2 = "assets/images/service/service-image-2.png"
const imageUrl3 = "assets/images/service/service-image-3.png"

const ServiceclassNameic = () =>{
    return(
        <div id="page" className="page_wapper hfeed site" style={{marginTop : "100px"}}>
         <SecondHeader page="Service Classic"/>
      <div id="wrapper_full" className="content_all_warpper">
         <div id="content" className="site-content ">
            {/* <!---service---> */}
            <section className="service-section">
               {/* <!--===============spacing==============--> */}
               <div className="pd_top_90"></div>
               {/* <!--===============spacing==============--> */}
               <div className="container">
                  <div className="row">
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="service_box style_two dark_color">
                           <div className="service_content_two ">
                              <div className="content_inner" style={{backgroundImage:`url(${imageUrl1})`}}>
                                 <div className="content_inner_in">
                                    <div className="icon_image">
                                       <img src="assets/images/010-job-search.png" className="img-fluid" alt=""/>
                                    </div>
                                    <h2>
                                       <a href="/"> Recruitment Process </a>
                                    </h2>
                                    <p> These cases are perfectly simple and easy to distinguish.</p>
                                    <ul>
                                       <li> Reducing Redundancy </li>
                                       <li> Uncovering Hidden Resources </li>
                                       <li> Increasing Company’s Agility </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="ovarlay_link">
                                 <a href="/">
                                    <i className="icon-right-arrow"></i>
                                 </a>
                              </div>
                              <div className="overlay_content">
                                 <h2>
                                    <a href="/"> Recruitment Process </a>
                                 </h2>
                                 <p> These cases are perfectly simple and easy to distinguish.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="service_box style_two dark_color">
                           <div className="service_content_two  active_ser">
                              <div className="content_inner" style={{backgroundImage: `url(${imageUrl2})`}}>
                                 <div className="content_inner_in">
                                    <div className="icon_image">
                                       <img src="assets/images/service-ico-1.png" className="img-fluid" alt=""/>
                                    </div>
                                    <h2>
                                       <a href="/">Employee Relations</a>
                                    </h2>
                                    <p>Indignation sed dislike men who are beguiled and demoralized.</p>
                                    <ul>
                                       <li>Improving Communication</li>
                                       <li>Employee issue resolution</li>
                                       <li>Proper Documentation Process</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="ovarlay_link">
                                 <a href="/"><i className="icon-right-arrow"></i></a>
                              </div>
                              <div className="overlay_content">
                                 <h2>
                                    <a href="/">Employee Relations</a>
                                 </h2>
                                 <p>Indignation sed dislike men who are beguiled and demoralized.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="service_box style_two dark_color">
                           <div className="service_content_two ">
                              <div className="content_inner" style={{backgroundImage: `url(${imageUrl3})`}}>
                                 <div className="content_inner_in">
                                    <div className="icon_image">
                                       <img src="assets/images/service-ico-2.png" className="img-fluid" alt=""/>
                                    </div>
                                    <h2>
                                       <a href="/">Compliance Audits</a>
                                    </h2>
                                    <p>Prevents our being able too what get like best every pleasure.</p>
                                    <ul>
                                       <li>Handling of employment</li>
                                       <li>Greater retention rates</li>
                                       <li>A fully engaged workforce</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="ovarlay_link">
                                 <a href="/"><i className="icon-right-arrow"></i></a>
                              </div>
                              <div className="overlay_content">
                                 <h2><a href="/">Compliance Audits</a></h2>
                                 <p>Prevents our being able too what get like best every pleasure.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--===============spacing==============--> */}
               <div className="pd_bottom_90"></div>
               {/* <!--===============spacing==============--> */}
            </section>
            <HumanResource/>
            {/* <!---service end---> */}
            <section className="progress-section">
               {/* <!--===============spacing==============--> */}
               <div className="pd_top_90"></div>
               {/* <!--===============spacing==============--> */}
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                        <div className="title_all_box style_one  dark_color">
                           <div className="title_sections left">
                              <div className="before_title">Successful &amp;</div>
                              <h2>Sustainable Growth</h2>
                              <p>Denounce with righteous indignation and dislike men who are beguiled and demoralized by
                                 the charms of pleasure.</p>
                           </div>
                        </div>
                        <div className="theme_btn_all color_one">
                           <a href="/" target="_blank" rel="nofollow" className="theme-btn four">Read more <i className="icon-right-arrow"></i></a>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="progress_bar style_three">
                           <h2>Recruitment Process <span>48%</span></h2>
                           <div className="bar">
                              <div className="bar-inner count-bar counted" data-percent="48%" style={{width: '48%'}}></div>
                           </div>
                        </div>

                        <div className="progress_bar style_three">
                           <h2>Employee Relations <span>79%</span></h2>
                           <div className="bar">
                              <div className="bar-inner count-bar counted" data-percent="79%" style={{width: '79%' }}></div>
                           </div>
                        </div>

                        <div className="progress_bar style_three">
                           <h2>Compliance Audits <span>65%</span></h2>
                           <div className="bar">
                              <div className="bar-inner count-bar counted" data-percent="65%" style={{ width: '65%' }}></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--===============spacing==============--> */}
               <div className="pd_bottom_50"></div>
               {/* <!--===============spacing==============--> */}
            </section>
            <section className="tab-section">
               <div className="container">
                  <div className="row">
                     <section className="tabs_all_box tabs_all_box_start type_two">
                        <div className="tab_over_all_box">
                           <div className="tabs_header clearfix">
                              <ul className="showcase_tabs_btns nav-pills nav clearfix">
                                 <li className="nav-item">
                                    <a href="/" className="s_tab_btn nav-link active" data-tab="#tabtabone">01.Benefits</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="/" className="s_tab_btn nav-link" data-tab="#tabtabtwo">02. HR Advice</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="/" className="s_tab_btn nav-link" data-tab="#tabtabtwothree">03. HR Audit</a>
                                 </li>
                              </ul>
                           </div>
                           <div className="s_tab_wrapper">
                              <div className="s_tabs_content">
                                 <div className="s_tab fade active-tab show" id="tabtabone">
                                    <div className="tab_content one">
                                       <div className="row">
                                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                             <div className="image">
                                                <img src="assets/images/tab-ser-img.png" alt="img"/>
                                             </div>
                                          </div>
                                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                             <div className="content_bx">
                                                <h6>Showing You</h6>
                                                <h2>The Way of Success</h2>
                                                <p>Denounce with righteous indignation and dislike men who are so
                                                   beguiled and demoralized by the charms of pleasure moment so blinded
                                                   by desire that they cannot foresee the pain and trouble.</p>
                                                <ul>
                                                   <li>Cost-Effective Services</li>
                                                   <li>Helps Reduce Business Risks</li>
                                                   <li>Management of Employee Performance</li>
                                                   <li>Increasing Company’s Agility</li>
                                                </ul>
                                                <a href="/" target="_blank" rel="nofollow" className="theme-btn two">Read
                                                   More</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="s_tab fade" id="tabtabtwo">
                                    <div className="tab_content one">
                                       <div className="row">
                                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                             <div className="image">
                                                <img src="assets/images/tab-ser-img.png" alt="img"/>
                                             </div>
                                          </div>
                                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                             <div className="content_bx">
                                                <h6>Why Creote</h6>
                                                <h2>Affordable &amp; Flexible</h2>
                                                <p>Must explain too you how all this mistaken idea of denouncing
                                                   pleasures
                                                   praising pain was born and we will give you complete account of the
                                                   system
                                                   the actual teachings of the great explorer.
                                                </p>
                                                <ul>
                                                   <li>
                                                      Cost-Effective Services
                                                   </li>
                                                   <li>
                                                      Helps Reduce Business Risks
                                                   </li>
                                                   <li>
                                                      Management of Employee Performance
                                                   </li>
                                                   <li>
                                                      Increasing Company’s Agility
                                                   </li>
                                                </ul>
                                                <a href="/" target="_blank" rel="nofollow" className="theme-btn two">
                                                   Read More
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="s_tab fade" id="tabtabtwothree">
                                    <div className="tab_content one">
                                       <div className="row">
                                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                             <div className="image">
                                                <img src="assets/images/tab-ser-img.png" alt="img"/>
                                             </div>
                                          </div>
                                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                             <div className="content_bx">
                                                <h6>Why Creote</h6>
                                                <h2>Affordable &amp; Flexible</h2>
                                                <p>Must explain too you how all this mistaken idea of denouncing
                                                   pleasures
                                                   praising pain was born and we will give you complete account of the
                                                   system
                                                   the actual teachings of the great explorer.
                                                </p>
                                                <ul>
                                                   <li>
                                                      Cost-Effective Services
                                                   </li>
                                                   <li>
                                                      Helps Reduce Business Risks
                                                   </li>
                                                   <li>
                                                      Management of Employee Performance
                                                   </li>
                                                   <li>
                                                      Increasing Company’s Agility
                                                   </li>
                                                </ul>
                                                <a href="/" target="_blank" rel="nofollow" className="theme-btn two">
                                                   Read More
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                  </div>
               </div>
               {/* <!--===============spacing==============--> */}
               <div className="pd_bottom_80"></div>
               {/* <!--===============spacing==============--> */}
            </section>
            


         </div>
         {/* <!--===============PAGE CONTENT==============--> */}
         {/* <!--===============PAGE CONTENT==============--> */}
      </div>
  
   
   
  
</div>
    )

}

export default ServiceclassNameic;