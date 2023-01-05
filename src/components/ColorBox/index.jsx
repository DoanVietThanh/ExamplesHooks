import React, { useState } from 'react';
import './Color.scss';

function randomColor() {
  const COLOR_LIST = ['blue', 'red', 'yellow', 'green'];
  return COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
}

function ColorBox(props) {
  const [color, setColor] = useState(
    () => localStorage.getItem('box-color') || 'yellow'
  );
  function handleRandomColor() {
    const newColor = randomColor();
    setColor(newColor);
    localStorage.setItem('box-color', newColor);
  }
  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick={handleRandomColor}
    ></div>
  );
}

export default ColorBox;
