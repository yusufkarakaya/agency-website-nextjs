import React from "react";
import Banner from "../components/banner/page.jsx";
import Nav from "../components/navbar/page.jsx";
import Footer from "../components/footer/page.jsx";

const Projects = () => {
  return (
    <>
      <Banner />
      <Nav />
      <div className="relative bg-black p-32">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <h1 className="text-gray-400 text-[200px] font-bold">
            Innovate Forward
          </h1>
        </div>
        <div className="relative container m-auto">
          <h1 className="text-white text-5xl">Our Projects</h1>
          <p className="text-white text-xl mt-4">
            With passion and intellect, we drive business value by helping you
            be known.
          </p>
        </div>
      </div>
      <div className="p-40">This page is currently under construction.</div>
      <Footer />
    </>
  );
};

export default Projects;
