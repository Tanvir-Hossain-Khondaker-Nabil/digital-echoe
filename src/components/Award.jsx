import React, { useState, useEffect } from "react";

const Award = () => {
  const [awardData, setAwardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAwardData = async () => {
      try {
        const response = await fetch("https://dev.digital-echoes.binary-group.com/admin/api/helps");
        if (!response.ok) {
          throw new Error("Failed to fetch award data");
        }
        const data = await response.json();
        setAwardData(data[0]); // Assuming we want the first item
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAwardData();
  }, []);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;
  if (!awardData) return <div>No award data available</div>;

  return (
    <>
      <div className="section-seat section-padding background-section p-relative ">
        <div className="p-absolute top-0 left-0 bottom-0 w-100">
          <div
            className="img-box-parallax before-z-index h-100"
            data-overlay="4"
            data-dsn-grid="move-up"
          >
            <img
              src="/image/blog/Container.png"
              className="has-bigger-scale cover-bg-img has-direction"
              alt=""
            />
          </div>
        </div>
        <div className="bg-line"></div>

        <div className="container z-index-1 p-relative">
          <div className="p-relative d-grid grid-lg-2 align-items-center justify-content-center text-center ml-auto mr-auto ">
            <div className="ex content-blure has-border-radius v-dark-head">
              <h2 className="big-text">{awardData.first_container_number}</h2>
              <h5 className="text-upper fw-bold mt-15">{awardData.first_container_title}</h5>
              <p className="mt-30 ml-auto mr-auto text-upper">
                {awardData.first_container_description}
              </p>
            </div>

            <div className="ex content-blure has-border-radius v-dark-head">
              <h2 className="big-text">{awardData.second_container_number}</h2>
              <h5 className="text-upper fw-bold mt-15">{awardData.second_container_title}</h5>
              <p className="mt-30 ml-auto mr-auto text-upper">
                {awardData.second_container_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;