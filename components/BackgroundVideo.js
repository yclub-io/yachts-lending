

const BackgroundVideo = () => {

  const desc = `<iframe src="https://player.vimeo.com/video/731504910?h=da13c4bfd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0&muted=1:" allow="autoplay frameborder="0"; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="YCLUB.mov"></iframe>`;
  return (
    <div className="lg:pt-0 pt-[25px] m-auto flex w-full">


      <div
        className="hidden aspect-square object-cover  lg:block lg:h-[900px]  lg:min-w-[1440px]"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      <div
        className=" m-auto aspect-square w-full lg:hidden"
        dangerouslySetInnerHTML={{ __html: desc }}
      />


    </div>
  );
};

export default BackgroundVideo;
