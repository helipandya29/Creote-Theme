import React from "react";
import SecondHeader from "../components/SecondHeader";
import { Link } from "react-router-dom";

const BlogSimple = () => {
  return (
    <div id="content" className="site-content" style={{ marginTop: "100px" }}>
      <SecondHeader page="Blog Simple" />
      <section className="blog_post_section four_column news_wrapper_grid style_six ">
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_90"></div>
        {/* <!--===============spacing==============--> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="grid_show_case grid_layout clearfix">
                <div className="news_box style_six grid_box _card has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-9.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/" className="categories">
                        <i className="icon-folder"></i>Coaching
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          Why Should Business Payroll Outsourcing?
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-1.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Evan Thomas </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news_box style_six grid_box _card  has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-8.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/blogSinglePost" className="categories">
                        <i className="icon-folder"></i>HR Consulting
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          Most Employees Support Measures
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-1.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Evan Thomas </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news_box style_six grid_box _card has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-7.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/blogSinglePost" className="categories">
                        <i className="icon-folder"></i>Compliance Audits
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          How to Handle Employee
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-1.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Evan Thomas </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news_box style_six grid_box _card has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-6.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/blogSinglePost" className="categories">
                        <i className="icon-folder"></i>Coaching
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          Retaining Good Employees &amp; Motivated
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-1.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Roman Brayden </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news_box style_six grid_box _card has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-5.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/blogSinglePost" className="categories">
                        <i className="icon-folder"></i>Compliance Audits
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          Understanding Executive Coaching
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-1.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Evan Thomas </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news_box style_six grid_box _card has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-4.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/blogSinglePost" className="categories">
                        <i className="icon-folder"></i>Coaching
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          How to Handle Your Good Employee
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-2.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Roman Brayden </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news_box style_six grid_box _card has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-3.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/blogSinglePost" className="categories">
                        <i className="icon-folder"></i>Employee Relations
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          Workforce Challenges &amp; Opportunities
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-1.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Evan Thomas </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news_box style_six grid_box _card has_images">
                  <div className="content_box">
                    <div className="overlay"> </div>
                    <img
                      src="assets/images/blog-image-11.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="category">
                      <Link to="/blogSinglePost" className="categories">
                        <i className="icon-folder"></i>Coaching
                      </Link>
                    </div>
                    <div className="content_mid">
                      <span className="date_in_number">October 8, 2023</span>
                      <h2 className="title">
                        <Link to="/blogSinglePost" rel="bookmark">
                          Workplace problems in your business?
                        </Link>
                      </h2>
                    </div>
                    <div className="auhtour_box">
                      <img
                        alt="img"
                        src="assets/images/auth-1.png"
                        height="60"
                        width="60"
                        className="img-fluid"
                      />
                      <div className="contnet_a">
                        <p>POSTED BY</p>
                        <h4> Evan Thomas </h4>
                      </div>
                    </div>
                  </div>
                </div>
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

export default BlogSimple;