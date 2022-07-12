const BackgroundVideo = () => {
    return (
        <div className="relative flex w-screen m-auto">
          {/*PLAY BUTTON*/}
          <img src="./video/play-button.svg"
             className="hidden absolute z-10 left-0 right-0 m-auto lg:w-[98px] w-[76px] lg:top-[280px] top-[261px]"/>
          {/*VIDEO FILE*/}
        <img src="./images/Background/hero_picture.png"
             className="aspect-square lg:h-[725px] lg:min-w-[1440px]  object-cover"/>
          
    {/*<video
      className="flex opacity-50 absolute top-[0px] right-[0px] object-cover h-[920px] min-w-[2000px] w-full"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
    >
      <source src="video/background.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>*/}
      </div>
    );
  };

  export default BackgroundVideo;

    