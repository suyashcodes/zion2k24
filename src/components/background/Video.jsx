// VideoBackground.js
import React, { useRef, useEffect } from "react";
import "./video.css"; // Import your CSS file

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access the video element using the ref
    const videoElement = videoRef.current;

    // Check if the video element exists
    if (videoElement) {
      // Adjust the playback speed
      videoElement.playbackRate = 1; // You can adjust the speed factor (1.5 is 1.5x speed)
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
        ref={videoRef}
      >
        <source src="assets/zionbg.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
    </div>
  );
};

export default Video;
