import React, { useState, useEffect } from 'react';

export default function AboutUs() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/about_us');
        if (!response.ok) {
          throw new Error('Failed to fetch about us data');
        }
        const data = await response.json();
        setAboutData(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="main-root">
        <div className="container text-center py-5">
          <p></p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-root">
        <div className="container text-center py-5">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="main-root">
        <div className="container text-center py-5">
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="p-relative header-normal section-padding dsn-header-animation" id="dsn_header">
        <div className="bg-pattarn p-absolute left-0 bottom-0 opacity-5 ">
          <div
            className="p-relative"
            style={{
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 20%) rotate(10deg)",
              translate: "none",
            }}>
            <img alt="" src="./img/bg-pattern-02.svg" />
          </div>
        </div>
        <div
          className="p-relative container dsn-hero-parallax-title"
          style={{
            rotate: "none",
            scale: "none",
            transform: "translate(0px, -10%)",
          }}>
          <div className="p-relative mexdot-box d-flex flex-column justify-content-center background-inner">
            <div className="box-content d-grid grid-1-half z-index-1">
              <h2 className="title text-upper text-right">
                {aboutData.info_title}
              </h2>
              <div className="">
                <h5 className="sub-heading sub-heading-about">{aboutData.title}</h5>
                <div 
                  className="description-box description-box-about max-w350 mt-15"
                  dangerouslySetInnerHTML={{ __html: aboutData.description }} 
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}