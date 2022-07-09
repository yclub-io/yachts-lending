const BackgroundVideo = () => {
    return (
        <div className="flex justify-center relative">
          {/*PLAY BUTTON*/}
          <img src="./video/play-button.svg"
             className="flex absolute z-10 left-[666px] top-[385px]"/>
          {/*VIDEO FILE*/}
        <img src="./video/video_screen_shot.png"
             className="flex justify-center m-auto aspect-square absolute top-[125px] right-[0px] lg:h-[725px] lg:min-w-[1440px] object-cover"/>
          
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

    