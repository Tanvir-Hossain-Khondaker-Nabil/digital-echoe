import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

function FadeUpSection({ children }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // fade up from 50px below
      whileInView={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default FadeUpSection;
