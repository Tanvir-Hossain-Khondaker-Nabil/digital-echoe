import React, { useState, useEffect } from 'react';

export default function Awards() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/award');
        if (!response.ok) {
          throw new Error('Failed to fetch awards data');
        }
        const data = await response.json();
        setAwards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return (
      <div className="main-root">
        <div className="container text-center py-5">
          <p>Loading awards...</p>
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

  if (!awards.length) {
    return (
      <div className="main-root">
        <div className="container text-center py-5">
          <p>No awards available</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="dsn-award section-padding section-margin background-section">
        <div className="container">
          <div className="box-text d-flex flex-column justify-content-center">
            <div
              className="section-title d-flex flex-column mb-70 dsn-fill dsn-fill-animation words splitting"
              style={{
                "--word-total": "4",
              }}>
              <h2 className="title about_title text-white">
                <span className="about_title">
                  10&nbsp;
                </span>
                <span className="about_title">
                  years&nbsp;
                </span>
                <br />
                <span className="about_title">
                  of&nbsp;
                </span>
                <span className="about_title">
                  experience&nbsp;
                </span>
              </h2>
            </div>
            
            {awards.map((award, index) => (
              <div
                key={award.id}
                className="award-item p-relative"
                style={{
                  willChange: "auto",
                }}>
                <div className="d-grid grid-half-1">
                  <div className="date">{award.year}</div>
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <h4 className="title-block mb-5">AWARDS</h4>
                      <p>{award.award_name}</p>
                    </div>
                    <img 
                      alt="" 
                      src={`https://dev.digital-echoes.binary-group.com/admin/${award.photo}`} 
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "./img/awwards/trophy.png"
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}