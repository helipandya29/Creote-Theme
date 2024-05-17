import axios from "axios";
import React, { useEffect, useState } from "react";

const Service = () => {
  const [customerServiceSection, setCustomerServiceSection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/creote/specificcustomerServiceSection")
      .then((response) => {
        setCustomerServiceSection(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="content" className="site-content " style={{ marginTop: "30px" }}>
      {/* <!--service--> */}
      <div className="row"></div>
      <section className="service-section-one bg_light_1">
        <div className="pd_top_80"></div>
        <div className="container">
          <div className="title_all_box style_one text-center dark_color">
            <div className="title_sections">
              <div className="before_title"> Check Out </div>
              <h2>Customer Service Section</h2>
            </div>
            <div className="pd_bottom_20"></div>
          </div>
          <div className="invisible_normal_spacing"></div>
          <div className="row">
            {customerServiceSection.map((customer, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12"
              >
                <div className="service_box style_four dark_color">
                  <div className="service_content">
                    <div className="image_box">
                      <img
                        src={customer.imageSrc}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="icon-video-player"></span>
                    </div>
                    <div className="content_inner">
                      <h2>
                        <a href="/">{customer.title}</a>
                      </h2>
                      <p>{customer.content}</p>
                    </div>
                  </div>
                </div>
                <div className="mr_bottom_30"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="pd_bottom_60"></div>
      </section>
      {/* <!--service end--> */}
      {/* <!--image-box-section--> */}
      <section className="image-box-section">
        <div className="pd_top_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
              <div className="image_boxes style_three">
                <img
                  src="assets/images/about-8.jpg"
                  className="img-fluid height_500 object-fit-cover"
                  alt=""
                />
                <div className="video_box">
                  <a
                    href="https://www.youtube.com/embed/-VK0axfge4A"
                    className="lightbox-image"
                  >
                    <i className="icon-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections ">
                  <div className="before_title"> Dedicated Team </div>
                  <h2>Professional Individuals</h2>
                  <p>
                    Our power of choice is untrammelled and when nothing
                    prevents being able to do what we like best every pleasure.
                  </p>
                </div>
              </div>
              <div className="progress_bar style_two">
                <div className="progress_new">
                  <div
                    className="ProgressBar ProgressBar--animateText"
                    data-progress="84"
                  >
                    <svg
                      className="ProgressBar-contentCircle"
                      height="170"
                      width="170"
                    >
                      <circle
                        className="ProgressBar-background"
                        cx="85"
                        cy="85"
                        r="75"
                      ></circle>
                      <circle
                        transform="rotate(-90, 85, 85)"
                        className="ProgressBar-circle"
                        cx="85"
                        cy="85"
                        r="75"
                        style={{
                          strokeDasharray: "471px",
                          strokeDashoffset: "75.36px",
                        }}
                      ></circle>
                    </svg>
                  </div>
                  <div className="progress-value">
                    <div>
                      <h6>Year of 2020</h6>
                    </div>
                  </div>
                </div>
                <div className="content_box">
                  <h2>84%</h2>
                  <h3>Income Statement</h3>
                  <p>
                    Certain circumstances seds owing to the claims duty
                    righteous indignation and so beguiled.
                  </p>
                </div>
              </div>
              <div className="pd_top_30"></div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="theme_btn_all color_one">
                    <a
                      href="/"
                      target="_blank"
                      rel="nofollow"
                      className="theme-btn one"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="extra_content image_with_content dark_color">
                    <div className="simple_image">
                      <img src="assets/images/cuntry-1.png" alt="img" />
                      <h2>
                        Since 1998,
                        <br />
                        Operating in Birmingham.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_80"></div>
      </section>
      {/* <!--image-box-section-end--> */}
    </div>
  );
};

export default Service;
