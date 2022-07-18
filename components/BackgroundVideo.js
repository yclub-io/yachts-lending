const BackgroundVideo = () => {
  return (
    <div className="relative m-auto flex w-screen">
      {/*VIDEO FILE*/}
      <img
        src="./images/Background/hero_picture.png"
        className="hidden aspect-square object-cover lg:block lg:h-[725px]  lg:min-w-[1440px]"
      />
      <img
        src="./images/Background/hero_picture_mobile.png"
        className=" m-auto aspect-square w-full lg:hidden "
      />

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
