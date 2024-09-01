import React from "react";
import heroImage from "../../../public/assets/hero-mokup.jpg";

const Hero = () => {
  return (
    <div
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      {/* Strong Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-10">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4 text-base text-gray-300">
            <span>Branding</span>
            <span>|</span>
            <span>UI & UX Design</span>
            <span>|</span>
            <span>Product Development</span>
          </div>
          <h1 className="text-6xl font-bold uppercase">Digital Agency</h1>
          <p className="text-gray-300 mt-5 max-w-xl mx-auto text-xl">
            We see our mission in creating new meaningful stories. We believe
            that to stand out you have to stand up. To be – you have to be it.
          </p>
          <div className="flex justify-center mt-8 gap-4">
            <button className="bg-purple-600 text-white px-7 py-3 text-lg font-medium flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:bg-purple-700">
              Learn More <span className="text-xl">&rarr;</span>
            </button>
            <button className="bg-gray-700 text-white px-7 py-3 text-lg font-medium flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
              Learn More <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
