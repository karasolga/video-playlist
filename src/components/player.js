import React, { useEffect, useRef } from "react";

function Player({ item, onEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.onended = onEnded;
    video.load();
    video.play();

    return () => {
      video.onended = null;
    };
  }, [item, onEnded]);

  return (
    <video width="640" height="360" controls ref={videoRef}>
      <source src={item.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Player;
