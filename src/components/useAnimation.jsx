// hooks/useAnimation.js
import { useEffect } from 'react';
import { loadGSAP, cleanupAnimations } from './gsapUtils';

export const useAnimation = (dependencies = []) => {
  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      await loadGSAP();
    };

    initialize();

    return () => {
      mounted = false;
      cleanupAnimations();
    };
  }, dependencies);
};