import React, { useState, useEffect } from "react";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await fetch("https://dev.digital-echoes.binary-group.com/admin/api/footers");
        if (!response.ok) {
          throw new Error("Failed to fetch footer data");
        }
        const data = await response.json();
        setFooterData(data[0]); // Assuming we want the first footer
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;
  if (!footerData) return <div>No footer data available</div>;

  return (
    <>
      <footer className="footer bg-secondary v-dark pt-60" id="footer-section">
        <div className="container p-relative b">
          <div className="d-grid grid-lg-4 grid-md-3">
            <div className="logo-wrap bg-color">
              <div className="logo d-flex ">
                <img 
                  src={`https://dev.digital-echoes.binary-group.com/admin/${footerData.logo}`} 
                  alt="Company Logo" 
                  className="logo" 
                />
              </div>
              <svg
                className="shape-one"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_104)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30 0H0C16.5684 0 30 13.4314 30 30V0Z"
                    fill="#0E0E0E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_104">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="shape-two"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H30C13.4316 0 0 13.4314 0 30V0Z"
                  fill="#0E0E0E"
                />
              </svg>
            </div>

            <div className="footer-links">
              <h4 className="sm-title-block p-relative circle-before circle-after circle-both-before mb-10 text-upper">
                Navigation Links
              </h4>
              <ul style={{listStyle:"none"}}>
                <li className="text-upper">
                  <a>home</a>
                </li>
                <li className="text-upper">
                  <a>Creative</a>
                </li>
                <li className="text-upper">
                  <a>About us</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="sm-title-block p-relative circle-before circle-after circle-both-before mb-10 text-upper">
                CONTACT Info
              </h4>

              <div className="col-contact">
                <p>
                  <strong>T</strong> : {footerData.phone_one}
                </p>
                <p className="mt-10">
                  <strong>F</strong> : {footerData.phone_two}
                </p>
                <p className="over-hidden mt-10">
                  <strong>E</strong> :
                  <a
                    href={`mailto:${footerData.email}`}
                    className="link-hover"
                    data-hover-text={footerData.email}
                  >
                    {footerData.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="footer-socials">
              <h4 className="sm-title-block p-relative circle-before circle-after circle-both-before mb-10 text-upper">
                socials Links
              </h4>
              <ul className="dsn-socials box-social">
                {footerData.facebook && (
                  <li>
                    <a 
                      href={footerData.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="background-main"
                    >
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      <span>FB</span>
                    </a>
                  </li>
                )}
                {footerData.instagram && (
                  <li>
                    <a 
                      href={footerData.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="background-main"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                      <span>IN</span>
                    </a>
                  </li>
                )}
                {footerData.twitter && (
                  <li>
                    <a 
                      href={footerData.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="background-main"
                    >
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                      <span>TW</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright background-main">
          <div className="container d-flex align-items-center justify-content-center">
            <p className="text-center">
              Copyright © {new Date().getFullYear()} <a href="#">Echoes</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;