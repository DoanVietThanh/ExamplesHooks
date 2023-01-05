import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useClock from '../../hooks/useClock';

function Clock(props) {
  const { timeString } = useClock();

  return <p>{timeString}</p>;
}

export default Clock;
