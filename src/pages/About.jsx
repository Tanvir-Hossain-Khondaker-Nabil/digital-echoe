import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import News from '../components/News';
import Team from '../components/Team';
import Awards from '../components/Awards';
import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import ServiceCategory from '../components/ServiceCategory';

export default function About() {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);
  const animationFrameIds = useRef([]);

  useEffect(() => {
    const animateSlider = (element, direction) => {
      let position = 0;
      const speed = 1;
      const images = element.querySelectorAll('.grid-item');
      const firstImage = images[0];
      
      if (!firstImage) return;
      
      const itemWidth = firstImage.offsetWidth;
      const totalWidth = itemWidth * images.length;
      
      const animate = () => {
        if (direction === 'right-to-left') {
          position -= speed;
          if (position <= -itemWidth) {
            position = 0;
            element.appendChild(element.firstElementChild);
          }
        } else {
          position += speed;
          if (position >= itemWidth) {
            position = 0;
            element.insertBefore(element.lastElementChild, element.firstElementChild);
          }
        }
        
        element.style.transform = `translateX(${position}px)`;
        const id = requestAnimationFrame(animate);
        animationFrameIds.current.push(id);
      };
      
      animate();
    };

    if (topSliderRef.current) {
      animateSlider(topSliderRef.current, 'right-to-left');
    }
    
    if (bottomSliderRef.current) {
      animateSlider(bottomSliderRef.current, 'left-to-right');
    }

    return () => {
      // Clean up animation frames
      animationFrameIds.current.forEach(id => cancelAnimationFrame(id));
    };
  }, []);

  const images = [
    { id: 1, src: './img/img-arc1.jpg' },
    { id: 2, src: './img/img-arc2.jpg' },
    { id: 3, src: './img/img-arc3.jpg' },
    { id: 4, src: './img/img-arc4.jpg' },
    { id: 5, src: './img/img-arc2.jpg' },
  ];

  return (
    <div>
      <main id="main_root" className="main-root">
        <Navbar />
        <AboutUs/>

        <div className="wrapper" id="page_wrapper">
          {/* Image Sliders Section */}
          <div className="img-under-header p-relative" style={{ background: "#171717", padding: '50px 0' }}>
            {/* Top Slider - Right to Left */}
            <div className="dsn-marque p-relative h-100 over-hidden" style={{ overflow: 'hidden' }}>
              <div
                ref={topSliderRef}
                className="dsn-grid-layout dsn-grid section-image section-move-image"
                style={{
                  display: 'flex',
                  flexWrap: "nowrap",
                  width: 'fit-content',
                  gap: '20px',
                }}
              >
                {[...images, ...images].map((image, index) => (
                  <div key={`top-${image.id}-${index}`} className="grid-item" style={{ flexShrink: 0 }}>
                    <div className="image-item h-100">
                      <img
                        alt=""
                        className="cover-bg-img has-border-radius"
                        src={image.src}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Slider - Left to Right */}
            <div className="dsn-marque p-relative h-100 over-hidden mt-20" style={{ overflow: 'hidden' }}>
              <div
                ref={bottomSliderRef}
                className="dsn-grid-layout dsn-grid section-image section-move-image move-left"
                style={{
                  display: 'flex',
                  flexWrap: "nowrap",
                  width: 'fit-content',
                  gap: '20px',
                }}
              >
                {[...images, ...images].map((image, index) => (
                  <div key={`bottom-${image.id}-${index}`} className="grid-item" style={{ flexShrink: 0 }}>
                    <div className="image-item h-100">
                      <img
                        alt=""
                        className="cover-bg-img has-border-radius"
                        src={image.src}
                        style={{ 
                          width: '100%', 
                          height: '100%',  
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="over-hidden box-text has-border-radius v-middle d-flex align-items-center justify-content-center text-center dsn-fill dsn-fill-animation words splitting"
              style={{
                "--word-total": "2",
                margin: '50px auto',
                maxWidth: '600px',
              }}>
              <h2 className="title-lg about_title">
                <span className="fw-200">
                  <span className="about_title">
                    Seamless
                  </span>
                </span>
                <br />
                <span className="about_title">
                  Experience
                </span>
              </h2>
            </div>
          </div>

          <ServiceCategory/>
          
          <Awards/>
          
          <Team />
          <Blog />
          <News />
        </div>

        <Footer />
      </main>
      <style>{`
        .sub-heading-about {
          color: #ee7123 !important;
          font-size: 30px !important;
        }
        .description-box-about {
          color: rgb(206, 201, 201) !important;
          font-size: 16px !important;
        }
        .text-white {
          color: white !important;
        }
        .about_title .word {
          color: white !important;
        }
        .dsn-marque {
          overflow: hidden !important;
        }
        .grid-item {
          flex-shrink: 0;
        }
        .has-border-radius {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}