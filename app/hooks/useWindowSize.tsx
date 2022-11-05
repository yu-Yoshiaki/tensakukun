import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const responsive = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    doublexl: 1536,
  };
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);

  return { windowSize, responsive };
};
