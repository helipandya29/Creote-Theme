import React, { useEffect, useState } from "react";
import axios from "axios";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css"
import { Autoplay, Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Logo = () => {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/creote/getSpecificLogo")
      .then((response) => setLogo(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="client-brand-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client_logo_carousel type_one">
              <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true, el: ".swiper-pagination" }}
                breakpoints={{
                  1200: { slidesPerView: 4 },
                  1024: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 1 },
                  0: { slidesPerView: 1 },
                }}
              >
                {logo.map((data) => (
                  <SwiperSlide key={data._id}>
                    <div className="image">
                      <img src={data.imageSrc} alt="Logo" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="pd_bottom_80"></div>
    </section>
  );
};

export default Logo;
