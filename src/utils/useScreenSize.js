import { useEffect, useState } from 'react';

export function useScreenSize() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeState = e => {
      setScreenHeight(e.target.innerWidth);
      setScreenWidth(e.target.innerWidth);
    };
    window.addEventListener('resize', changeState);
    // return window.removeEventListener('resize', changeState);
  }, []);

  return { screenHeight, setScreenHeight, screenWidth, setScreenWidth };
}
