import React, { useState, useEffect } from "react";
import axios from "axios";

const Slider = () => {
  const [users, setUsers] = useState([]);
                                          
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/creote/getSpecificSlider")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
    // Initialize the jQuery slider plugin after the component is mounted
    // Replace 'sliderElement' with the appropriate selector for your slider
  }, []);

  useEffect(() => {
    $(".banner_carousel").owlCarousel({
      // Owl Carousel options
      loop: true,
      margin: 0,
      autoheight: true,
      lazyload: true,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 1800,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    // Cleanup function to destroy the slider when the component is unmounted
    return () => {
      $(".banner_carousel").owlCarousel("destroy");
    };
  }, [users]);

  return (
    <section className="slider style_one ">
      <div
        className="banner_carousel owl-carousel owl_nav_none owl_dots_block theme_carousel owl-theme"
        data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 7000, "smartSpeed": 1800, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'
      >
        {users &&
          users.map((user) => (
            <div className="slide-item" key={user._id}>
              <div className="slide-item-content content_left">
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${user.imageSrc})` }}
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
                          src={user.sliderImg}
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
