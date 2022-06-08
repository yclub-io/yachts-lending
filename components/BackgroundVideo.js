const BackgroundVideo = () => {
    return (
        <div className="-z-20">
    <video
      className="flex opacity-50 absolute top-[0px] right-[0px] object-cover h-[920px] min-w-[2000px] w-full"
      autoPlay
      loop
      muted
    >
      <source src="images/heroSectionWebmVideo.webm" type="video/webm"/>
      Your browser does not support the video tag.
    </video>
      </div>
    );
  };

  export default BackgroundVideo;

    