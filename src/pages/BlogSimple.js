import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondHeader from "../components/SecondHeader";
import { Link } from "react-router-dom";

const BlogSimple = () => {
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
                {blog.map((data) => (
                  <div className="news_box style_six grid_box _card has_images">
                    <div className="content_box">
                      <div className="overlay"> </div>
                      <img
                        src={data.imageSrc}
                        className="img-fluid"
                        alt="img"
                      />
                      <div className="category">
                        <Link to="/" className="categories">
                          <i className="icon-folder"></i>
                          {data.imageTitle}
                        </Link>
                      </div>
                      <div className="content_mid">
                        <span className="date_in_number">
                          {" "}
                          {formatDate(data.date)}
                        </span>
                        <h2 className="title">
                          <Link to="/blogSinglePost" rel="bookmark">
                            {data.heading}
                          </Link>
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
        <div className="pd_top_70"></div>
        {/* <!--===============spacing==============--> */}
      </section>
    </div>
  );
};

export default BlogSimple;
