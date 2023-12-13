"use client";
import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = () => {
    const videoId = "DF0AUMJpv28"
  // Set up event handlers
  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error) => {
    console.error("YouTube Player Error:", error);
  };

  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <section className=" px-5 py-5 lg:px-28 lg:py-14 container m-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl lg:text-4xl text-center font-bold uppercase text-black pb-7">
            profil <span className="text-red-600">perusahaan</span>
          </h1>
          <div className="m-auto lg:hidden">
            <YouTube videoId={videoId} iframeClassName="w-full" onReady={onReady} onError={onError} />
          </div>
          <div className="m-auto hidden lg:block">
            <YouTube videoId={videoId} onReady={onReady} onError={onError} />
          </div>
        </div>
      </section>
    </>
  );
};

export default YoutubePlayer;
