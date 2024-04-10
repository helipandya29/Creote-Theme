import React from "react";
import  { useState, useEffect } from 'react';
import axios from 'axios';
const imageUrl2 = "assets/images/slider-2-bg.jpg";
const imageUrl3 = "assets/images/slider-2-bg.jpg";
const imageUrl4 = "assets/images/slider-2-bg.jpg";

const Slider = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers') 
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <section className="slider style_one pag_position_two">
      <div className="banner_carousel owl-carousel owl_nav_none owl_dots_block theme_carousel owl-theme" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 0, &quot;autoheight&quot;:true, &quot;lazyload&quot;:true, &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;smartSpeed&quot;: 1800, &quot;responsive&quot;:{ &quot;0&quot; :{ &quot;items&quot;: &quot;1&quot; }, &quot;768&quot; :{ &quot;items&quot; : &quot;1&quot; } , &quot;1000&quot;:{ &quot;items&quot; : &quot;1&quot; }}}">
      {users.length > 0 && users.map(user =>(
        <div className="slide-item" key={user._id}>
          <div className="slide-item-content content_left">
            <div className="image-layer" style={{backgroundImage: `url(${imageUrl2})`}}></div>
            <div className="auto-container">
              <div className="d-flex align-items-center">
                <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                  <div className="slider_content">
                    <h1>{user.heading1}</h1>
                    <h6>{user.title1}</h6>
                    <p className="description">{user.description1}</p>
                    <a href="/" target="_blank" rel="nofollow" className="theme-btn one  animated _zoomIn">Read More</a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                  <div className="slider_image">
                    <img src="assets/images/slider-2-1.png" className="img-fluid" alt="slider"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {users.length > 0 && users.map(user =>(
        <div className="slide-item" key={user._id}>
          <div className="slide-item-content content_right">
            <div className="image-layer" style={{backgroundImage: `url(${imageUrl3})`}}></div>
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                  <div className="slider_content">
                    <h1>{user.heading2}</h1>
                    <h6>{user.title2}</h6>
                    <p className="description">{user.description2}</p>
                    <a href="/" target="_blank" rel="nofollow" className="theme-btn one">Read More</a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                  <div className="slider_image">
                    <img src="assets/images/slider-2-2.png" className="img-fluid" alt="slider"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {users.length > 0 && users.map(user =>(
        <div className="slide-item" key={user._id}>
          <div className="slide-item-content content_left">
            <div className="image-layer" style={{backgroundImage: `url(${imageUrl4})`}}></div>
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12  col-sm-12 col-xs-12">
                  <div className="slider_content">
                    <h1>{user.heading3}</h1>
                    <h6>{user.title3}</h6>
                    <p className="description">{user.description3}</p>
                    <a href="/" target="_blank" rel="nofollow" className="theme-btn one">Read More</a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 image_column">
                  <div className="slider_image">
                    <img src="assets/images/slider-2-3.png" className="img-fluid" alt="slider"/>
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
