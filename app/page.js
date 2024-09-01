import React from "react";
import Banner from "./components/banner/page";
import Nav from "./components/nav/page";
import Hero from "./components/hero/page";
import ServicesSection from "./components/service-section/page";
import Expertise from "./components/expertise-section/page";
import Contact from "./components/contact-us/page";
import Footer from "./components/footer/page";

const Home = () => {
  return (
    <>
      <Banner />
      <Nav />
      <Hero />
      <ServicesSection />
      <Expertise />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
