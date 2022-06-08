const BackgroundVideo = () => {
    return (
        <div className="-z-20">
    <video
      className="flex opacity-50 absolute top-[0px] right-[0px] object-cover h-[920px] min-w-[2000px] w-full"
      autoPlay
      loop
      muted
      playsinline
      disablePictureInPicture
    >
      <source src="video/background.mp4" type="video/ogg"/>
      Your browser does not support the video tag.
    </video>
      </div>
    );
  };

  export default BackgroundVideo;

    