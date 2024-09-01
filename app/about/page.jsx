import React from "react";
import Banner from "../components/Banner/page.jsx";
import Nav from "../components/Nav/page.jsx";
import Footer from "../components/Footer/page.jsx";

const About = () => {
  return (
    <>
      <Banner />
      <Nav />
      <div className="relative bg-black p-32">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <h1 className="text-gray-400 text-[200px] font-bold">
            Beyond Boundaries
          </h1>
        </div>
        <div className="relative container m-auto">
          <h1 className="text-white text-5xl">About Us</h1>
          <p className="text-white text-xl mt-4">
            With passion and intellect, we drive business value by helping you
            be known.
          </p>
        </div>
      </div>
      <section className="container m-auto py-32">
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <p className="text-lg mt-4">
          At StreamWave Innovations, our passion and intellect are the driving
          forces behind everything we do. We are committed to delivering
          business value by ensuring that your brand stands out in the crowded
          marketplace. Through innovative strategies, cutting-edge technology,
          and a deep understanding of the latest industry trends, we help our
          clients become recognized leaders in their fields. We believe in the
          power of storytelling, data-driven insights, and tailored solutions
          that resonate with your target audience. Our team of experienced
          professionals works tirelessly to craft campaigns and digital
          solutions that not only meet but exceed your business goals. With
          StreamWave Innovations, your success is our mission. We’re here to
          help you be known, respected, and remembered.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
