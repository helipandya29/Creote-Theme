import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondHeader from "../components/SecondHeader";
import { Link } from "react-router-dom";
const BlogListView = () => {
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
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div id="content" className="site-content " style={{ marginTop: "100px" }}>
      <SecondHeader page="Blog List View" />
      <div className="auto-container">
        <div className="row default_row">
          <div
            id="primary"
            className="content-area  col-lg-8 col-md-12 col-sm-12 col-xs-12"
          >
            <section className="blog_post_section one_column style_two">
              {/* <!--===============spacing==============--> */}
              <div className="pd_top_90"></div>
              {/* <!--===============spacing==============--> */}
              <div className="grid_show_case grid_layout clearfix">
                {blog.map((data) => (
                  <div key={data._id} className="grid_box _card">
                    <div className="news_box default_style list_view has_images">
                      <div className="image img_hover-1">
                        <img
                          width="750"
                          height="420"
                          src={data.imageSrc}
                          className="img-fluid"
                          alt="img"
                        />
                        <Link to="/" className="categories">
                          <i className="icon-folder"></i>
                          {data.imageTitle}
                        </Link>
                      </div>
                      <div className="content_box">
                        <div className="date">
                          <span className="date_in_number">
                            {formatDate(data.date)}
                          </span>
                        </div>
                        <div className="source">
                          <h2 className="title">
                            <Link to="/blogSimple" rel="bookmark">
                              {data.heading}
                            </Link>
                          </h2>
                          <p className="short_desc">{data.content}</p>
                          <Link to="/" className="link__go">
                            Read More
                          </Link>
                        </div>
                        <div className="auhtour_box">
                          <img
                            alt="img"
                            src={data.profilePic}
                            height="60"
                            width="60"
                            className="img-fluid"
                          />
                          <div className="contnet_a">
                            <p>POSTED BY</p>
                            <h4> {data.name} </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                          <div className="nav-next">
                            <i className="fas fa-angle-right"></i>
                          </div>
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
                <h2 className="widget-title">About Authour</h2>
                <div className="about_authour_widget">
                  <h3>Hi! I’m Jacob Leonado</h3>
                  <img
                    src="assets/images/authour-image-wdts.jpg"
                    alt="authourimage"
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
                          {formatDate(data.date)}
                        </p>
                        <h3>
                          <Link to="/blogSimple">{data.heading}</Link>
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

export default BlogListView;
