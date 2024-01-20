// VideoBackground.js
import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './video.css';

const Video = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Access the player and set the playback rate
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().playbackRate = 0.8; // Adjust the playback rate as needed
    }
  }, []);

  return (
    <div className="video-background">
      <ReactPlayer
        ref={playerRef}
        url="assets/vid2.mp4" // Replace with your video URL
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default Video;
