import React, { useEffect, useRef, useState } from 'react';

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const loadGSAP = async () => {
  if (!window.gsap) {
    try {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js");
      window.gsap.registerPlugin(window.ScrollTrigger);
    } catch (err) {
      console.error("GSAP loading failed:", err);
      throw err;
    }
  }
  return window.gsap;
};

const SmoothScroll = ({ children, ease = 0.075 }) => {
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);
  const [ready, setReady] = useState(false);
  const rafId = useRef(null);
  const scroll = useRef({
    current: 0,
    target: 0,
    last: 0,
    limit: 0
  });

  useEffect(() => {
    let gsap;
    let resizeObserver;

    const init = async () => {
      try {
        gsap = await loadGSAP();
        
        // Set up scroll container
        document.documentElement.style.height = '100%';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
        
        // Calculate scroll limit
        const calculateLimit = () => {
          scroll.current.limit = contentRef.current.offsetHeight - window.innerHeight;
          document.body.style.height = `${contentRef.current.offsetHeight}px`;
        };
        
        calculateLimit();

        // Handle scroll events
        const handleScroll = () => {
          scroll.current.target = window.scrollY;
        };

        // Animation loop
        const animate = () => {
          scroll.current.current = gsap.utils.interpolate(
            scroll.current.current,
            scroll.current.target,
            ease
          );
          
          // Apply transform
          contentRef.current.style.transform = `translate3d(0, -${scroll.current.current}px, 0)`;
          
          rafId.current = requestAnimationFrame(animate);
        };

        // Start animation
        rafId.current = requestAnimationFrame(animate);
        window.addEventListener('scroll', handleScroll);

        // Handle resize
        resizeObserver = new ResizeObserver(() => {
          calculateLimit();
          scroll.current.target = Math.min(scroll.current.target, scroll.current.limit);
        });
        resizeObserver.observe(contentRef.current);

        setReady(true);

        return () => {
          cancelAnimationFrame(rafId.current);
          window.removeEventListener('scroll', handleScroll);
          if (resizeObserver) resizeObserver.disconnect();
          document.body.style.height = '';
          document.body.style.overflow = '';
          document.documentElement.style.height = '';
        };
      } catch (err) {
        console.error("Smooth scroll initialization failed:", err);
      }
    };

    init();

    return () => {
      cancelAnimationFrame(rafId.current);
      if (resizeObserver) resizeObserver.disconnect();
      document.body.style.height = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, [ease]);

  return (
    <>
      {!ready && children}
      
      <div 
        ref={wrapperRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          willChange: 'transform'
        }}
      >
        <div 
          ref={contentRef}
          style={{
            willChange: 'transform',
            position: 'absolute',
            width: '100%'
          }}
        >
          {ready && children}
        </div>
      </div>
    </>
  );
};

export default SmoothScroll;