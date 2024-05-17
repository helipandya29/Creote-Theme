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
    </div>
  );
};

export default Service;
