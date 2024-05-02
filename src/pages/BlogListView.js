import React from "react";
import SecondHeader from "../components/SecondHeader";
import { Link } from "react-router-dom";
const BlogListView = () =>{
    return(
        <div id="content" className="site-content " style={{marginTop : "100px"}}>
            <SecondHeader page="Blog List View"/>
        <div className="auto-container">
           <div className="row default_row">
              <div id="primary" className="content-area  col-lg-8 col-md-12 col-sm-12 col-xs-12">

                    <section className="blog_post_section one_column style_two">
                       {/* <!--===============spacing==============--> */}
                       <div className="pd_top_90"></div>
                       {/* <!--===============spacing==============--> */}
                       <div className="grid_show_case grid_layout clearfix">
                          
                          <div className="grid_box _card">
                             <div className="news_box default_style list_view has_images">
                                <div className="image img_hover-1">
                                   <img width="750" height="420" src="assets/images/blog-image-9.jpg" className="img-fluid" alt="img"/>
                                   <Link to="/" className="categories">
                                      <i className="icon-folder"></i>Coaching
                                   </Link>            
                                </div>
                                <div className="content_box">
                                   <div className="date">
                                      <span className="date_in_number">October 8, 2023</span>
                                   </div>
                                   <div className="source">
                                      <h2 className="title"><Link to="/blogSimple" rel="bookmark">Why Should Business Payroll Outsourcing?</Link></h2>
                                      <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                      <Link to="/" className="link__go">Read More</Link>
                                   </div>
                                   <div className="auhtour_box">
                                      <img alt="img" src="assets/images/auth-1.png" height="60" width="60" className="img-fluid"/>                  
                                      <div className="contnet_a">
                                         <p>POSTED BY</p>
                                         <h4>
                                            Evan Thomas                     
                                         </h4>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="grid_box _card">
                             <div className="news_box default_style list_view has_images">
                                <div className="image img_hover-1">
                                   <img width="750" height="420" src="assets/images/blog-image-8.jpg" className="img-fluid" alt="img"/>
                                   <Link to="/" className="categories">
                                      <i className="icon-folder"></i>HR Consulting
                                   </Link>            
                                </div>
                                <div className="content_box">
                                   <div className="date">
                                      <span className="date_in_number">October 8, 2023</span>
                                   </div>
                                   <div className="source">
                                      <h2 className="title"><Link to="/blogSimple" rel="bookmark">Most Employees Support Measures</Link></h2>
                                      <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                      <Link to="/" className="link__go">Read More</Link>
                                   </div>
                                   <div className="auhtour_box">
                                      <img alt="img" src="assets/images/auth-1.png" height="60" width="60" className="img-fluid"/>                   
                                      <div className="contnet_a">
                                         <p>POSTED BY</p>
                                         <h4>
                                            Evan Thomas                     
                                         </h4>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="grid_box _card">
                             <div className="news_box default_style list_view has_images">
                                <div className="image img_hover-1">
                                   <img width="750" height="420" src="assets/images/blog-image-7.jpg" className="img-fluid" alt="img"/>
                                </div>
                                <div className="content_box">
                                   <div className="date">
                                      <span className="date_in_number">October 8, 2023</span>
                                   </div>
                                   <div className="source">
                                      <h2 className="title"><Link to="/blogSimple" rel="bookmark">How to Handle Employee</Link></h2>
                                      <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                      <Link to="/" className="link__go">Read More</Link>
                                   </div>
                                   <div className="auhtour_box">
                                      <img alt="img" src="assets/images/auth-1.png" height="60" width="60" className="img-fluid"/>                 
                                      <div className="contnet_a">
                                         <p>POSTED BY</p>
                                         <h4>
                                            Evan Thomas                     
                                         </h4>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="grid_box _card">
                             <div className="news_box default_style list_view has_images">
                                <div className="image img_hover-1">
                                   <img width="750" height="420" src="assets/images/blog-image-6.jpg" className="img-fluid" alt="img"/>
                                   <Link to="/" className="categories">
                                      <i className="icon-folder"></i>Coaching
                                   </Link>            
                                </div>
                                <div className="content_box">
                                   <div className="date">
                                      <span className="date_in_number">October 8, 2023</span>
                                   </div>
                                   <div className="source">
                                      <h2 className="title"><Link to="/blogSimple" rel="bookmark">Retaining Good Employees &amp; Motivated</Link></h2>
                                      <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                      <Link to="/" className="link__go">Read More</Link>
                                   </div>
                                   <div className="auhtour_box">
                                      <img alt="img" src="assets/images/auth-1.png" height="60" width="60" className="img-fluid"/>                
                                      <div className="contnet_a">
                                         <p>POSTED BY</p>
                                         <h4>
                                            Roman Brayden                     
                                         </h4>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="grid_box _card">
                             <div className="news_box default_style list_view has_images">
                                <div className="image img_hover-1">
                                   <img width="750" height="420" src="assets/images/blog-image-5.jpg" className="img-fluid" alt="img"/>
                                   <Link to="/" className="categories"><i className="icon-folder"></i>Compliance Audits</Link>            
                                </div>
                                <div className="content_box">
                                   <div className="date">
                                      <span className="date_in_number">October 8, 2023</span>
                                   </div>
                                   <div className="source">
                                      <h2 className="title"><Link to="/blogSimple" rel="bookmark">Understanding Executive Coaching</Link></h2>
                                      <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                      <Link to="/" className="link__go">Read More</Link>
                                   </div>
                                   <div className="auhtour_box">
                                      <img alt="img" src="assets/images/auth-1.png" height="60" width="60" className="img-fluid"/>                  
                                      <div className="contnet_a">
                                         <p>POSTED BY</p>
                                         <h4>
                                            Evan Thomas                     
                                         </h4>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="grid_box _card">
                             <div className="news_box default_style list_view has_images">
                                <div className="image img_hover-1">
                                   <img width="750" height="420" src="assets/images/blog-image-4.jpg" className="img-fluid" alt="img"/>
                                   <Link to="/" className="categories"><i className="icon-folder"></i>Coaching</Link>            
                                </div>
                                <div className="content_box">
                                   <div className="date">
                                      <span className="date_in_number">October 8, 2023</span>
                                   </div>
                                   <div className="source">
                                      <h2 className="title"><Link to="/blogSimple" rel="bookmark">How to Handle Your Good Employee</Link></h2>
                                      <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                      <Link to="/" className="link__go">Read More</Link>
                                   </div>
                                   <div className="auhtour_box">
                                      <img alt="img" src="assets/images/auth-2.png" height="60" width="60" className="img-fluid"/>                
                                      <div className="contnet_a">
                                         <p>POSTED BY</p>
                                         <h4>
                                            Roman Brayden                     
                                         </h4>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="grid_box _card">
                             <div className="news_box default_style list_view has_images">
                                <div className="image img_hover-1">
                                   <img width="750" height="420" src="assets/images/blog-image-3.jpg" className="img-fluid" alt="img"/>
                                   <Link to="/" className="categories"><i className="icon-folder"></i>Employee Relations</Link>            
                                </div>
                                <div className="content_box">
                                   <div className="date">
                                      <span className="date_in_number">October 8, 2023</span>
                                   </div>
                                   <div className="source">
                                      <h2 className="title"><Link to="/blogSimple" rel="bookmark">Workforce Challenges &amp; Opportunities</Link></h2>
                                      <p className="short_desc">How well this mistaken ideas off denouncing pleasure &amp; praisings will give you complete.</p>
                                      <Link to="/" className="link__go">Read More</Link>
                                   </div>
                                   <div className="auhtour_box">
                                      <img alt="img" src="assets/images/auth-1.png" height="60" width="60" className="img-fluid"/>                    
                                      <div className="contnet_a">
                                         <p>POSTED BY</p>
                                         <h4>
                                            Evan Thomas                     
                                         </h4>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="row">
                          <div className="col-lg-12">
                             <nav aria-label="Page navigation example">
                                <ul className="pagination text-center">
                                   <li className="active">
                                      <Link to="/blogSimple">1</Link>
                                   </li>
                                   <li>
                                      <Link to="/blogSimple">2</Link>
                                   </li>
                                   <li className="next_link">
                                      <Link to="/blogSimple">
                                         <div className="nav-next"><i className="fas fa-angle-right"></i></div>
                                      </Link>
                                   </li>
                                </ul>
                             </nav>
                          </div>
                       </div>
                       {/* <!--===============spacing==============--> */}
                       <div className="pd_bottom_70"></div>
                       {/* <!--===============spacing==============--> */}
                    </section>
         
              </div>
              <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                 <div className="side_bar">
                    {/* <!--===============spacing==============--> */}
                    <div className="pd_top_90"></div>
                    {/* <!--===============spacing==============--> */}
                    <div className="widgets_grid_box">
                       <form role="search" method="get" action="index.html/">
                          <div className="wp-block-search__inside-wrapper">
                             <input type="search" name="s" value="" placeholder="Key Words here" required=""/>
                             <i className="fa fa-search"></i>
                          </div>
                       </form>
                    </div>
                    <div className="widgets_grid_box">
                       <h2 className="widget-title">About Authour</h2>
                       <div className="about_authour_widget">
                          <h3>Hi! I’m Jacob Leonado</h3>
                          <img src="assets/images/authour-image-wdts.jpg" alt="authourimage"/>
                          <p>Obligations of business will frequently occur that pleasure have too repudiated.</p>
                          <Link to="/">All My Post</Link>
                       </div>
                    </div>
                    <div className="widgets_grid_box">
                       <h2 className="widget-title">Post Categories</h2>
                       <ul className="wp-block-categories">
                          <li><Link to="/">Beds</Link> (1)</li>
                          <li><Link to="/">Coaching</Link> (5)</li>
                          <li><Link to="/">Compliance Audits</Link> (5)</li>
                          <li><Link to="/">Employee Relations</Link> (8)</li>
                          <li><Link to="/">Furnitures</Link> (1)</li>
                          <li><Link to="/">HR Consulting</Link> (7)</li>
                          <li><Link to="/">Lights</Link> (1)</li>
                          <li><Link to="/">Recruiting</Link> (6)</li>
                          <li><Link to="/">Small Business HR</Link> (7)</li>
                          <li><Link to="/">Tables</Link> (1)</li>
                       </ul>
                    </div>
                    <div className="widgets_grid_box">
                       <h2 className="widget-title">Recent Posts</h2>
                       <div className="widget_post_box">
                          <div className="blog_in clearfix image_in">
                             <div className="image">
                                <img decoding="async" src="assets/images/blog-image-9.jpg" alt="img"/>
                             </div>
                             <div className="content_inner">
                                <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                <h3><Link to="/blogSimple">Why Should Business Payroll Outsourcing?</Link></h3>
                             </div>
                          </div>
                          <div className="blog_in clearfix image_in">
                             <div className="image">
                                <img decoding="async" src="assets/images/blog-image-8.jpg" alt="img"/>
                             </div>
                             <div className="content_inner">
                                <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                <h3><Link to="/blogSimple">Most Employees Support Measures</Link></h3>
                             </div>
                          </div>
                          <div className="blog_in clearfix image_in">
                             <div className="image">
                                <img decoding="async" src="assets/images/blog-image-7.jpg" alt="img"/>
                             </div>
                             <div className="content_inner">
                                <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                <h3><Link to="/blogSimple">How to Handle Employee</Link></h3>
                             </div>
                          </div>
                          <div className="blog_in clearfix image_in">
                             <div className="image">
                                <img decoding="async" src="assets/images/blog-image-6.jpg" alt="img"/>
                             </div>
                             <div className="content_inner">
                                <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                <h3><Link to="/blogSimple">Retaining Good Employees &amp; Motivated</Link></h3>
                             </div>
                          </div>

                       </div>
                    </div>
                    <div className="widgets_grid_box">
                       <h2 className="widget-title">Tag Clouds</h2>
                       <div className="wp-block-tag-cloud">
                          <Link to="/">Appraisal</Link>
                          <Link to="/">Business</Link>
                          <Link to="/">Contract</Link>
                          <Link to="/">Data</Link>
                          <Link to="/">Efficiency</Link>
                          <Link to="/">Employment</Link>
                          <Link to="/">HR Procedures</Link>
                          <Link to="/">Legal</Link>
                          <Link to="/">Management</Link>
                          <Link to="/">Obligations</Link>
                       </div>
                    </div>
                    {/* <!--===============spacing==============--> */}
                    <div className="pd_bottom_70"></div>
                    {/* <!--===============spacing==============--> */}
                 </div>
              </aside>
           </div>
        </div>
     </div>
    )
}

export default BlogListView;