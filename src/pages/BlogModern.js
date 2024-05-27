import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondHeader from "../components/SecondHeader";

const BlogModern = () => {
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
      <SecondHeader page="Blog Modern" />
      <section className="blog_post_section two_column  style_three">
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_90"></div>
        {/* <!--===============spacing==============--> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="grid_show_case grid_layout clearfix">
                {blog.map((data) => (
                  <div
                    key={data._id}
                    className="news_box style_two grid_box _card has_images"
                  >
                    <div className="content_box">
                      <div className="overlay"> </div>
                      <img
                        src={data.imageSrc}
                        className="img-fluid"
                        alt="img"
                      />
                      <div className="category">
                        <a href="/" className="categories">
                          <i className="icon-folder"></i>
                          {data.imageTitle}
                        </a>
                      </div>
                      <div className="content_mid">
                        <span className="date_in_number">
                          {formatDate(data.date)}
                        </span>
                        <h2 className="title">
                          <a href="blog-single.html" rel="bookmark">
                            {data.heading}
                          </a>
                        </h2>
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
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_100"></div>
        {/* <!--===============spacing==============--> */}
      </section>
    </div>
  );
};

export default BlogModern;
