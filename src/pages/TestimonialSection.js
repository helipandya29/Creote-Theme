import React from "react";
const imageUrl11 = "assets/images/testimonialbg.jpg";

const TestimonialSection = () => {
  return (
    <>
      {/* <!---testimonial---> */}
      <section
        className="testimonial bg_op_1"
        style={{ backgroundImage: `url(${imageUrl11})` }}
      >
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
            <div className="image">
              <img
                src="assets/images/testi-image.jpg"
                className="simp_img img-fluid object-fit-cover height_560px"
                alt=""
              />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_70"></div>
            {/* <!--===============spacing==============--> */}
            <div className="testimonial_sec_wrapper pd_left_70">
              <div className="title_all_box style_one light_color">
                <div className="title_sections">
                  <div className="before_title">Quote About</div>
                  <h2> Customers Experience</h2>
                </div>
                {/* <!--===============spacing==============--> */}
                <div className="mr_bottom_20"></div>
                {/* <!--===============spacing==============--> */}
              </div>
              <div className="testimonial_sec light_color style_one">
                <div className="icon_quotes">
                  <i className="icon-quote"></i>
                </div>
                <div
                  className="swiper-container"
                  data-swiper='{
                              "loop": true,
                              "autoplay": {
                                "delay": 7000
                              },
                              "speed": 1000,
                              "centeredSlides": false,
                              "slidesPerView": 1,
                              "spaceBetween": 30,
                              "navigation": {
                                "nextEl": ".next-single-one",
                                "prevEl": ".prev-single-one"
                              },
                              "pagination": {
                                "el": ".number-pagination",
                                "type": "fraction"
                              },
                              "breakpoints": {
                                "1200": {
                                  "slidesPerView": 1 
                                },
                                "1024": {
                                  "slidesPerView": 1 
                                },
                                "768": {
                                  "slidesPerView": 1 
                                },
                                "576": {
                                  "slidesPerView": 1 
                                },
                                "0": {
                                  "slidesPerView": 1 
                                }
                              }
                            }'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial_box">
                        <div className="rating">
                          <ul>
                            <li>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star empty"></span>
                            </li>
                          </ul>
                        </div>
                        <div className="authour_details  image_yes ">
                          <div className="image">
                            <img src="assets/images/testi-3.png" alt="" />
                          </div>
                          <div className="details">
                            <h2>Jacob Leonardo</h2>
                            <span>Senior Manager of Excel Solution</span>
                          </div>
                        </div>
                        <div className="comment">
                          While running an early stage startup everything feels
                          hard, that’s why it’s been so nice to have our
                          accounting feel easy. We recommed Qetus.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial_box">
                        <div className="rating">
                          <ul>
                            <li>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                            </li>
                          </ul>
                        </div>
                        <div className="authour_details  image_yes ">
                          <div className="image">
                            <img src="assets/images/testi-2.png" alt="" />
                          </div>
                          <div className="details">
                            <h2>Jacob Leonardo</h2>
                            <span>Senior Manager of Excel Solution</span>
                          </div>
                        </div>
                        <div className="comment">
                          While running an early stage startup everything feels
                          hard, that’s why it’s been so nice to have our
                          accounting feel easy. We recommed Qetus.
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial_box">
                        <div className="rating">
                          <ul>
                            <li>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star fill"></span>
                              <span className="fa fa-star empty"></span>
                              <span className="fa fa-star empty"></span>
                              <span className="fa fa-star empty"></span>
                            </li>
                          </ul>
                        </div>
                        <div className="authour_details  image_yes ">
                          <div className="image">
                            <img src="assets/images/testi-1.png" alt="" />
                          </div>
                          <div className="details">
                            <h2>Jacob Leonardo</h2>
                            <span>Senior Manager of Excel Solution</span>
                          </div>
                        </div>
                        <div className="comment">
                          While running an early stage startup everything feels
                          hard, that’s why it’s been so nice to have our
                          accounting feel easy. We recommed Qetus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrows">
                    <div className="prev-single-one"></div>
                    <div className="next-single-one"></div>
                  </div>
                  <div className="num_pagination">
                    <div className="number-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--===============spacing==============--> */}
            <div className="pd_bottom_70"></div>
            {/* <!--===============spacing==============--> */}
          </div>
          {/* <!---empty column---> */}
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12"></div>
          {/* <!---empty column---> */}
        </div>
      </section>
      {/* <!---testimonial-end---> */}
    </>
  );
};

export default TestimonialSection;
