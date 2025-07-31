// components/AnimatedText.js
import React, { useEffect, useRef } from 'react';
import { animateText } from './gsapUtils';

const AnimatedTextTo = ({ children, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      animateText(textRef.current);
    }
  }, [children]);

  return (
    <div ref={textRef} className={`animate-text ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedTextTo;