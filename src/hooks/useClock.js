import React from 'react';
import { useEffect, useState } from 'react';

function formatDate(now) {
  let hours = `0${now.getHours()}`.slice(-2);
  let minute = `0${now.getMinutes()}`.slice(-2);
  let second = `0${now.getSeconds()}`.slice(-2);
  return `${hours} : ${minute} : ${second}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const loopClock = setInterval(() => {
      let now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);

    return () => clearInterval(loopClock);
  }, []);

  return { timeString };
}

export default useClock;
