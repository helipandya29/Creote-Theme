import SecondHeader from "../components/SecondHeader";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogClassic = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/blog")
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);

    // Extract the month and day
    const [month, day] = formattedDate.split(" ");
    const formattedMonth = month.slice(0, 3); // Ensure it's only 3 letters

    return `${formattedMonth} ${day}`;
  };

  const fullFormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    // <!----page-CONTENT----->
    <div id="content" className="site-content " style={{ marginTop: "100px" }}>
      <SecondHeader page="Blog" />
      <div className="auto-container">
        <div className="row default_row">
          <div
            id="primary"
            className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12"
          >
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_90"></div>
            {/* <!--===============spacing==============--> */}
            <main id="main" className="site-main" role="main">
              <article
                id=""
                className="clearfix service type-service status-publish has-post-thumbnail hentry"
              >
                <div className="row grid_layout">
                  {blog.map((data) => (
                    <div
                      key={data._id}
                      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box"
                    >
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src={data.imageSrc}
                            className="wp-post-image"
                            alt="img"
                          />
                          <Link className="arrow" to="/">
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">
                              {formatDate(data.date)}
                            </span>
                          </div>
                          <Link to="/" className="categories">
                            <i className="icon-folder"></i>
                            {data.imageTitle}
                          </Link>
                          <h2 className="title">
                            <Link to="blog-single.html" rel="bookmark">
                              {data.heading}
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination text-center">
                        <li className="page-item active">
                          <Link className="page-link" to="/blogSimple">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="/blogSimple">
                            2
                          </Link>
                        </li>
                        <li className="page-item next_link">
                          <Link className="page-link" to="/blogSimple">
                            <i className="fas fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </article>
            </main>
            {/* <!--===============spacing==============--> */}
            <div className="pd_bottom_90"></div>
            {/* <!--===============spacing==============--> */}
          </div>
          <aside
            id="secondary"
            className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12"
          >
            <div className="side_bar">
              {/* <!--===============spacing==============--> */}
              <div className="pd_top_90"></div>
              {/* <!--===============spacing==============--> */}
              <div className="widgets_grid_box">
                <form role="search" method="get" action="index.html/">
                  <div className="wp-block-search__inside-wrapper">
                    <input
                      type="search"
                      name="s"
                      value=""
                      placeholder="Key Words here"
                      required=""
                    />
                    <i className="fa fa-search"></i>
                  </div>
                </form>
              </div>
              <div className="widgets_grid_box">
                <h2 className="widget-title">About Author</h2>
                <div className="about_authour_widget">
                  <h3>Hi! I’m Jacob Leonado</h3>
                  <img
                    src="assets/images/authour-image-wdts.jpg"
                    alt="author image"
                  />
                  <p>
                    Obligations of business will frequently occur that pleasure
                    have too repudiated.
                  </p>
                  <Link to="/">All My Post</Link>
                </div>
              </div>
              <div className="widgets_grid_box">
                <h2 className="widget-title">Post Categories</h2>
                <ul className="wp-block-categories">
                  <li>
                    <Link to="/">Beds</Link> (1)
                  </li>
                  <li>
                    <Link to="/">Coaching</Link> (5)
                  </li>
                  <li>
                    <Link to="/">Compliance Audits</Link> (5)
                  </li>
                  <li>
                    <Link to="/">Employee Relations</Link> (8)
                  </li>
                  <li>
                    <Link to="/">Furnitures</Link> (1)
                  </li>
                  <li>
                    <Link to="/">HR Consulting</Link> (7)
                  </li>
                  <li>
                    <Link to="/">Lights</Link> (1)
                  </li>
                  <li>
                    <Link to="/">Recruiting</Link> (6)
                  </li>
                  <li>
                    <Link to="/">Small Business HR</Link> (7)
                  </li>
                  <li>
                    <Link to="/">Tables</Link> (1)
                  </li>
                </ul>
              </div>
              <div className="widgets_grid_box">
                <h2 className="widget-title">Recent Posts</h2>
                <div className="widget_post_box">
                  {blog.map((data) => (
                    <div key={data._id} className="blog_in clearfix image_in">
                      <div className="image">
                        <img decoding="async" src={data.imageSrc} alt="img" />
                      </div>
                      <div className="content_inner">
                        <p className="post-date">
                          <span className="icon-calendar"></span>
                          {fullFormatDate(data.date)}
                        </p>
                        <h3>
                          <Link to="blog-single.html">{data.heading}</Link>
                        </h3>
                      </div>
                    </div>
                  ))}
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
  );
};

export default BlogClassic;
