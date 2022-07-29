import { useState, useEffect } from "react";

interface WindowSize {
  height: number;
  width: number;
}

export const useSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return windowSize;
};
