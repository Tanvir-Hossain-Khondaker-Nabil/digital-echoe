import React, { useState, useEffect, useRef } from "react";
import AnimatedText from './AnimatedTextTo';
const ServiceOne = () => {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch("http://digitalechos.test/api/service_process");
        if (!response.ok) {
          throw new Error("Failed to fetch service data");
        }
        const data = await response.json();
        setServiceData(data[0]); // Assuming the API returns an array with one item
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, []);

  if (loading) {
    return <div className="text-center py-5"></div>;
  }

  if (error) {
    return <div className="text-center py-5">Error: {error}</div>;
  }

  if (!serviceData) {
    return <div className="text-center py-5">No service data available</div>;
  }

  return (
    <>
      <section
        className="dsn-service padding-service section-padding  hover-box-item dsn-layout-fade-up"
        id="service-section"
      >
        <div className="container">
          <div className="section-title dsn-fill mb-70 d-flex flex-column gap-5">
            <AnimatedText className="sub-heading title-orange">
                SERVICES
            </AnimatedText>
            <AnimatedText className="title mb-30 dsn-fill title-orange">
              {serviceData.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < serviceData.title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </AnimatedText>
          </div>
        </div>

        <div className="container">
          <div className="d-grid grid-lg-3 grid-md-2 dsn-icon-theme-color">
            {/* First Service Item */}
            <div className="service-item grid-item background-main has-border-radius p-relative">
              <div className="service-item-inner dsn-up">
                <h4 className="title-orange pb-2">{serviceData.first_container_title}</h4>
                <h4 className="title-color">{serviceData.first_container_sub_title}</h4>
                <ul className="service_lists">
                  <li>{serviceData.third_container_list_one}</li>
                  <li>{serviceData.third_container_list_two}</li>
                  <li>{serviceData.third_container_list_three}</li>
                  <li>{serviceData.third_container_list_four}</li>
                </ul>
                {/* <p className="mt-30">{serviceData.first_container_description}</p> */}

                <div className="number mt-50">
                  <div className="big-text">01</div>
                </div>

                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 62 61"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27 8.5V26.5C27 30.0898 24.0899 33 20.5 33C16.9102 33 14 30.0899 14 26.5V8.5C14 4.91015 16.9102 2 20.5 2C24.0899 2 27 4.91015 27 8.5ZM12 8.5C12 3.80558 15.8056 0 20.5 0C25.1944 0 29 3.80558 29 8.5V26.5C29 31.1944 25.1944 35 20.5 35C15.8056 35 12 31.1944 12 26.5V8.5ZM41.5 22C44.5376 22 47 19.5376 47 16.5C47 13.4624 44.5376 11 41.5 11C38.4624 11 36 13.4624 36 16.5C36 19.5376 38.4624 22 41.5 22ZM41.5 24C45.6421 24 49 20.6421 49 16.5C49 12.3579 45.6421 9 41.5 9C37.3579 9 34 12.3579 34 16.5C34 20.6421 37.3579 24 41.5 24ZM42.8632 58.6403C39.1021 60.1982 35.071 61 31 61C26.929 61 22.8979 60.1982 19.1368 58.6403C15.3757 57.0824 11.9583 54.7989 9.07968 51.9203C6.20107 49.0417 3.91763 45.6243 2.35973 41.8632C0.801836 38.1021 0 34.071 0 30V29H0.999999L7.5 29L7.5 31L2.01725 31C2.13687 34.4672 2.87779 37.8876 4.20749 41.0978C5.66487 44.6163 7.801 47.8132 10.4939 50.5061C13.1868 53.199 16.3837 55.3351 19.9022 56.7925C23.4206 58.2499 27.1917 59 31 59C34.8083 59 38.5794 58.2499 42.0978 56.7925C45.6163 55.3351 48.8132 53.199 51.5061 50.5061C54.199 47.8132 56.3351 44.6163 57.7925 41.0978C59.1222 37.8877 59.8631 34.4672 59.9828 31L33.5 31V29L61 29H62V30C62 34.071 61.1982 38.1021 59.6403 41.8632C58.0824 45.6243 55.7989 49.0417 52.9203 51.9203C50.0417 54.7989 46.6243 57.0824 42.8632 58.6403Z"
                      fill="#121212"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Second Service Item */}
            <div className="service-item grid-item background-main has-border-radius p-relative">
              <div className="service-item-inner dsn-up">
                <h4 className="title-orange pb-2">{serviceData.second_container_title}</h4>
                <h4 className="title-color">{serviceData.second_container_sub_title}</h4>
                <ul className="service_lists">
                  <li>{serviceData.third_container_list_one}</li>
                  <li>{serviceData.third_container_list_two}</li>
                  <li>{serviceData.third_container_list_three}</li>
                  <li>{serviceData.third_container_list_four}</li>
                </ul>

                <div className="number mt-50">
                  <div className="big-text">02</div>
                </div>

                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path d="M30.0115 7.23803e-06C24.723 -0.00367286 19.5281 1.39604 14.9573 4.05635C14.2603 4.47264 13.573 4.90839 12.9147 5.3634C7.44186 9.15007 3.38539 14.6509 1.38526 20.9984C-0.614867 27.3458 -0.444969 34.1786 1.86838 40.4188C1.96519 40.7092 2.08145 40.9899 2.19762 41.2706C2.39124 41.7482 2.59467 42.2131 2.80765 42.6649C2.8851 42.8391 2.96255 43.0135 3.04968 43.1877C5.89744 49.0029 10.5494 53.7411 16.3114 56.695C22.0734 59.6489 28.6363 60.6601 35.0202 59.5776C41.4041 58.4951 47.2666 55.377 51.7327 50.6887C56.1988 46.0004 59.0289 39.9934 59.8004 33.5645C59.8876 32.8771 59.9553 32.1802 59.9843 31.4831C59.9843 30.9894 59.9843 30.515 59.9843 30.0116C59.9843 22.0587 56.8278 14.4309 51.208 8.8038C45.5881 3.17665 37.9644 0.010269 30.0115 7.23803e-06ZM1.93621 30.0116C1.93916 25.2663 3.14495 20.5993 5.44066 16.4464C7.73637 12.2934 11.0471 8.7901 15.0639 6.26368C18.2802 7.83988 20.9705 10.315 22.8088 13.3891C22.0143 13.9806 21.4205 14.8014 21.1073 15.7411C20.7941 16.6807 20.7767 17.6939 21.0574 18.6438C21.3382 19.5936 21.9035 20.4345 22.6772 21.053C23.4509 21.6714 24.3955 22.0376 25.3839 22.1021C25.3839 22.3345 25.3839 22.5571 25.3839 22.7895C25.38 24.5233 25.129 26.2478 24.6385 27.9108C16.7655 30.074 9.55333 34.1592 3.64979 39.7993C2.49553 36.6661 1.91506 33.3505 1.93621 30.0116ZM23.8835 30.147C22.4514 33.4234 20.0952 36.2115 17.1034 38.1699C14.1117 40.1283 10.6139 41.1722 7.03819 41.174C6.40763 41.176 5.77747 41.1436 5.15042 41.077C10.4659 36.0325 16.878 32.288 23.8835 30.1373V30.147ZM30.0115 58.0869C24.8848 58.0846 19.8567 56.6786 15.4723 54.0213C11.088 51.3641 7.51493 47.5571 5.14073 43.0133C5.77 43.0714 6.39928 43.1102 7.07696 43.1102C11.2855 43.1049 15.3886 41.7934 18.8203 39.3571C22.252 36.9207 24.8431 33.4795 26.236 29.5081C36.8666 26.8406 48.0935 27.9458 57.9999 32.6351C57.3459 39.6025 54.1135 46.0746 48.9361 50.7828C43.7587 55.491 37.0095 58.0958 30.0115 58.0869ZM58.0869 30.5635C48.3041 26.105 37.327 24.9859 26.8458 27.3783C27.1992 25.8708 27.3811 24.3282 27.388 22.7798C27.388 22.4603 27.388 22.1408 27.388 21.8117C28.4446 21.4145 29.3293 20.6607 29.8889 19.6804C30.4485 18.7001 30.6478 17.5551 30.4526 16.4433C30.2573 15.3315 29.6797 14.3229 28.8196 13.5919C27.9595 12.8609 26.8709 12.4537 25.7422 12.4404C25.3766 12.4407 25.0123 12.4861 24.6578 12.5758C22.8395 9.47138 20.2392 6.89784 17.1162 5.11168C21.3949 2.88658 26.1747 1.80118 30.9948 1.96011C35.8149 2.11904 40.513 3.51693 44.6358 6.01905C48.7587 8.52117 52.1673 12.0431 54.5335 16.2455C56.8997 20.4478 58.1435 25.1889 58.145 30.0116C58.0869 30.1858 58.0772 30.3698 58.0675 30.5538L58.0869 30.5635Z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Third Service Item */}
            <div className="service-item grid-item background-main has-border-radius p-relative">
              <div className="service-item-inner dsn-up">
                <h4 className="title-orange pb-2">{serviceData.third_container_title}</h4>
                <h4 className="title-color">{serviceData.third_container_sub_title}</h4>
                
                <ul className="service_lists">
                  <li>{serviceData.third_container_list_one}</li>
                  <li>{serviceData.third_container_list_two}</li>
                  <li>{serviceData.third_container_list_three}</li>
                  <li>{serviceData.third_container_list_four}</li>
                </ul>

                <div className="number mt-50">
                  <div className="big-text">03</div>
                </div>

                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 62 61"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27 8.5V26.5C27 30.0898 24.0899 33 20.5 33C16.9102 33 14 30.0899 14 26.5V8.5C14 4.91015 16.9102 2 20.5 2C24.0899 2 27 4.91015 27 8.5ZM12 8.5C12 3.80558 15.8056 0 20.5 0C25.1944 0 29 3.80558 29 8.5V26.5C29 31.1944 25.1944 35 20.5 35C15.8056 35 12 31.1944 12 26.5V8.5ZM41.5 22C44.5376 22 47 19.5376 47 16.5C47 13.4624 44.5376 11 41.5 11C38.4624 11 36 13.4624 36 16.5C36 19.5376 38.4624 22 41.5 22ZM41.5 24C45.6421 24 49 20.6421 49 16.5C49 12.3579 45.6421 9 41.5 9C37.3579 9 34 12.3579 34 16.5C34 20.6421 37.3579 24 41.5 24ZM42.8632 58.6403C39.1021 60.1982 35.071 61 31 61C26.929 61 22.8979 60.1982 19.1368 58.6403C15.3757 57.0824 11.9583 54.7989 9.07968 51.9203C6.20107 49.0417 3.91763 45.6243 2.35973 41.8632C0.801836 38.1021 0 34.071 0 30V29H0.999999L7.5 29L7.5 31L2.01725 31C2.13687 34.4672 2.87779 37.8876 4.20749 41.0978C5.66487 44.6163 7.801 47.8132 10.4939 50.5061C13.1868 53.199 16.3837 55.3351 19.9022 56.7925C23.4206 58.2499 27.1917 59 31 59C34.8083 59 38.5794 58.2499 42.0978 56.7925C45.6163 55.3351 48.8132 53.199 51.5061 50.5061C54.199 47.8132 56.3351 44.6163 57.7925 41.0978C59.1222 37.8877 59.8631 34.4672 59.9828 31L33.5 31V29L61 29H62V30C62 34.071 61.1982 38.1021 59.6403 41.8632C58.0824 45.6243 55.7989 49.0417 52.9203 51.9203C50.0417 54.7989 46.6243 57.0824 42.8632 58.6403Z"
                      fill="#121212"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
      .service_lists{
        list-style:unset !important;
        margin-top:40px; !important;
        margin-left:18px !important;
        display:flex;
        font-size:18px;
        flex-direction:column;
        gap:15px;
      }
      `}</style>
    </>
  );
};

export default ServiceOne;