import React from "react";
import HeroBg from "../../asset/hero-bg.jpg";
import Navbar from "../atoms/Navbar";

//  The main landing section with a background image,

const Hero = () => {
  return (
    <section
      className="relative h-[85vh] w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Global Navigation Overlay */}
      <Navbar />

      {/* Background Overlay: Improves text readability against the image */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content: Set to relative z-10 to stay above the dark overlay */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Finding the best car insurance <br className="hidden md:block" />{" "}
          company for you
        </h1>

        {/* Sub-headline  */}
        <p className="text-sm md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sit,
          in mollitia ab veniam aliquid.
        </p>

        {/* arrow  */}
        <div className="mt-10 text-orange-500 cursor-pointer hover:scale-110 transition-transform">
          <span className="font-bold text-9xl">»</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
