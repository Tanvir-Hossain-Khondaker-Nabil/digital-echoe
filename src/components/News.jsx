import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [echoData, setEchoData] = useState(null);

  useEffect(() => {
    axios.get("https://dev.digital-echoes.binary-group.com/admin/api/echoes")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setEchoData(res.data[0]); // assuming there's only one entry
        }
      })
      .catch((err) => {
        console.error("Failed to fetch echoes", err);
      });
  }, []);

  if (!echoData) return null; // or loading indicator

  return (
    <section className="next-page v-dark bg-color section-padding">
      <div className="container">
        <div className="tob-box d-flex justify-content-between align-items-end border-bottom pb-50 mb-50"
        style={{gap:"25px"}}>
          <h2 className="title text-upper">
            {echoData.title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word}{i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>

          <div className="text">
            <h4 className="title-block mb-15">{echoData.info_title}</h4>
            <p>{echoData.description}</p>
          </div>

          <div className="dsn-btn dsn-btn-shape d-flex">
            <a className="effect-ajax" href={echoData.button_link}>
              <span className="title-white-btn p-relative z-index-1 heading-color" data-animate-text={echoData.button_text}>
                <span>{echoData.button_text}</span>
              </span>
            </a>

            <span className="icon background-icon v-light">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
