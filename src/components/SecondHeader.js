import React from "react";
import { Link } from "react-router-dom";

const SecondHeader = (props) => {
  return (
    <div className="page_header_default style_one ">
      <div className="parallax_cover">
        <img
          src="assets/images/page-header-default.jpg"
          alt="bg_image"
          className="cover-parallax"
        />
      </div>
      <div className="page_header_content">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner_title_inner">
                <div className="title_page">{props.page}</div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="breadcrumbs creote">
                <ul className="breadcrumb m-auto">
                  <li>
                    <Link to="/home">Home</Link>{" "}
                  </li>
                  <li>
                    <Link to="/aboutUs">{props.page}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;