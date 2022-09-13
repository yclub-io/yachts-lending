

const BackgroundVideo = () => {


  return (
    <div className="lg:pt-0 pt-[110px] m-auto flex w-full">



    <video
      className="flex  top-[0px] right-[0px] object-cover lg:h-[920px] lg:min-w-screen w-full"
      playsinline
      loop="true"
      muted
      defaultMuted 
      preload="auto"
      autoplay="autoplay"
    >
      <source src="./video/Nft_video.mp4" type="video/mp4"/>
      <source src="./video/Nft_video_ogg.ogg" type="video/ogg"/>
      <source src="./video/Nft_video_webm.webm" type="video/webm"/>
      Your browser does not support the video tag.
    </video>
      </div>



  );
};

export default BackgroundVideo;
