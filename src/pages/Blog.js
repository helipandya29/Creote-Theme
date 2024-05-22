import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/creote/blog")
      .then((response) => setBlog(response.data))
      .catch((error) => console.log(error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div id="content" className="site-content">
      {/* <!---blog---> */}
      <section className="blog-section">
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_80"></div>
        {/* <!--===============spacing==============--> */}
        <div className="large-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <div className="before_title">Find Out Our</div>
                  <h2>Insights &amp; Intelligence</h2>
                </div>
              </div>
              {/* <!--===============spacing==============--> */}
              <div className="pd_bottom_30"></div>
              {/* <!--===============spacing==============--> */}
            </div>
          </div>
          <div className="row">
            {blog.map((data, index) => (
              <div
                key={data._id}
                className={`col-lg-6 ${
                  index % 2 === 0 ? "order-lg-1" : "order-lg-2"
                }`}
              >
                <div className="blog_post_section news_wrapper_grid style_two">
                  <div className="grid_box _card">
                    <div className="news_box default_style list_view has_images">
                      <div className="image img_hover-1">
                        <img
                          loading="lazy"
                          width="100%"
                          height="auto"
                          src={data.imageSrc}
                          className="img-fluid"
                          alt="img"
                        />
                        <a href="/" className="categories">
                          <i className="icon-folder"></i>
                          {data.imageTitle}
                        </a>
                      </div>
                      <div className="content_box">
                        <div className="date">
                          <span className="date_in_number">{formatDate(data.date)}</span>
                        </div>
                        <div className="source">
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              {data.heading}
                            </a>
                          </h2>
                          <p className="short_desc">{data.content}</p>
                          <a href="blog-single.html" className="link__go">
                            Read more
                          </a>
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
                            <h4>{data.name}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <!--===============spacing==============--> */}
        <div className="pd_bottom_60"></div>
        {/* <!--===============spacing==============--> */}
      </section>
      {/* <!---blog-end---> */}
    </div>
  );
};

export default Blog;
