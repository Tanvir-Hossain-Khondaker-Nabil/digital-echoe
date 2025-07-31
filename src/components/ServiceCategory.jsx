import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function ServiceCategory() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/services_category');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <section className="services-section">
        <header className="section-header">
          <h2 className="main-heading">OUR CATEGORY OF SERVICES</h2>
        </header>
        <div className="services-container">
          {services.map((service) => (
            <Link to={`/service_category/${service.id}`} key={service.id} className="service-item">
              <div className="service-content">
                <h3 className="service-title">{service.string}</h3>
                
              </div>
              <div className="service-icon">
                <svg
                  className="arrow-icon"
                  fill="none"
                  height="41"
                  viewBox="0 0 40 41"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 21.1665H30M30 21.1665L21 12.1665M30 21.1665L21 30.1665"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <style>{`
        .services-section {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 70px;
          padding: 70px 20px;
          box-sizing: border-box;
          background: #171717;
        }

        @media (max-width: 991px) {
          .services-section {
            gap: 50px;
            padding: 50px 20px;
          }
        }

        @media (max-width: 640px) {
          .services-section {
            gap: 40px;
            padding: 40px 16px;
          }
        }

        .section-header {
          display: flex;
          width: 100%;
          max-width: 1250px;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 640px) {
          .section-header {
            width: 100%;
          }
        }

        .main-heading {
          align-self: stretch;
          color: #ee7123;
          text-transform: uppercase;
          font: 700 65px/68px Gabarito, sans-serif;
          margin: 0;
        }

        @media (max-width: 991px) {
          .main-heading {
            font-size: 50px;
            line-height: 52px;
          }
        }

        @media (max-width: 640px) {
          .main-heading {
            font-size: 36px;
            line-height: 40px;
            text-align: center;
          }
        }

        .services-container {
          display: flex;
          width: 100%;
          max-width: 1152px;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
        }

        @media (max-width: 640px) {
          .services-container {
            width: 100%;
          }
        }

        .service-item {
          display: flex;
          width: 100%;
          padding: 0px 30px;
          justify-content: space-between;
          align-items: center;
          border-radius: 7px;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: #2b2c2c;
        }

        @media (max-width: 640px) {
          .service-item {
            padding: 0px 20px;
          }
        }

        .service-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .service-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 20px 0;
        }

        .service-title {
          color: #fff;
          text-transform: uppercase;
          font: 300 40px/1 Gabarito, sans-serif;
          margin: 0 0 10px 0;
        }

        .service-description {
          color: #ccc;
          font: 16px/1.5 Gabarito, sans-serif;
        }

        .service-description strong {
          color: #fff;
        }

        @media (max-width: 991px) {
          .service-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .service-title {
            font-size: 24px;
          }
          .service-description {
            font-size: 14px;
          }
        }

        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .service-item:hover .arrow-icon {
          transform: translateX(5px);
        }

        .loading, .error {
          color: white;
          text-align: center;
          padding: 50px;
          font-size: 18px;
        }

        .error {
          color: #ff6b6b;
        }
      `}</style>
    </div>
  );
}