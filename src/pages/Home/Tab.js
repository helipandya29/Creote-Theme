import axios from 'axios';
import React, { useEffect, useState } from 'react';
const imageUrl5 = "assets/images/tab-sec-bg.jpg";

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [tab, setTab] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/creote/tab")
            .then((response) => setTab(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="tab-section bg_op_1" style={{ backgroundImage: `url(${imageUrl5})` }}>
            <div className="pd_top_100"></div>
            <div className="container">
                <div className="row">
                    <div className="tabs_all_box tabs_all_box_start type_one">
                        <div className="tab_over_all_box">
                            <div className="tabs_header clearfix">
                                <ul className="showcase_tabs_btns nav-pills nav clearfix">
                                    {tab.map((data, index) => (
                                        <li key={index} className="nav-item">
                                            <a 
                                                className={`s_tab_btn nav-link ${activeTab === index ? "active" : ""}`} 
                                                onClick={() => handleTabClick(index)}
                                            >
                                                0{index + 1}. {data.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="toll_free">
                                    <a href="tel:180667586677">
                                        <i className="icon-phone-call"></i>Call For Free Consultation
                                    </a>
                                </div>
                            </div>
                            <div className="s_tab_wrapper">
                                <div className="s_tabs_content">
                                    {tab.map((data, index) => (
                                        <div key={index} className={`s_tab fade ${activeTab === index ? "active-tab show" : ""}`}>
                                            <div className="tab_content one" style={{ backgroundImage: `url(${data.imageSrc})` }}>
                                                <div className="content_image">
                                                    <h6>{data.heading}</h6>
                                                    <h2>{data.subHeading}</h2>
                                                    <p>{data.content}</p>
                                                    <a href="/" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pd_bottom_90"></div>
        </section>
    );
};

export default TabSection;
