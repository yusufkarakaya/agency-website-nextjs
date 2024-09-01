import React from "react";
import Banner from "./components/Banner/page.jsx";
import Nav from "./components/Nav/page.jsx";
import Hero from "./components/Hero/page.jsx";
import ServicesSection from "./components/Service-section/page.jsx";
import Expertise from "./components/Expertise-section/page.jsx";
import Contact from "./components/Contact-us/page.jsx";
import Footer from "./components/Footer/page.jsx";

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
