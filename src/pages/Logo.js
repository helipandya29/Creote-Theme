import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Logo = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      autoplay: {
        delay: 6000,
        disableOnInteraction: false, // Ensure autoplay continues even if the user interacts with the Swiper
      },
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1200: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
    });
  
    // Ensure Swiper instance is destroyed when component unmounts
    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);
  

  const imagePaths = [
    "assets/images/CLIENT-logo-1.png",
    "assets/images/CLIENT-logo-2.png",
    "assets/images/CLIENT-logo-3.png",
    "assets/images/CLIENT-logo-4.png",
  ];

  return (
    <section className="client-brand-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client_logo_carousel type_one">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {imagePaths.map((path, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="image">
                        <img src={path} alt={`clients-logo-${index}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd_bottom_80"></div>
    </section>
  );
};

export default Logo;
