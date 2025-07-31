import React, { useState, useEffect, useRef } from "react";
import AnimatedText from './AnimatedTextTo';
import { useAnimation } from './useAnimation';

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://dev.digital-echoes.binary-group.com/admin/api/teams");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        setTeamData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;
  if (!teamData.length) return <div>No team members available</div>;

  return (
    <>
      <section className="dsn-team section-padding bg-color" id="team-section">
        <div className="container">
          <div className="section-title dsn-fill mb-70 d-flex flex-column">
            <AnimatedText className="sub-heading title-orange">
              Team
            </AnimatedText>
            <AnimatedText className="title mb-30 dsn-fill title-orange">
              meet our creatives
              <br/>
              behind the scene
            </AnimatedText>
          </div>
        </div>

        <div className="container">
          <div className="d-grid grid-lg-3 grid-md-2">
            {teamData.map((member) => (
              <div key={member.id} className="team-item d-flex align-items-end">
                <div className="box-img">
                  <img
                    className="cover-bg-img has-border-radius"
                    src={`https://dev.digital-echoes.binary-group.com/admin/${member.photo}`}
                    alt={member.name}
                  />
                </div>
                <div className="content d-flex justify-content-between w-100">
                  <div className="text">
                    <h4 className="title-block text-upper mb-5">
                      {member.name.split(" ").map((namePart, i) => (
                        <React.Fragment key={i}>
                          {namePart}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                    <span className="title-orange">{member.position}</span>
                  </div>
                  <div className="social-inner d-flex">
                    <h6 className="theme-color">SOCIAL MEDIA</h6>
                    <div className="social d-flex flex-column background-section">
                      {member.facebook && (
                        <a href={member.facebook} className="social-item">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} className="social-item">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} className="social-item">
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;