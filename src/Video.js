import video1 from './videos/video-1.mp4';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={video1} width={300} height={300} />;
}
export default forwardRef(Video);
