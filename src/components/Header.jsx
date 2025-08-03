import React, { useState, useEffect } from "react";

const Header = () => {
  const [sliderData, setSliderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch("https://dev.digital-echoes.binary-group.com/admin/api/sliders");
        if (!response.ok) {
          throw new Error("Failed to fetch slider data");
        }
        const data = await response.json();
        setSliderData(data[0]); // Assuming we want the first slider
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;
  if (!sliderData) return <div>No slider data available</div>;

  return (
    <>
      <header style={{ height: "700px" }} className="header-normal h-100-v v-dark-head header-corporate section-padding dsn-header-animation d-flex flex-column align-items-center justify-content-center"
      style={{opacity:"1"}}>
        <div
          className="box-img  w-100  p-absolute top-0 right-0 before-z-index dsn-hero-parallax-img"
          data-overlay="7"
          style={{ height: "auto" }}
        >
          <img className="cover-bg-img" src={`https://dev.digital-echoes.binary-group.com/admin/${sliderData.photo}`} alt="" />
        </div>
        
        <div className="container pr-5 bg-danger">
          <div
            className="content p-relative z-index-1 d-flex align-items-center justify-center justify-content-between margin-top-content"
          >
            <h1 className="title-lg text-upper artes">
              {sliderData.title.split(" ").map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <h1 className="title-xl text-upper four-one">{sliderData.number}</h1>
          </div>

          <div className="additional-content">
            <p className="description">
              Welcome to our gallery of graphic arts.
            </p>
          </div>
        </div>

        <div className="footer-head w-100 left-0 p-absolute bottom-0" >
          <div className="container d-flex justify-content-between">
            <div className="d-flex gap-5 justify-content-between align-items-center">
              <div className="dsn-btn dsn-btn-shape">
                <a className="title-btn  background-section">
                  <span className="text-upper">{sliderData.first_button_title}</span>
                </a>
              </div>

              <div className="dsn-btn dsn-btn-shape">
                <a className="title-btn  background-section">
                  <span className="text-upper">{sliderData.second_button_title}</span>
                </a>
              </div>
            </div>

            <div className="dsn-btn dsn-btn-shape d-flex">
              <a className="button effect-ajax"
                href={sliderData.third_button_link}
                data-dsn-text={sliderData.third_button_title}>
                <span
                  className="title-btn text-upper p-relative z-index-1 heading-color"
                  data-animate-text={sliderData.third_button_title}
                >
                  <span>{sliderData.third_button_title}</span>
                </span>
              </a>

              <span className="icon background-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="h-100" style={{ borderTop: "2px solid #ddd", marginTop: "40px" }}>
            <div className="d-flex">
              <div className="w-40 d-flex flex-column align-items-center justify-content-center">
                <p>{sliderData.money_mouth_title.split("  ")[0]}</p>
                <p>{sliderData.money_mouth_title.split("  ")[1]}</p>
              </div>
              <div className="w-60">
                <img src={`https://dev.digital-echoes.binary-group.com/admin/${sliderData.money_mouth_photo}`} alt="" className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <style>{`
        @media (max-width: 767px) {
            .header-corporate .content .title-lg {
                line-height: 70px !important;
                text-align: center !important;
                font-size: 60px !important;
            }
            .dsn-hero-parallax-img {
                height: 500px !important;
            }
            .header-normal{
                height: 543px !important;
                background-position: top top !important;
            }
            .four-one{
                display: none !important;
            }
            .artes {
                margin-top: 285px !important;
            }
            .additional-content,footer-head{
                display:none
            }
            .justify-center{
                justify-content: center !important;
            }
            .site-header ul.primary-nav {
                flex-direction: column !important;
            }
            .nav-item .overflow {
                font-size: 19px !important;
                font-weight: 300 !important;
            }
            .site-header {
                flex-wrap: wrap;
                align-items: start;
                flex-direction: column;
            }
            .margin-top-content{
                margin-top:-110px !important;
            }
            .main-navigation {
                margin-top: 30px;
            }
        }
        .margin-top-content{
            margin-top:-101px;
        }
      `}</style>
    </>
  );
};

export default Header;