import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import jQuery from "jquery";

const imageUrl1 = "assets/images/preloader.gif";

const PagePreHeader = () => {
  const preloaderRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (preloaderRef.current) {
      preloaderRef.current.style.display = "block";
      setTimeout(() => {
        preloaderRef.current.style.display = "none";
      }, 500);
    }
  }, [location]);

  useEffect(() => {
    (function ($) {
      // Check if jQuery and the styleSwitcher plugin are loaded
      if ($.fn.styleSwitcher) {
        if ($("#colorschemeOptions").length) {
          var cssPath = $("#colorschemeOptions").data('css-path');
          $("#colorschemeOptions").styleSwitcher({
            hasPreview: false,
            fullPath: cssPath,
            defaultThemeId: 'creote-color-switcher-css',
            cookie: {
              expires: 999,
              isManagingLoad: true
            }
          });
        }

        if ($(".style-switcher").length) {
          $("#switcher-toggler").on("click", function (e) {
            e.preventDefault();
            $(".style-switcher").toggleClass("active");
          });
        }
      } else {
        console.error("styleSwitcher plugin not found");
      }
    })(jQuery);
  }, []); // Empty dependency array to ensure it runs once after component mounts

  return (
    <div id="page" className="page_wapper hfeed site">
      <div className="style-switcher">
        <Link to="/" id="switcher-toggler">
          <i className="fa fa-cog"></i>
        </Link>
        <h3>Color Skins</h3>
        <ul
          id="colorschemeOptions"
          title="Switch Color"
          data-css-path="assets/css/color/"
        >
          <li>
            <Link
              to="#"
              style={{ backgroundColor: "#078586" }}
            >  </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{ backgroundColor: "#e5102a" }}
            >  </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{ backgroundColor: "#3ead3c" }}
            >  </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{ backgroundColor: "#fed000" }}
            >  </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{ backgroundColor: "#ff5538" }}
            >  </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{ backgroundColor: "#246af4" }}
            >  </Link>
          </li>
        </ul>
      </div>
      <div id="wrapper_full" className="content_all_warpper">
        <div className="mini_cart_togglers fixed_cart">
          <div className="mini-cart-count">0</div>
          <i className="icon-shopping-cart"></i>
        </div>
        <div className="preloader-wrap" ref={preloaderRef}>
          <div
            className="preloader"
            style={{ backgroundImage: `url(${imageUrl1})` }}
          ></div>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default PagePreHeader;
