import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

function Paragraph() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      Context provides a way to pass data through the component tree without
      having to pass props down manually at every level
    </div>
  );
}

export default Paragraph;
