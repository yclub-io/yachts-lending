import { useState } from "react";

const BackgroundVideo = () => {
  const [isPlaying, setPlaing] = useState(false);

  const desc = `<iframe src="https://player.vimeo.com/video/731504910?h=5b573395d0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  const desc2 = `<iframe src="https://player.vimeo.com/video/731504910?h=da13c4bfd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="YCLUB.mov"></iframe>`;
  return (
    <div className="relative m-auto flex w-screen">
      {/*VIDEO FILE*/}

      {isPlaying ? (
        <>
          <div
            className="hidden aspect-square object-cover lg:block lg:h-[900px]  lg:min-w-[1440px]"
            dangerouslySetInnerHTML={{ __html: desc2 }}
          />
          <div
            className=" m-auto aspect-square w-full lg:hidden"
            dangerouslySetInnerHTML={{ __html: desc2 }}
          />
        </>
      ) : (
        <>
          <img
            src="./images/Background/hero_picture.png"
            className="hidden aspect-square object-cover lg:block lg:h-[725px]  lg:min-w-[1440px]"
          />
          <img
            src="./images/Background/hero_picture_mobile.jpg"
            className=" m-auto aspect-square w-full lg:hidden"
          />
        </>
      )}

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
