import React from "react";
const BlogSinglePost = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div class="page_header_default style_one blog_single_pageheader">
        <div class="parallax_cover">
          <div class="simpleParallax">
            <img
              src="assets/images/page-header-default.jpg"
              alt="bg_image"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="page_header_content">
          <div class="auto-container">
            <div class="row">
              <div class="col-md-12">
                <div class="banner_title_inner">
                  <div class="title_page">Blog Single</div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="breadcrumbs creote">
                  <ul class="breadcrumb m-auto">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li class="active">Blog Single</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="meta_blog_single">
          <div class="auto-container">
            <div class="row">
              <div class="col-md-12">
                <div class="left_side">
                  <div class="category">
                    <a href="/" class="categors">
                      <i class="icon-folder"></i>Coaching
                    </a>
                  </div>
                  <div class="comments">
                    <i class="icon-text"></i>
                    <a href="#comment" class="Comments are Closed">
                      Post Comment
                    </a>
                  </div>
                </div>
                <div class="right_side">
                  <div class="content_box_auht d-flex">
                    <div class="authour_content">
                      <h6>Posted By</h6>
                      <h4>Evan Thomas</h4>
                    </div>
                    <div class="authour_image">
                      <img
                        alt="img"
                        src="https://secure.gravatar.com/avatar/7ea8dafdb4e8f044dda06278138291dd?s=50&amp;d=mm&amp;r=g"
                        height="50"
                        width="50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----header-----> */}
      {/* <!----page-CONTENT-----> */}
      <div id="content" class="site-content ">
        <div class="auto-container">
          <div class="row default_row">
            <aside
              id="secondary"
              class="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12"
            >
              <div class="side_bar">
                {/* <!--===============spacing==============--> */}
                <div class="pd_top_90"></div>
                {/* <!--===============spacing==============--> */}
                <div class="widgets_grid_box">
                  <form role="search" method="get" action="index.html/">
                    <div class="wp-block-search__inside-wrapper">
                      <input
                        type="search"
                        name="s"
                        value=""
                        placeholder="Key Words here"
                        required=""
                      />
                      <i class="fa fa-search"></i>
                    </div>
                  </form>
                </div>
                <div class="widgets_grid_box">
                  <h2 class="widget-title">About Authour</h2>
                  <div class="about_authour_widget">
                    <h3>Hi! I’m Jacob Leonado</h3>
                    <img
                      src="assets/images/authour-image-wdts.jpg"
                      alt="authourimage"
                    />
                    <p>
                      Obligations of business will frequently occur that
                      pleasure have too repudiated.
                    </p>
                    <a href="/">All My Post</a>
                  </div>
                </div>
                <div class="widgets_grid_box">
                  <h2 class="widget-title">Post Categories</h2>
                  <ul class="wp-block-categories">
                    <li>
                      <a href="/">Beds</a> (1)
                    </li>
                    <li>
                      <a href="/">Coaching</a> (5)
                    </li>
                    <li>
                      <a href="/">Compliance Audits</a> (5)
                    </li>
                    <li>
                      <a href="/">Employee Relations</a> (8)
                    </li>
                    <li>
                      <a href="/">Furnitures</a> (1)
                    </li>
                    <li>
                      <a href="/">HR Consulting</a> (7)
                    </li>
                    <li>
                      <a href="/">Lights</a> (1)
                    </li>
                    <li>
                      <a href="/">Recruiting</a> (6)
                    </li>
                    <li>
                      <a href="/">Small Business HR</a> (7)
                    </li>
                    <li>
                      <a href="/">Tables</a> (1)
                    </li>
                  </ul>
                </div>
                <div class="widgets_grid_box">
                  <h2 class="widget-title">Recent Posts</h2>
                  <div class="widget_post_box">
                    <div class="blog_in clearfix image_in">
                      <div class="image">
                        <img
                          decoding="async"
                          src="assets/images/blog-image-9.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="content_inner">
                        <p class="post-date">
                          <span class="icon-calendar"></span>October 8, 2023
                        </p>
                        <h3>
                          <a href="blog-single.html">
                            Why Should Business Payroll Outsourcing?
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div class="blog_in clearfix image_in">
                      <div class="image">
                        <img
                          decoding="async"
                          src="assets/images/blog-image-8.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="content_inner">
                        <p class="post-date">
                          <span class="icon-calendar"></span>October 8, 2023
                        </p>
                        <h3>
                          <a href="blog-single.html">
                            Most Employees Support Measures
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div class="blog_in clearfix image_in">
                      <div class="image">
                        <img
                          decoding="async"
                          src="assets/images/blog-image-7.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="content_inner">
                        <p class="post-date">
                          <span class="icon-calendar"></span>October 8, 2023
                        </p>
                        <h3>
                          <a href="blog-single.html">How to Handle Employee</a>
                        </h3>
                      </div>
                    </div>
                    <div class="blog_in clearfix image_in">
                      <div class="image">
                        <img
                          decoding="async"
                          src="assets/images/blog-image-6.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="content_inner">
                        <p class="post-date">
                          <span class="icon-calendar"></span>October 8, 2023
                        </p>
                        <h3>
                          <a href="blog-single.html">
                            Retaining Good Employees &amp; Motivated
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widgets_grid_box">
                  <h2 class="widget-title">Tag Clouds</h2>
                  <div class="wp-block-tag-cloud">
                    <a href="/">Appraisal</a>
                    <a href="/">Business</a>
                    <a href="/">Contract</a>
                    <a href="/">Data</a>
                    <a href="/">Efficiency</a>
                    <a href="/">Employment</a>
                    <a href="/">HR Procedures</a>
                    <a href="/">Legal</a>
                    <a href="/">Management</a>
                    <a href="/">Obligations</a>
                  </div>
                </div>
                {/* <!--===============spacing==============--> */}
                <div class="pd_bottom_70"></div>
                {/* <!--===============spacing==============--> */}
              </div>
            </aside>
            <div
              id="primary"
              class="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12"
            >
              <main id="main" class="site-main" role="main">
                {/* <!--===============spacing==============--> */}
                <div class="pd_top_90"></div>
                {/* <!--===============spacing==============--> */}
                <section class="blog_single_details_outer">
                  <div class="single_content_upper">
                    <div class="blog_feature_image">
                      <img
                        src="assets/images/blog-image-9.jpg"
                        class="wp-post-image"
                        alt="img"
                      />
                    </div>
                    {/* <!--===============spacing==============--> */}
                    <div class="pd_bottom_20"></div>
                    {/* <!--===============spacing==============--> */}
                    <div class="post_single_content">
                      <h5>
                        In a free hour, when our power choice is untrammelled
                        and when nothing�&nbsp;prevents our being able to do
                        what we like best.
                      </h5>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="description_box">
                        <p>
                          On the other hand, we denounce with righteous
                          indignation dislike men who are so beguiled
                          demoralized by the charms of pleasure of the moment,
                          so blinded by desire, that they cannot foresee the
                          pain and trouble that are bound to ensue; and equal
                          blame belongs to those who fail in their duty through
                          weakness of will, which is the same as saying through
                          shrinking from toil and pain. These cases are
                          perfectly simple and easy to distinguish. In a free
                          hour, when our power of choice is untrammelled and
                          when nothing prevents our to do what we like best,
                          every pleasure is to be welcomed and every pain
                          avoided.
                        </p>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <h3>Accounting</h3>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="description_box">
                        <p>
                          Indignation dislike men who are so beguiled
                          demoralized by the charms of pleasure of the moment
                          blinded by desire, that they cannot foresee the pain
                          and trouble that are bound to ensue; and equal blame
                          belongs to those who fail in their duty through
                          weakness of will, which is the same as saying through
                          shrinking from these cases are perfectly simple and
                          easy to distinguish.
                        </p>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_25"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="quotes_box style_one">
                        <div class="icon">
                          <img
                            src="assets/images/quotes.png"
                            class="svg_image"
                            alt="icon png"
                          />
                        </div>
                        <div class="content">
                          <h6>
                            The key for us, number one, has always been hiring
                            very smart people.
                          </h6>
                          <h3>Lamont Shaun</h3>
                        </div>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_25"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="description_box">
                        <p>
                          Foresee the pain and trouble that are bound to ensue;
                          and equal blame belongs to those who fail in their
                          duty through weakness of will, which is the same as
                          saying through shrinking from toil and pain. These
                          cases are perfectly simple and easy to distinguish.
                        </p>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <h3>HR Functions</h3>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="description_box">
                        <p>
                          To take a trivial example, which of us ever undertakes
                          laborious physical exercise, except to obtain some
                          advantage from it? But who has any right to find fault
                          with a man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces.
                        </p>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="description_box">
                        <p>
                          Laborious physical exercise, except to obtain some
                          advantage from it? But who has any right to find fault
                          with a man who chooses to enjoy a pleasure.
                        </p>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="description_box">
                        <p>
                          Man who chooses to enjoy a pleasure that has no
                          annoying consequences:
                        </p>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="content_box_cn style_one">
                        <div class="txt_content">
                          <h3>
                            <a href="/" target="_blank" rel="nofollow">
                              Reducing Redundancy:
                            </a>
                          </h3>
                          <p>
                            Equal blame belongs to those who fail in their duty
                            through weakness same duty.
                          </p>
                        </div>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="content_box_cn style_one">
                        <div class="txt_content">
                          <h3>
                            <a href="/" target="_blank" rel="nofollow">
                              Greater Retension Rates:
                            </a>
                          </h3>
                          <p>
                            Business it will frequently occur that pleasures
                            have to be repudiated annoyances accepted.
                          </p>
                        </div>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="content_box_cn style_one">
                        <div class="txt_content">
                          <h3>
                            <a href="/" target="_blank" rel="nofollow">
                              Handling Employement:
                            </a>
                          </h3>
                          <p>
                            Holds in these matters to this principle of
                            selection: he rejects pleasures to secure.
                          </p>
                        </div>
                      </div>
                      {/* <!--===============spacing==============--> */}
                      <div class="pd_bottom_15"></div>
                      {/* <!--===============spacing==============--> */}
                      <div class="row gutter_30px">
                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0">
                          <div class="simple_image_boxes">
                            <img
                              src="assets/images/single-post-gal-1.jpg"
                              class="simp_img img-fluid height_540px"
                              alt=""
                            />
                          </div>
                          {/* <!--===============spacing==============--> */}
                          <div class="pd_bottom_30"></div>
                          {/* <!--===============spacing==============--> */}
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="simple_image_boxes">
                            <img
                              src="assets/images/blog-image-9.jpg"
                              class="simp_img img-fluid height_260"
                              alt=""
                            />
                          </div>
                          {/* <!--===============spacing==============--> */}
                          <div class="pd_bottom_30"></div>
                          {/* <!--===============spacing==============--> */}
                          <div class="simple_image_boxes ">
                            <img
                              src="assets/images/single-post-gal-2.jpg"
                              class="simp_img img-fluid height_250px"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="invisible_normal_spacing"></div>
                      <div class="description_box">
                        <p>
                          Duty through weakness of will, which is the same as
                          saying through shrinking from toil and pain. These
                          cases are perfectly simple and easy to distinguish. In
                          a free hour, when our power of choice is untrammelled
                          and when nothing prevents our to do what we like best.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="single_content_lower">
                    <div class="tags_and_share">
                      <div class="d-flex">
                        <div class="tags_content left_one">
                          <div class="box_tags_psot">
                            <div class="title">Tags</div>
                            <a class="btn" href="/">
                              #Appraisal
                            </a>
                            <a class="btn" href="/">
                              #Contract
                            </a>
                          </div>
                        </div>
                        <div class="share_content right_one">
                          <div class="share_socail">
                            <div class="title">Share</div>
                            <button
                              class="m_icon"
                              title="facebook"
                              data-sharer="facebook"
                              data-title="blog single"
                              data-url="blog-single.html"
                            >
                              <i class="fa fa-facebook"></i>
                            </button>
                            <button
                              class="m_icon"
                              title="twitter"
                              data-sharer="twitter"
                              data-title="blog single"
                              data-url="blog-single.html"
                            >
                              <i class="fa fa-twitter"></i>
                            </button>
                            <button
                              class="m_icon"
                              title="whatsapp"
                              data-sharer="whatsapp"
                              data-title="blog single"
                              data-url="blog-single.html"
                            >
                              <i class="fa fa-whatsapp"></i>
                            </button>
                            <button
                              class="m_icon"
                              title="telegram"
                              data-sharer="telegram"
                              data-title="blog single"
                              data-url="blog-single.html"
                              data-to="+44555-03564"
                            >
                              <i class="fa fa-telegram"></i>
                            </button>
                            <button
                              class="m_icon"
                              title="skype"
                              data-sharer="skype"
                              data-url="blog-single.html"
                              data-title="blog single"
                            >
                              <i class="fa fa-skype"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="sec_comments padding-t-8 padding-b-3"
                      id="comment"
                    >
                      <div class="container_no">
                        <div class="row justify-content-center">
                          <div class="col-lg-12">
                            <div id="respond" class="comment-respond">
                              <h3 id="reply-title" class="comment-reply-title">
                                Post a comment
                              </h3>
                              <form
                                action="#"
                                method="post"
                                id="commentform"
                                class="comment-form"
                              >
                                <p class="title_para">
                                  Your email address will not be published.
                                </p>
                                <p class="comment-form-comment">
                                  <label for="comment">Leave a Reply</label>
                                  <textarea
                                    placeholder="Write your comment here..."
                                    id="comment"
                                    name="comment"
                                    rows="12"
                                    aria-required="true"
                                  ></textarea>
                                </p>
                                <p class="comment-form-author">
                                  <label for="name">Full Name</label>
                                  <input
                                    id="author"
                                    placeholder="ex. John Doe"
                                    name="author"
                                    type="text"
                                    value=""
                                    size="30"
                                    aria-required="true"
                                  />
                                </p>
                                <p class="comment-form-email">
                                  <label for="comment">Email address</label>
                                  <input
                                    id="email"
                                    placeholder="ex. john@mail.com"
                                    name="email"
                                    type="text"
                                    value=""
                                    size="30"
                                    aria-required="true"
                                  />
                                </p>
                                <p class="comment-form-url">
                                  <label for="name">Website Url</label>
                                  <input
                                    id="url"
                                    name="url"
                                    placeholder="ex. www.example.com"
                                    type="text"
                                    value=""
                                    size="30"
                                  />
                                </p>
                                <p class="custom-control custom-checkbox">
                                  <input
                                    id="wp-comment-cookies-consent"
                                    class="custom-control-input"
                                    name="wp-comment-cookies-consent"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    class="custom-control-label pl-1 c-gray"
                                    for="wp-comment-cookies-consent"
                                  >
                                    Save my name, and email in this browser for
                                    the next time I comment.
                                  </label>
                                </p>
                                <div class="clearfix"></div>
                                <p class="form-submit">
                                  <input
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    class="submit"
                                    value="Post  comment"
                                  />
                                  <input
                                    type="hidden"
                                    name="comment_post_ID"
                                    value="350"
                                    id="comment_post_ID"
                                  />
                                  <input
                                    type="hidden"
                                    name="comment_parent"
                                    id="comment_parent"
                                    value="0"
                                  />
                                </p>
                              </form>
                            </div>
                            {/* <!-- #respond --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="related_post">
                    <div class="title_sections_inner">
                      <h2>Related Posts</h2>
                    </div>
                    {/* <!-- Swiper --> */}

                    <div
                      class="swiper-container"
                      data-swiper='{
                                   "loop": true,
                                    "autoplay" : { "delay":"" },
                                    "speed":1000,
                                    "centeredslides": false,
                                    "slidesperview": 2,
                                     "spacebetween": 30,
                                      "pagination": {"el": ".swiper-pagination","clickable": true},
                                       "navigation": {"nextEl": ".related-button-next", "prevel": ".related-button-prev"},
                                       "breakpoints":{
                                                 "1200": {},
                                                  "1024": {},
                                                   "768": {},
                                                    "576":{} 
                                                } 
                                            }'
                    >
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="news_box default_style list_view normal_view clearfix has_images">
                            <div class="image img_hover-1">
                              <img
                                src="assets/images/blog-image-7.jpg"
                                class="img-fluid"
                                alt="img"
                              />
                              <a href="/" class="categories">
                                <i class="icon-folder"></i>Compliance Audits
                              </a>
                            </div>
                            <div class="content_box">
                              <div class="date">
                                <span class="date_in_number">
                                  October 8, 2023
                                </span>
                              </div>
                              <div class="source">
                                <h2 class="title">
                                  <a href="blog-single.html" rel="bookmark">
                                    How to Handle Employee
                                  </a>
                                </h2>
                                <p class="short_desc">
                                  How well this mistaken ideas off denouncing
                                  pleasure &amp; praisings will give you
                                  complete.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="news_box default_style list_view normal_view clearfix has_images">
                            <div class="image img_hover-1">
                              <img
                                width="750"
                                height="420"
                                src="assets/images/blog-image-6.jpg"
                                class="img-fluid"
                                alt="img"
                              />
                              <a href="/" class="categories">
                                <i class="icon-folder"></i>Coaching
                              </a>
                            </div>
                            <div class="content_box">
                              <div class="date">
                                <span class="date_in_number">
                                  October 8, 2023
                                </span>
                              </div>
                              <div class="source">
                                <h2 class="title">
                                  <a href="blog-single.html" rel="bookmark">
                                    Retaining Good Employees &amp; Motivated
                                  </a>
                                </h2>
                                <p class="short_desc">
                                  How well this mistaken ideas off denouncing
                                  pleasure &amp; praisings will give you
                                  complete.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="news_box default_style list_view normal_view clearfix has_images">
                            <div class="image img_hover-1">
                              <img
                                width="750"
                                height="420"
                                src="assets/images/blog-image-9.jpg"
                                class="img-fluid"
                                alt="img"
                              />
                              <a href="/" class="categories">
                                <i class="icon-folder"></i>Coaching
                              </a>
                            </div>
                            <div class="content_box">
                              <div class="date">
                                <span class="date_in_number">
                                  October 8, 2023
                                </span>
                              </div>
                              <div class="source">
                                <h2 class="title">
                                  <a href="blog-single.html" rel="bookmark">
                                    Why Should Business Payroll Outsourcing?
                                  </a>
                                </h2>
                                <p class="short_desc">
                                  How well this mistaken ideas off denouncing
                                  pleasure &amp; praisings will give you
                                  complete.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="arrow_related">
                      <div class="related-button-prev">
                        <i class="fa fa-angle-left"></i>
                      </div>
                      <div class="related-button-next">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!--===============spacing==============--> */}
                <div class="pd_bottom_70"></div>
                {/* <!--===============spacing==============--> */}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSinglePost;
