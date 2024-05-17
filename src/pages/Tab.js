import React, { useState} from 'react';
const imageUrl5 = "assets/images/tab-sec-bg.jpg";
const imageUrl6 = "assets/images/tab-image.jpg";
const imageUrl7 = "assets/images/blog-image-8.jpg";
const imageUrl8 = "assets/images/about-4.jpg";
const imageUrl9 = "assets/images/about-2.jpg";
const imageUrl10 = "assets/images/about-3.jpg";

const TabSection = () => {
    const [activeTab, setActiveTab] = useState("#tabtabone");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
     };

    return (
        <>
            {/* <!---tab----> */}
            <section className="tab-section bg_op_1" style={{ backgroundImage: `url(${imageUrl5})` }}>
                {/* <!--===============spacing==============--> */}
                <div className="pd_top_100"></div>
                {/* <!--===============spacing==============--> */}
                <div className="container">
                    <div className="row">
                        <div className="tabs_all_box  tabs_all_box_start type_one">
                            <div className="tab_over_all_box">
                                <div className="tabs_header clearfix">
                                    <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                        <li className="nav-item">
                                        <a className={`s_tab_btn nav-link ${activeTab === "#tabtabone" ? "active" : ""}`}   onClick={() => handleTabClick("#tabtabone")}>01. Affordable</a>
                                            {/* <a href="/" className="s_tab_btn nav-link active" data-tab="#tabtabone">01. Affordable</a> */}
                                        </li>
                                        <li className="nav-item">
                                        <a className={`s_tab_btn nav-link ${activeTab === "#tabtabtwo" ? "active" : ""}`} onClick={() => handleTabClick("#tabtabtwo")}>02. Knowledge</a>
                                            {/* <a href="/" className="s_tab_btn nav-link" data-tab="#tabtabtwo">02. Knowledge</a> */}
                                        </li>
                                        <li className="nav-item">
                                        <a className={`s_tab_btn nav-link ${activeTab === "#tabtabthree" ? "active" : ""}`} onClick={() => handleTabClick("#tabtabthree")}>03. Saves Time</a>
                                            {/* <a href="/" className="s_tab_btn nav-link" data-tab="#tabtabthree">03. Saves Time</a> */}
                                        </li>
                                        <li className="nav-item">
                                        <a className={`s_tab_btn nav-link ${activeTab === "#tabtabfour" ? "active" : ""}`} onClick={() => handleTabClick("#tabtabfour")}>04. Fast &amp; Quality </a>
                                            {/* <a href="/" className="s_tab_btn nav-link" data-tab="#tabtabtfour">04. Fast &amp; Quality</a> */}
                                        </li>
                                        <li className="nav-item">
                                        <a className={`s_tab_btn nav-link ${activeTab === "#tabtabfive" ? "active" : ""}`} onClick={() => handleTabClick("#tabtabfive")}>05. Experienced</a>
                                            {/* <a href="/" className="s_tab_btn nav-link" data-tab="#tabtabfive">05. Experienced</a> */}
                                        </li>
                                    </ul>
                                    <div className="toll_free">
                                        <a href="tel:180667586677"> <i className="icon-phone-call"></i>Call For Free Consultation</a>
                                    </div>
                                </div>
                                <div className="s_tab_wrapper">
                                    <div className="s_tabs_content">
                                    <div className={`s_tab fade ${activeTab === "#tabtabone" ? "active-tab show" : ""}`} id="tabtabone">
                                            <div className="tab_content one" style={{ backgroundImage: `url(${imageUrl6})` }}>
                                                <div className="content_image">
                                                    <h6>Why Creote</h6>
                                                    <h2>Affordable &amp; Flexible</h2>
                                                    <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                    <a href="/" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`s_tab fade ${activeTab === "#tabtabtwo" ? "active-tab show" : ""}`} id="tabtabtwo">
                                            <div className="tab_content one" style={{ backgroundImage: `url(${imageUrl7})` }}>
                                                <div className="content_image">
                                                    <h6>Why Creote</h6>
                                                    <h2>Affordable &amp; Flexible</h2>
                                                    <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                    <a href="/" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`s_tab fade ${activeTab === "#tabtabthree" ? "active-tab show" : ""}`} id="tabtabthree">
                                            <div className="tab_content one" style={{ backgroundImage: `url(${imageUrl8})` }}>
                                                <div className="content_image">
                                                    <h6>Why Creote</h6>
                                                    <h2>Affordable &amp; Flexible</h2>
                                                    <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                    <a href="/" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`s_tab fade ${activeTab === "#tabtabfour" ? "active-tab show" : ""}`} id="tabtabfour">
                                            <div className="tab_content one" style={{ backgroundImage: `url(${imageUrl9})` }}>
                                                <div className="content_image">
                                                    <h6>Why Creote</h6>
                                                    <h2>Affordable &amp; Flexible</h2>
                                                    <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                    <a href="/" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`s_tab fade ${activeTab === "#tabtabfive" ? "active-tab show" : ""}`} id="tabtabfive">
                                            <div className="tab_content one" style={{ backgroundImage: `url(${imageUrl10})` }}>
                                                <div className="content_image">
                                                    <h6>Why Creote</h6>
                                                    <h2>Affordable &amp; Flexible</h2>
                                                    <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
                                                    <a href="/" target="_blank" rel="nofollow" className="rd_more">Read More <i className="icon-right-arrow"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--===============spacing==============--> */}
                <div className="pd_bottom_90"></div>
                {/* <!--===============spacing==============--> */}
            </section>
            {/* <!---tab-end---> */}
        </>
    );
};

export default TabSection;
