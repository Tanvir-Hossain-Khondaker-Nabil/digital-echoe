import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedTextTo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="container text-center py-5"></div>;
  }

  return (
    <section
      className="dsn-testimonials testimonials-small full-testimonials section-margin"
    >
      <div className="container">
        <div className="section-title dsn-fill mb-70 d-flex flex-column">
          <AnimatedText className="sub-heading title-orange">
            testimonials
          </AnimatedText>
          <AnimatedText className="title title-orange">
            What People Are Saying
          </AnimatedText>
        </div>
        <div className="testimonials-inner d-flex over-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            direction="horizontal"
            autoHeight={false}
            slideToClickedSlide={false}
            grabCursor={true}
            mousewheel={false}
            loop={true}
            parallax={false}
            slidesPerGroup={1}
            speed={1000}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              }
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonal-item background-section has-border-radius d-flex flex-column align-items-center"
                  style={{ background: "#171717" }}>
                  <div className="content">
                    <div className="rating">
                      <h3 className="heading">
                        {testimonial.rate}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      </h3>
                      <p className="text-upper" style={{ color: "#d3d4d4" }}>out of 5 stars</p>
                    </div>

                    <p className="text-white title-block mt-50 text-upper" style={{ color: "#d3d4d4" }}>
                      {testimonial.description}
                    </p>

                    <div className="quote mt-30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                        <path d="M0 0V30L15.0025 15V0H0Z" fill="#030104" />
                        <path d="M24.9961 0V30L39.9986 15V0H24.9961Z" fill="#030104" />
                      </svg>
                    </div>
                  </div>

                  <div className="box-authoer w-100 v-light p-20" style={{ background: "white" }}>
                    <div className="authoer d-flex">
                      <div className="img">
                        <img 
                          className="cover-bg-img" 
                          src={`https://dev.digital-echoes.binary-group.com/admin/${testimonial.photo}`} 
                          alt={testimonial.name} 
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "/img/team/1.jpg";
                          }}
                        />
                      </div>

                      <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 0C10.6801 7.41878 16.3937 7.34643 26 0V19C15.594 10.5293 9.86673 10.5632 0 19V0Z"
                          fill="#E0E0E0"
                        />
                      </svg>

                      <div className="text" style={{ background: "#d3d4d4" }}>
                        <h5>{testimonial.position}</h5>
                        <span>{testimonial.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;