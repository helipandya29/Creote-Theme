import axios from "axios";
import React, { useEffect, useState } from "react";

const ImageBoxSection = () => {
    const [imageBoxSection, setImageBoxSection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/creote/getSpecificImageBox")
          .then((response) => {
            setImageBoxSection(response.data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
      }

    return(
    <section className="image-box-section">
    <div className="pd_top_80"></div>
    <div className="container">
    {imageBoxSection.map((data) => (
      <div className="row" key={data._id}>
        <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
          <div className="image_boxes style_three">
            <img
              src={data.imageSrc}
              className="img-fluid height_500 object-fit-cover"
              alt=""
            />
            <div className="video_box">
              <a
                href={data.link}
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
              <div className="before_title"> {data.title} </div>
              <h2> {data.subTitle} </h2>
              <p> {data.content} </p>
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
                  <h6>Year of {data.year}</h6>
                </div>
              </div>
            </div>
            <div className="content_box">
              <h2>{data.percentage}%</h2>
              <h3>{data.percentageTitle}</h3>
              <p>{data.percentageContent}</p>
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
                  <img src={data.logo} alt="img" />
                  <h2>
                    Since {data.startYear},
                    <br />
                    Operating in {data.operating}.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
    <div className="pd_bottom_80"></div>
  </section>
    )
}

export default ImageBoxSection;