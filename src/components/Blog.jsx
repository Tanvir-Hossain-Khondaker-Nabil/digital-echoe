import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnimatedText from './AnimatedTextTo';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://dev.digital-echoes.binary-group.com/admin/api/blogs")
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch blogs", err);
      });
  }, []);

  return (
    <>
      <section className="dsn-cards-post section-padding" id="blog-section">
        <div className="container">
          <div className="section-title dsn-fill mb-70 d-flex flex-column">
             <AnimatedText className="sub-heading title-orange">
              Blog
            </AnimatedText>
            <AnimatedText className="title  title-orange">
              get some insights
              <br />
              into the digital world
            </AnimatedText>
          </div>
        </div>

        <div className="container">
          <div className="dsn-posts">
            <div className="d-grid grid-lg-3 grid-md-2">
              {blogs.map((blog) => (
                <Link to={`/blog/${blog.id}`} key={blog.id} className="post-item p-relative bg-color d-flex flex-column justify-content-end over-hidden">
                  <div className="cat d-flex p-absolute top-0 right-0 z-index-1"
                    style={{ background: "#2b2c2c", color: "white" }}>
                    <svg className="top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                      <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                    </svg>
                    <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                      <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                    </svg>
                    <span className="bg-color">Branding</span>
                  </div>

                  <div className="box-img w-100 h-500">
                    <img
                      className="cover-bg-img has-border-radius"
                      src={`https://dev.digital-echoes.binary-group.com/admin/${blog.photo}`}
                      alt={blog.title}
                    />
                  </div>

                  <div className="content p-relative z-index-1 mt-20">
                    <span className="date mb-10 bg-color p-5">
                      {new Date(blog.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                      })}
                    </span>
                    <h4 className="title-color text-upper fw-bold">
                      {blog.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
