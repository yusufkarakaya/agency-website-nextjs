import React from "react";
import Image from "next/image";
import expertiseImage from "../../../public/assets/expertise-seo.jpg";

const Expertise = () => {
  return (
    <div className="bg-[#f6f7fc] py-36 mt-16">
      <div className="max-w-[1200px] m-auto ">
        <div className="container flex justify-between items-center">
          <div className="max-w-[660px]">
            <h2 className="text-4xl">
              <strong className="text-gray-700">EXPERTISE</strong>
            </h2>
            <p className="text-xl text-gray-600 mt-3">
              We drive impact across industries.
            </p>
            <p className="text-gray-600 mt-3">
              Our team of experienced developers brings cutting-edge technology
              and innovative solutions to every project. We specialize in
              building high-quality web and mobile applications that drive
              business growth and digital transformation. Partner with us to
              turn your vision into reality and achieve success in the digital
              world.
            </p>
            <button className="bg-purple-600 text-white px-7 py-3 text-lg font-medium flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:bg-purple-700 mt-6">
              Learn More <span className="text-xl">&rarr;</span>
            </button>
          </div>
          <div>
            <Image
              src={expertiseImage}
              alt="Expertise Branding"
              width={550} // Set the desired width
              height={550} // Set the desired height
              objectFit="cover" // Optional: adjust the image fitting
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
