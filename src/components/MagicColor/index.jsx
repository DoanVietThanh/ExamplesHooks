import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../hooks/useMagicColor';

MagicColor.propTypes = {};

function MagicColor(props) {
  const randomColor = useMagicColor();
  return (
    <div style={{ color: randomColor, fontSize: '40px' }}>{randomColor}</div>
  );
}

export default MagicColor;
