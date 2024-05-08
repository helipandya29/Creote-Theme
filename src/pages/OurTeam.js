import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondHeader from "../components/SecondHeader";
const Team = () => {
  const [specificTeamMembers, setSpecificTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/creote/teamMembers")
      .then((response) => {
        setSpecificTeamMembers(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <!---team----> */}
      <section className="team-section" style={{ marginTop: "40px" }}>
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_80"></div>
        <SecondHeader page="Our Team" />
        {/* <!--===============spacing==============--> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <div className="before_title"> Dedicated Team</div>
                  <h2>Professional Individuals</h2>
                </div>
              </div>
              {/* <!--===============spacing==============--> */}
              <div className="pd_bottom_20"></div>
              {/* <!--===============spacing==============--> */}
            </div>
          </div>
          <div className="row">
            {specificTeamMembers.map((teamMember) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="team_box style_one" key={teamMember._id}>
                  <div className="team_box_outer flex flex">
                    <div className="member_image">
                      {/* <img src="assets/images/team-1.jpg" alt="team image" /> */}
                      <img src={teamMember.imageSrc} alt={teamMember.name} />
                    </div>
                    <div className="about_member">
                      <div className="share_media">
                        <ul className="first">
                          <li className="text">Share</li>
                          <li>
                            <i className="fa fa-share-alt"></i>
                          </li>
                        </ul>
                        <ul>
                          <li className="shar_alt">
                            <i className="fa fa-share-alt"></i>
                          </li>
                          <li>
                            <a href="/">
                              {" "}
                              <i className="fa fa-facebook"> </i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              {" "}
                              <i className="fa fa-twitter"> </i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              {" "}
                              <i className="fa fa-skype"> </i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              {" "}
                              <i className="fa fa-instagram"> </i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="authour_details">
                        {/* <span>Director </span>
                        <h6>Amelia Margaret</h6> */}
                        <span>{teamMember.role}</span>
                        <h6>{teamMember.name}</h6>
                        <div className="button_view">
                          <a
                            href="/"
                            target="_blank"
                            rel="nofollow"
                            className="theme-btn one"
                          >
                            {" "}
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--===============spacing==============--> */}
                <div className="mr_bottom_20"></div>
                {/* <!--===============spacing==============--> */}
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="team_box style_one">
                <div className="team_box_outer">
                  <div className="member_image">
                    <img src="assets/images/team-2.jpg" alt="team image" />
                  </div>
                  <div className="about_member">
                    <div className="share_media">
                      <ul className="first">
                        <li className="text">Share</li>
                        <li>
                          <i className="fa fa-share-alt"></i>
                        </li>
                      </ul>
                      <ul>
                        <li className="shar_alt">
                          <i className="fa fa-share-alt"></i>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-facebook"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-twitter"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-skype"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-instagram"> </i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="authour_details">
                      <span>Team Leader </span>
                      <h6>Andrew Cameron</h6>
                      <div className="button_view">
                        <a
                          href="/"
                          target="_blank"
                          rel="nofollow"
                          className="theme-btn one"
                        >
                          {" "}
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--===============spacing==============--> */}
            {/* <div className="mr_bottom_20"></div> */}
            {/* <!--===============spacing==============--> */}
            {/* </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="team_box style_one">
                <div className="team_box_outer">
                  <div className="member_image">
                    <img src="assets/images/team-3.png" alt="team image" />
                  </div>
                  <div className="about_member">
                    <div className="share_media">
                      <ul className="first">
                        <li className="text">Share</li>
                        <li>
                          <i className="fa fa-share-alt"></i>
                        </li>
                      </ul>
                      <ul>
                        <li className="shar_alt">
                          <i className="fa fa-share-alt"></i>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-facebook"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-twitter"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-skype"> </i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            {" "}
                            <i className="fa fa-instagram"> </i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="authour_details">
                      <span>Manager </span>
                      <h6>Sofia Charlotte</h6>
                      <div className="button_view">
                        <a
                          href="/"
                          target="_blank"
                          rel="nofollow"
                          className="theme-btn one"
                        >
                          {" "}
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* <!--===============spacing==============--> */}
            {/* <div className="mr_bottom_20"></div> */}
            {/* <!--===============spacing==============--> */}
          </div>
        </div>
        {/* </div> */}
        {/* <!--===============spacing==============--> */}
        <div className="pd_bottom_80"></div>
        {/* <!--===============spacing==============--> */}
      </section>
      {/* <!---team-end---> */}
    </>
  );
};

export default Team;