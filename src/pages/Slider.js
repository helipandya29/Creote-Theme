import React, { useState, useEffect } from "react";
import axios from "axios";

const Slider = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUsers")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="slider style_one pag_position_two">
      <div
        className="banner_carousel owl-carousel owl_nav_none owl_dots_block theme_carousel owl-theme"
        data-options='{"loop": true, "margin": 0, "autoHeight":true, "lazyLoad":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 7000, "smartSpeed": 1800, "responsive": { "0": { "items": "1" }, "768": { "items": "1" }, "1000": { "items": "1" }}}'
      >
        {users.map((user) => (
          <div className="slide-item" key={user._id}>
            <div className="slide-item-content content_left">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${user.imageUrl})` }}
              ></div>
              <div className="auto-container">
                <div className="d-flex align-items-center">
                  <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                    <div className="slider_content">
                      <h1>{user.heading}</h1>
                      <h6>{user.title}</h6>
                      <p className="description">{user.description}</p>
                      <a
                        href="/"
                        target="_blank"
                        rel="nofollow"
                        className="theme-btn one  animated _zoomIn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                    <div className="slider_image">
                      <img
                        src={user.imageSrc}
                        className="img-fluid"
                        alt="slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
