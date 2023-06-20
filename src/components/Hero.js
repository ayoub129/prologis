import Video from "./Video";

const Hero = ({ header, text, src, isVideo }) => {
  return (
    <div className="w-full">
      {isVideo ? <Video src={src} /> : <img src={src} alt="hero" />}
      <div className="w-full text-center bg-blue-400">
        <h2 className="uppercase text-white tracking-wider leading-12 text-3xl w-9/12 mx-auto md:text-4xl font-bold pt-8">
          {header}
        </h2>
        <p className="text-white py-8 md:text-xl tracking-wide w-10/12 lg:w-5/12 mx-auto">
          {text}
        </p>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  isVideo: false,
};

export default Hero;

// 100% finish
