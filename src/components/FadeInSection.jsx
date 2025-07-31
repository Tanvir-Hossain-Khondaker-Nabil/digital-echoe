import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

function FadeInSection({ children }) {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;
