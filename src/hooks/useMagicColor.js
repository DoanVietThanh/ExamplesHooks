import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function randomMagicColor(currentColor) {
  const COLOR_LIST = ['red', 'blue', 'green', 'yellow', 'orange'];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * COLOR_LIST.length);
  }
  return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
  const colorRef = useRef('transparent');
  const [magicColor, setMagicColor] = useState('red');

  useEffect(() => {
    const newMagicColor = setInterval(() => {
      const newColor = randomMagicColor(colorRef.current);
      setMagicColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => clearInterval(newMagicColor);
  }, []);

  return magicColor;
}

export default useMagicColor;
