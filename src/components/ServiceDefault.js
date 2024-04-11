import React from "react";
import SecondHeader from "./SecondHeader";

const ServiceDefault = () =>{
    return(
        <div id="page" className="page_wapper hfeed site" style={{marginTop : "100px"}}>
            <SecondHeader page="Service Default"/>
           {/* <!----page-CONTENT-----> */}
           <div id="content" className="site-content ">
              {/* <!--===============spacing==============--> */}
              <div className="pd_top_90"></div>
              {/* <!--===============spacing==============--> */}
              <section className="creote-service-box">
                 <div className="container">
                    <div className="row">
                       <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="service_post style_one">
                             <div className="image">
                                <div className="overlay"></div>
                                <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-6.jpeg" alt="img"/>
                             </div>
                             <div className="service_content icon_yes">
                                <div className="icon_box">
                                   <span className="icon icon-thumbs-up icon"></span>
                                </div>
                                <h2 className="title_service"><a href="/" rel="bookmark">Talent Management</a></h2>
                                <p className="short_desc">Once your company has hired the best employees, the next step.</p>
                                <a className="read_more" href="/"> Read More<i className="icon-right-arrow-long"></i></a>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="service_post style_one">
                             <div className="image">
                                <div className="overlay"></div>
                                <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-5.jpeg" alt="img"/>
                             </div>
                             <div className="service_content icon_yes">
                                <div className="icon_box">
                                   <span className="icon icon-thumbs-up icon"></span>
                                </div>
                                <h2 className="title_service"><a href="/" rel="bookmark">Health Care Benefits</a></h2>
                                <p className="short_desc">Workplace conflict can become a costly and time-consuming process.
                                </p>
                                <a className="read_more" href="/"> Read More<i className="icon-right-arrow-long"></i></a>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="service_post style_one">
                             <div className="image">
                                <div className="overlay"></div>
                                <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-4.jpeg" alt="img"/>
                             </div>
                             <div className="service_content icon_yes">
                                <div className="icon_box">
                                   <span className="icon icon-thumbs-up icon"></span>
                                </div>
                                <h2 className="title_service"><a href="/" rel="bookmark">Risk Management</a></h2>
                                <p className="short_desc">Mitigate workplace issues before they escalate ,Shared Time Human.
                                </p>
                                <a className="read_more" href="/"> Read More<i className="icon-right-arrow-long"></i></a>
                             </div>
                          </div>
                       </div>
  
                       <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="service_post style_one">
                             <div className="image">
                                <div className="overlay"></div>
                                <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-3.png" alt="img"/>
                             </div>
                             <div className="service_content icon_yes">
                                <div className="icon_box">
                                   <span className="icon icon-thumbs-up icon"></span>
                                </div>
                                <h2 className="title_service"><a href="/" rel="bookmark">Compliance Audits</a></h2>
                                <p className="short_desc">Prevents our being able too what get like best every pleasure.</p>
                                <a className="read_more" href="/"> Read More<i className="icon-right-arrow-long"></i></a>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="service_post style_one">
                             <div className="image">
                                <div className="overlay"></div>
                                <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-2.png" alt="img"/>
                             </div>
                             <div className="service_content icon_yes">
                                <div className="icon_box">
                                   <span className="icon icon-thumbs-up icon"></span>
                                </div>
                                <h2 className="title_service"><a href="/" rel="bookmark">Employee Relations</a></h2>
                                <p className="short_desc">Indignation sed dislike men who are beguiled and demoralized.</p>
                                <a className="read_more" href="/"> Read More<i className="icon-right-arrow-long"></i></a>
                             </div>
                          </div>
                       </div>
                       <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="service_post style_one">
                             <div className="image">
                                <div className="overlay"></div>
                                <img loading="lazy" width="500" height="500" src="assets/images/service/service-image-1.png" alt="img"/>
                             </div>
                             <div className="service_content icon_yes">
                                <div className="icon_box">
                                   <span className="icon icon-thumbs-up icon"></span>
                                </div>
                                <h2 className="title_service"><a href="/" rel="bookmark">Recruitment Process</a></h2>
                                <p className="short_desc">These cases are perfectly simple and easy to distinguish.</p>
                                <a className="read_more" href="/"> Read More<i className="icon-right-arrow-long"></i></a>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </section>
              {/* <!--===============spacing==============--> */}
              <div className="pd_top_80"></div>
              {/* <!--===============spacing==============--> */}
           </div>
        </div>
    )
}

export default ServiceDefault;