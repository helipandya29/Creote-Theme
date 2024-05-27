// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SecondHeader from "../components/SecondHeader";

// const BlogMetro = () => {
//   const [blog, setBlog] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/user/blog")
//       .then((response) => {
//         setBlog(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.log(error));
//   });
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const options = { month: "short", day: "numeric" };
//     const formattedDate = date.toLocaleDateString(undefined, options);

//     // Extract the month and day
//     const [month, day] = formattedDate.split(" ");
//     const formattedMonth = month.slice(0, 3); // Ensure it's only 3 letters

//     return { month: formattedMonth, day };
//   };

//   return (
//     <div id="content" className="site-content " style={{ marginTop: "100px" }}>
//       <SecondHeader page="Metro Fullwidth" />
//       <section className="blog_post_section four_column pd_left_100 pd_right_100 style_four masonary_enable">
//         {/* <!--===============spacing==============--> */}
//         <div className="pd_top_90"></div>
//         {/* <!--===============spacing==============--> */}
//         <div className="container-fluid">
//           <div className="grid_show_case grid_layout clearfix">
//             {blog.map((data) => {
//               const { month, day } = formatDate(data.date);
//               return (
//                 <div key={data._id} className="grid_box _card style_man">
//                   <div
//                     className="news_box style_four has_images"
//                     style={{ backgroundImage: `url(${data.imageSrc})` }}
//                   >
//                     <div className="overlay"> </div>
//                     <div className="date">
//                       <span className="date_in_month">{month}</span>
//                       <span className="date_in_number">{day}</span>
//                     </div>
//                     <div className="content_box">
//                       <div className="category">
//                         <a href="/" className="categories">
//                           <i className="icon-folder"></i>
//                           {data.imageTitle}
//                         </a>
//                       </div>
//                       <h2 className="title">
//                         <a href="blog-single.html" rel="bookmark">
//                           {data.heading}
//                         </a>
//                       </h2>
//                     </div>
//                     <div className="auhtour_box">
//                       <img
//                         alt="img"
//                         src={data.profilePic}
//                         height="60"
//                         width="60"
//                         className="img-fluid"
//                       />
//                       <div className="contnet_a">
//                         <p>POSTED BY</p>
//                         <h4> {data.name} </h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         {/* <!--===============spacing==============--> */}
//         <div className="pd_bottom_70"></div>
//         {/* <!--===============spacing==============--> */}
//       </section>
//     </div>
//   );
// };

// export default BlogMetro;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondHeader from "../components/SecondHeader";

const BlogMetro = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/blog")
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []); // Fixed missing dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);

    // Extract the month and day
    const [month, day] = formattedDate.split(" ");
    const formattedMonth = month.slice(0, 3); // Ensure it's only 3 letters

    return { month: formattedMonth, day };
  };

  return (
    <div id="content" className="site-content" style={{ marginTop: "100px" }}>
      <SecondHeader page="Metro Fullwidth" />
      <section className="blog_post_section four_column pd_left_100 pd_right_100 style_four masonary_enable">
        {/* <!--===============spacing==============--> */}
        <div className="pd_top_90"></div>
        {/* <!--===============spacing==============--> */}
        <div className="container-fluid">
          <div className="grid_show_case grid_layout clearfix">
            {blog.map((data) => {
              const { month, day } = formatDate(data.date);
              return (
                <div key={data._id} className="grid_box _card style_man">
                  <div
                    className="news_box style_four has_images"
                    style={{
                      backgroundImage: `url(${data.imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px", // Adjust height as needed
                    }}
                  >
                    <div className="overlay"></div>
                    <div className="date">
                      <span className="date_in_month">{month}</span>
                      <span className="date_in_number">{day}</span>
                    </div>
                    <div className="content_box">
                      <div className="category">
                        <a href="/" className="categories">
                          <i className="icon-folder"></i>
                          {data.imageTitle}
                        </a>
                      </div>
                      <h2 className="title">
                        <a href="blog-single.html" rel="bookmark">
                          {data.heading}
                        </a>
                      </h2>
                    </div>
                    <div className="author_box">
                      <img
                        alt="img"
                        src={data.profilePic}
                        height="60"
                        width="60"
                        className="img-fluid"
                        style={{ borderRadius: "50%" }} // Make profile picture circular
                      />
                      <div className="content_a">
                        <p>POSTED BY</p>
                        <h4>{data.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <!--===============spacing==============--> */}
        <div className="pd_bottom_70"></div>
        {/* <!--===============spacing==============--> */}
      </section>
    </div>
  );
};

export default BlogMetro;
