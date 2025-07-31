import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Speed() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // start of element to end of viewport
  });

  // Make the element move slower than scroll (parallax)
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]); // move up 100px as you scroll

  return (
    <div style={{ height: '150vh', backgroundColor: '#f0f0f0' }}>
      <motion.div
        ref={ref}
        style={{
          y,
          height: '300px',
          backgroundColor: '#222',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
        }}
      >
        Scroll Speed Effect
      </motion.div>
    </div>
  );
}

export default Speed;
