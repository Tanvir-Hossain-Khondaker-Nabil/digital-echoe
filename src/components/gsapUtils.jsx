// utils/gsapUtils.js
let gsapLoaded = false;

export const loadGSAP = async () => {
  if (!window.gsap) {
    try {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js");
      if (!window.gsap) throw new Error("GSAP failed to load");
      window.gsap.registerPlugin(window.ScrollTrigger);
      gsapLoaded = true;
    } catch (err) {
      console.error("GSAP loading failed:", err);
      throw err;
    }
  }
  return window.gsap;
};

export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      return resolve();
    }
    
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => {
      console.error(`Failed to load script: ${src}`);
      reject();
    };
    document.body.appendChild(script);
  });
};

export const animateText = async (element, options = {}) => {
  if (!element || !element.textContent) {
    console.error("Invalid element or empty content");
    return;
  }

  try {
    await loadGSAP();
    const originalText = element.textContent;

    // Split by words while preserving spaces and punctuation
    const words = originalText.split(/(\s+)/).filter(word => word.length > 0);
    
    element.innerHTML = words.map(word => 
      word.trim() === '' 
        ? '&nbsp;' 
        : `<span class="gsap-word">${word}</span>`
    ).join('');

    const wordElements = element.querySelectorAll('.gsap-word');

    window.gsap.from(wordElements, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none none",
        ...options.scrollTrigger
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      ...options
    });

    return () => {
      element.textContent = originalText;
    };
  } catch (error) {
    console.error("Text animation failed:", error);
    if (element) element.textContent = originalText;
  }
};

export const cleanupAnimations = () => {
  if (window.ScrollTrigger) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
};