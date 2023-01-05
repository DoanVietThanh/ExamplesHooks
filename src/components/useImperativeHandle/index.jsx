import React from 'react';
import { useRef } from 'react';
import Video from '../../Video';

function VideoHook(props) {
  const videoRef = useRef();

  console.log(videoRef.current);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default VideoHook;
