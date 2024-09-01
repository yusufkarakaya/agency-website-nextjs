import React from "react";
import Banner from "../components/banner/page";
import Nav from "../components/nav/page";

const Contact = () => {
  return (
    <>
      <Banner />
      <Nav />
      <div className="relative bg-black p-32">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <h1 className="text-gray-400 text-[200px] font-bold">
            Empower Growth
          </h1>
        </div>
        <div className="relative container m-auto">
          <h1 className="text-white text-5xl">Contact With Us</h1>
          <p className="text-white text-xl mt-4">
            With passion and intellect, we drive business value by helping you
            be known.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
