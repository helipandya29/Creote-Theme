import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/creote/specificheader")
      .then((response) => {
        setHeader(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const creoteSearchPopup = () => {
      const searchPopup = document.getElementById("search-popup");
      const searchToggler = document.querySelectorAll(".search-toggler");
      const closeSearch = document.querySelectorAll(
        ".close-search, .search-popup .overlay-layer"
      );

      if (searchPopup) {
        searchToggler.forEach((toggler) => {
          toggler.addEventListener("click", () => {
            searchPopup.classList.add("popup-visible");
          });
        });

        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            searchPopup.classList.remove("popup-visible");
          }
        });

        closeSearch.forEach((element) => {
          element.addEventListener("click", () => {
            searchPopup.classList.remove("popup-visible");
          });
        });
      }
    };

    creoteSearchPopup();
  });

  useEffect(() => {
    const createContactPopup = () => {
      const contactPopup = document.querySelector(".modal_popup");
      const contactToggler = document.querySelector(".contact-toggler");
      const closeContact = document.querySelectorAll(".close-modal");

      const toggleContactPopup = () => {
        if (contactPopup) {
          contactPopup.classList.toggle("contact-popup-visible");
        }
      };

      if (contactToggler) {
        contactToggler.addEventListener("click", toggleContactPopup);
      }

      closeContact.forEach((element) => {
        element.addEventListener("click", () => {
          contactPopup.classList.remove("contact-popup-visible");
        });
      });

      // Cleanup function
      return () => {
        if (contactToggler) {
          contactToggler.removeEventListener("click", toggleContactPopup);
        }

        closeContact.forEach((element) => {
          element.removeEventListener("click", () => {
            contactPopup.classList.remove("contact-popup-visible");
          });
        });
      };
    };

    createContactPopup();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // <!----header----->
    <div className="header_area " id="header_contents">
      <div className="top_bar style_one">
        <div className="auto-container">
          <div className="row">
            {header.map((header, index) => (
              <div key={index} className="col-lg-12">
                <div className="top_inner">
                  <div className="left_side common_css">
                    <div className="contntent address">
                      <i className="icon-placeholder"></i>
                      <div className="text">
                        <small>Location</small>
                        <span> {header.location} </span>
                      </div>
                    </div>
                    <div className="contntent email">
                      <i className="icon-email"></i>
                      <div className="text">
                        <small>Email</small>
                        <Link to={`mailto:${header.email}`}>
                          {header.email}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="right_side common_css">
                    <div className="contntent phone">
                      <i className="icon-phone-call"></i>
                      <div className="text">
                        <small>Phone</small>
                        <Link to={`tel:${header.phone}`}>{header.phone}</Link>
                      </div>
                    </div>
                    <div className="contntent media">
                      <i className="icon-share"></i>
                      <div className="text">
                        <small>Share</small>
                        <Link to="#" target="_blank" rel="nofollow">
                          <i className="fa fa-facebook"></i>
                        </Link>
                        <Link to="#" target="_blank" rel="nofollow">
                          <i className="fa fa-twitter"></i>
                        </Link>
                        <Link to="#" target="_blank" rel="nofollow">
                          <i className="fa fa-skype"></i>
                        </Link>
                        <Link to="#" target="_blank" rel="nofollow">
                          <i className="fa fa-telegram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <header className="header header_default style_one style_two_remade get_sticky_header">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
              <div className="header_logo_box">
                <Link to="index.html" className="logo navbar-brand">
                  <img
                    src="assets/images/logo-default.png"
                    alt="Creote Elementor"
                    className="logo_default"
                  />
                  <img
                    src="assets/images/logo-default.png"
                    alt="Creote Elementor"
                    className="logo__sticky"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
              <div className="navbar_togglers hamburger_menu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
              <div className="header_content_collapse">
                <div className="header_menu_box">
                  <div className="navigation_menu">
                    <ul id="myNavbar" className="navbar_nav">
                      <li className="menu-item nav-item">
                        <Link to="/home" className="dropdown-toggle nav-link">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <Link to="#" className="dropdown-toggle nav-link">
                          <span>Pages</span>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="menu-item  nav-item">
                            <Link
                              to="/aboutUs"
                              className="dropdown-item nav-link"
                            >
                              <span>About Us</span>
                            </Link>
                          </li>
                          <li className="menu-item menu-item-has-children dropdown nav-item">
                            <Link
                              to="/serviceDefault"
                              className="dropdown-item nav-link"
                            >
                              <span>Service</span>
                            </Link>
                            <ul className="dropdown-menu">
                              <li className="menu-item  nav-item">
                                <Link
                                  to="/serviceClassic"
                                  className="dropdown-item nav-link"
                                >
                                  <span>Service classic</span>
                                </Link>
                              </li>
                              <li className="menu-item  nav-item">
                                <Link
                                  to="/serviceDefault"
                                  className="dropdown-item nav-link"
                                >
                                  <span>Service Default</span>
                                </Link>
                              </li>
                              <li className="menu-item nav-item">
                                <Link
                                  to="/serviceDetails"
                                  className="dropdown-item nav-link"
                                >
                                  <span>Service Details</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="/pricingPackages"
                              className="dropdown-item nav-link"
                            >
                              <span>Pricing Packages</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="/ourTeam"
                              className="dropdown-item nav-link"
                            >
                              <span>Our Team</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link to="/faqs" className="dropdown-item nav-link">
                              <span>Faq’s</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="/contact"
                              className="dropdown-item nav-link"
                            >
                              <span>Contact</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="coming-soon.html"
                              className="dropdown-item nav-link"
                            >
                              <span>Coming Soon</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                        <Link to="#" className="dropdown-toggle nav-link">
                          <span>Elements</span>
                        </Link>
                        <ul className="dropdown-menu width_60_percentage">
                          <li>
                            <div className="row">
                              <div className="col-lg-2 m_column">
                                <h5>Content 01</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <Link to="/testimonial">Testimonial</Link>
                                    </li>
                                    <li>
                                      <Link to="elements/call-to-action.html">
                                        Contact List
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/video-button.html">
                                        Video Button
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/newsteller.html">
                                        Newsteller
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/blog-posts.html">
                                        Blog Posts
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/team.html">Team</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>Content 02</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <Link to="elements/process.html">
                                        Process
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/project-carousel.html">
                                        Project Carousel
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/project-filter.html">
                                        Project Filter
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/progress-bar.html">
                                        Progress Bar
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/content-box.html">
                                        Content Box
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/faqs-elements.html">
                                        Faq’s
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>Presentational</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <Link to="elements/button.html">
                                        Button
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/list-items.html">
                                        List Items
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/contact-form.html">
                                        Contact Form
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/service-post.html">
                                        Service Post
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/sliders.html">
                                        Sliders
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/tabs.html">Tabs</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>Typography</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <Link to="elements/call-to-action.html">
                                        Call to Action
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/extra-content.html">
                                        Extra Content
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/simple-image.html">
                                        Simple Image
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/client-image.html">
                                        Client Image
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/price-plan.html">
                                        Price Plan
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/title.html">
                                        Title
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>Basic</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <Link to="elements/service-box.html">
                                        Service Box
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/count-down.html">
                                        Count Down
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/timeline.html">
                                        Time Line
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/contact-box.html">
                                        Contact Box
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-2 m_column">
                                <h5>Infographic</h5>
                                <div className="list_item_box style_one">
                                  <ul>
                                    <li>
                                      <Link to="elements/image-box.html">
                                        Image Box
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/icon-box.html">
                                        Icon Box
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/fun-facts.html">
                                        Fun Facts
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="elements/quotes.html">
                                        Quotes
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <Link to="/blog" className="dropdown-toggle nav-link">
                          <span>Blog</span>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="menu-item nav-item">
                            <Link to="/blog" className="dropdown-item nav-link">
                              <span>Blog Classic</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="/blogModern"
                              className="dropdown-item nav-link"
                            >
                              <span>Blog Modern</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="/blogSimple"
                              className="dropdown-item nav-link"
                            >
                              <span>Blog Simple</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="/blogListView"
                              className="dropdown-item nav-link"
                            >
                              <span>Blog List View</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="/blogMetro"
                              className="dropdown-item nav-link"
                            >
                              <span>Metro Fullwidth</span>
                            </Link>
                          </li>
                          <li className="menu-item nav-item">
                            <Link
                              to="/blogSinglePost"
                              className="dropdown-item nav-link"
                            >
                              <span>Single Post</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <Link
                          to="project-1-column-grid.html"
                          className="dropdown-toggle nav-link"
                        >
                          <span>Projects</span>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="menu-item  nav-item">
                            <Link
                              to="project-1-column-grid.html"
                              className="dropdown-item nav-link"
                            >
                              <span>1 Column Grid</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="project-1-column-with-sidebar.html"
                              className="dropdown-item nav-link"
                            >
                              <span>1 Column With Sidebar</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="project-2-column-grid.html"
                              className="dropdown-item nav-link"
                            >
                              <span>2 Columns Grid</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="project-3-column-grid.html"
                              className="dropdown-item nav-link"
                            >
                              <span>3 Columns Grid</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="project-3-column-overlay.html"
                              className="dropdown-item nav-link"
                            >
                              <span>3 Columns Overlay</span>
                            </Link>
                          </li>
                          <li className="menu-item nav-item">
                            <Link
                              to="project-details.html"
                              className="dropdown-item nav-link"
                            >
                              <span>Project Details</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item  menu-item-has-children dropdown nav-item">
                        <Link
                          to="shop.html"
                          className="dropdown-toggle nav-link"
                        >
                          <span>Shop</span>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="menu-item  nav-item">
                            <Link
                              to="shop.html"
                              className="dropdown-item nav-link"
                            >
                              <span>Products</span>
                            </Link>
                          </li>
                          <li className="menu-item nav-item">
                            <Link
                              to="shop-details.html"
                              className="dropdown-item nav-link"
                            >
                              <span>Product Details</span>
                            </Link>
                          </li>
                          <li className="menu-item nav-item">
                            <Link
                              to="shop-with-sidebar.html"
                              className="dropdown-item nav-link"
                            >
                              <span>Product With Sidebar</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="my-account.html"
                              className="dropdown-item nav-link"
                            >
                              <span>My account</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="checkout.html"
                              className="dropdown-item nav-link"
                            >
                              <span>Checkout</span>
                            </Link>
                          </li>
                          <li className="menu-item  nav-item">
                            <Link
                              to="cart.html"
                              className="dropdown-item nav-link"
                            >
                              <span>Cart</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header_right_content">
                  <ul>
                    <li>
                      <button type="button" className="search-toggler">
                        <i className="icon-search"></i>
                      </button>
                    </li>
                    <li className="header-button">
                      <Link
                        to="#"
                        target="_blank"
                        rel=""
                        className="theme-btn one"
                      >
                        {" "}
                        Get In Touch{" "}
                      </Link>
                    </li>
                    <li>
                      <button type="button" className="contact-toggler">
                        <i className="icon-bar"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*  <!-- end of the loop -->  */}
    </div>
    //  <!----header----->
  );
};

export default Header;
