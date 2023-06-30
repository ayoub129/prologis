import { useRef, useEffect } from "react";

const Meet = () => {
  const videoEl = useRef(null);
  const videoEl2 = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.log("error attemting to play", error);
      });

    videoEl2 &&
      videoEl2.current &&
      videoEl2.current.play().catch((error) => {
        console.log("error attemting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="mt-20 py-20 bg-base-200">
      <div className="w-8/12 mx-auto md:flex md:items-center md:justify-between">
        <div className="video md:w-6/12">
          <h2 className="text-green-700 font-bold py-10 text-3xl">MEET MAJO</h2>
          <video
            loop
            className="w-full lg:h-70 "
            playsInline
            ref={videoEl}
            poster="assets/majo.jpg"
            controls
          >
            <source src="assets/video.mp4"></source>
          </video>
          <p className="text-xl w-10/12 pb-10 font-light tracking-wider text-base-400">
            "It really impacts the way you live outside the walls of the
            office."
          </p>
        </div>
        <div className="video md:w-6/12 md:ms-20">
          <h2 className="text-green-700 font-bold py-10 text-3xl">
            MEET TIMOR
          </h2>
          <video
            loop
            className="w-full lg:h-70 "
            playsInline
            ref={videoEl2}
            poster="assets/timor.jpg"
            controls
          >
            <source src="assets/video.mp4"></source>
          </video>
          <p className="text-xl w-8/12 pb-10 font-light tracking-wider text-base-400">
            “Prologis has been great for our family.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet;
