import React from "react";

function VideoRevievsItem({ source, poster }) {
  return (
    <div className="flex">
      <video width="100%" poster={poster} controls>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoRevievsItem;
