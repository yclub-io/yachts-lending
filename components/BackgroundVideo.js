import { useState } from "react";

const BackgroundVideo = () => {

  const desc = `<iframe src="https://player.vimeo.com/video/731504910?h=da13c4bfd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0&muted=1:" allow="autoplay frameborder="0"; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="YCLUB.mov"></iframe>`;
  return (
    <div className=" m-auto flex w-screen">
      {/*VIDEO FILE*/}

      <div
        className="hidden aspect-square object-cover lg:block lg:h-[900px]  lg:min-w-[1440px]"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      <div
        className=" m-auto aspect-square w-full lg:hidden"
        dangerouslySetInnerHTML={{ __html: desc }}
      />

      {/* <div className="relative">
          <img
            src="./video/play-button.svg"
            className="absolute top-1/2 left-1/2 w-10 cursor-pointer"
            onClick={() => setPlaing(true)}
          />
          <img
            src="./images/Background/hero_picture.png"
            className="hidden aspect-square object-cover lg:block lg:h-[925px]  lg:min-w-[1440px]"
          />
          <img
            src="./images/Background/hero_picture_mobile.jpg"
            className=" m-auto aspect-square w-full lg:hidden"
          />
        </div> */}
    </div>
  );
};

export default BackgroundVideo;
