import React, { useRef } from "react";
import ReactPlayer from "react-player";
import appVideo from "../img/about/1.mp4";

const VideoComponent = () => {
  const playerRef = useRef(null);

  return (
    <ReactPlayer
      ref={playerRef}
      url={appVideo}
      controls={true}
      width="100%"
      height="70vh"
    />
  );
};

export default VideoComponent;
