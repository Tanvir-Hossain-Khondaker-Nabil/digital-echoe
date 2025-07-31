import React from 'react';

const Testominal = () => {
    return (
        <>


<section
      className="dsn-testimonials testimonials-small full-testimonials section-margin dsn-swiper"
      data-dsn-option={{
        spaceBetween: 30,
        centeredSlides: false,
        direction: "horizontal",
        autoHeight: false,
        slideToClickedSlide: false,
        grabCursor: true,
        mousewheel: false,
        loop: true,
        parallax: false,
        slidesPerGroup: 1,
        slidesPerView: 2,
        speed: 1000,
        effect: "card",
      }}
    >
      <div className="container">
        <div className="section-title dsn-fill d-flex flex-column mb-70">
          <span className="sub-heading mb-5">testimonials</span>
          <h2 className="title">What People Are Saying</h2>
          <p className="mt-20">
            Consumers today rely heavily on digital <br />
            means to research products. We research a brand of bldend
          </p>
        </div>
        <div className="testimonials-inner d-flex over-hidden">
          <div className="swiper swiper-container">
            <div className="swiper-wrapper">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="swiper-slide testimonal-item background-section has-border-radius d-flex flex-column align-items-center"
                >
                  <div className="content">
                    <div className="rating">
                      <h3 className="heading">
                        4.9
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      </h3>
                      <p className="text-upper">out of 5 stars</p>
                    </div>

                    <p className="title-block mt-50 text-upper">
                      We full service digital agency that build’s fascinating users experiences...
                    </p>

                    <div className="quote mt-30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                        <path d="M0 0V30L15.0025 15V0H0Z" fill="#030104" />
                        <path d="M24.9961 0V30L39.9986 15V0H24.9961Z" fill="#030104" />
                      </svg>
                    </div>
                  </div>

                  <div className="box-authoer w-100 v-light background-main p-20">
                    <div className="authoer d-flex">
                      <div className="img">
                        <img className="cover-bg-img" src="/img/team/1.jpg" alt="" />
                      </div>

                      <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 0C10.6801 7.41878 16.3937 7.34643 26 0V19C15.594 10.5293 9.86673 10.5632 0 19V0Z"
                          fill="#E0E0E0"
                        />
                      </svg>

                      <div className="text background-section">
                        <h5>MTL Graphic</h5>
                        <span>Envato User</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
            
        </>
    );
};

export default Testominal;