import React from 'react';
const imageUrl1 = "assets/images/preloader.gif";

const PagePreHeader = () => {
  return (
    <div id="page" className="page_wapper hfeed site">
      <div className="style-switcher">
        <a href="#" id="switcher-toggler"><i className="fa fa-cog"></i></a>
        <h3>Color Skins</h3>
        <ul id="colorschemeOptions" title="Switch Color" data-css-path="assets/css/scss/elements/color-switcher/">
          <li>
            <a href="#" data-theme="color" style={{ backgroundColor: "#078586" }}> </a>
          </li>
          <li>
            <a href="#" data-theme="color1" style={{ backgroundColor: "#e5102a" }}> </a>
          </li>
          <li>
            <a href="#" data-theme="color2" style={{ backgroundColor: "#3ead3c" }}> </a>
          </li>
          <li>
            <a href="#" data-theme="color3" style={{ backgroundColor: "#fed000" }}> </a>
          </li>
          <li>
            <a href="#" data-theme="color4" style={{ backgroundColor: "#ff5538" }}> </a>
          </li>
          <li>
            <a href="#" data-theme="color5" style={{ backgroundColor: "#246af4" }}> </a>
          </li>
        </ul>
      </div>
      <div id="wrapper_full" className="content_all_warpper">
        {/* <!----page-header-----> */}
        <div className="mini_cart_togglers fixed_cart">
          <div className="mini-cart-count">
            0
          </div>
          <i className="icon-shopping-cart"></i>
        </div>
        {/* <!----pre loader-----> */}
        <div className="preloader-wrap">
          <div className="preloader" style={{ backgroundImage: `url(${imageUrl1})` }}>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
      {/* <!----pre loader end-----> */}
    </div>
  )
}

export default PagePreHeader;
