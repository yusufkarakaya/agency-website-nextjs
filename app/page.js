import React from "react";
import Banner from "./components/Banner/page";
import Nav from "./components/Nav/page";
import Hero from "./components/Hero/page";
import ServicesSection from "./components/Service-section/page";
import Expertise from "./components/Expertise-section/page";
import Contact from "./components/Contact-us/page";
import Footer from "./components/Footer/page";

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
