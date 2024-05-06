import axios from "axios";
import React, { useEffect, useState } from "react";

const HumanResource = () => {
  const [humanResource, setHumanResource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/creote/humanresource")
      .then((response) => {
        setHumanResource(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="service-section-two bg_light_1">
      <div className="pd_top_80"></div>
      <div className="container pd_zero">
        <div className="row">
          <div className="col-lg-12">
            <div className="title_all_box style_one text-center  dark_color">
              <div className="title_sections">
                <div className="before_title"> Making What’s </div>
                <h2>Possible in Human Resource</h2>
              </div>
            </div>
            <div className="mr_bottom_70"></div>
          </div>
          <div className="row">
            {humanResource.map((human, index) => (
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_three dark_color">
                  <div className="service_content">
                    <div className="content_inner">
                      <span className="icon-dollar">
                        <i></i>
                      </span>
                      <small className="nom">0{index + 1}</small>
                      <h2>
                        <a href="/">{human.title} </a>
                      </h2>
                      <p>{human.content}</p>
                      <a href="/" className="read_more">
                        Read more <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mr_bottom_30"></div>
              </div>
            ))}
            {/* <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="service_box style_three dark_color">
              <div className="service_content">
                <div className="content_inner">
                  <span className="icon-pharmacy"><i></i></span>
                  <small className="nom">02</small>
                  <h2><a href="/">Health Care Benefits</a></h2>
                  <p>The great explorer of the truth the master builders human happiness.</p>
                  <a href="/" className="read_more">Read more <i className="icon-right-arrow"></i></a>
                </div>
              </div>
            </div>
            <div className="mr_bottom_30"></div>
          </div> */}
            {/* <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="service_box style_three dark_color">
              <div className="service_content">
                <div className="content_inner">
                  <span className="icon-service"><i></i></span>
                  <small className="nom">03</small>
                  <h2><a href="/">Talent Management</a></h2>
                  <p>Laborious physo except obtains some advantage from it right.</p>
                  <a href="/" className="read_more">Read more <i className="icon-right-arrow"></i></a>
                </div>
              </div>
            </div>
            <div className="mr_bottom_30"></div>
          </div> */}
            {/* <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="service_box style_three dark_color">
              <div className="service_content">
                <div className="content_inner">
                  <span className=" icon-dollar"><i></i></span>
                  <small className="nom">04</small>
                  <h2><a href="/">Risk Management</a></h2>
                  <p>Right to find fault with a mans who chooses enjoy has no annoying.</p>
                  <a href="/" className="read_more">Read more <i className="icon-right-arrow"></i></a>
                </div>
              </div>
            </div>
            <div className="mr_bottom_30"></div>
          </div> */}
          </div>
        </div>
      </div>
      <div className="pd_bottom_50"></div>
    </section>
  );
};

export default HumanResource;
