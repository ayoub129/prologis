import { useEffect, useRef } from "react";
import video from "./assets/enemy.mp4";

const Hero = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div>
      <video
        width="100%"
        muted
        className="h-44"
        src={video}
        alt="video playing"
        playsInline
        loop
        ref={videoEl}
      />
    </div>
  );
};

export default Hero;
