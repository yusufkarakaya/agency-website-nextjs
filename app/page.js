import React from "react";
import Banner from "./components/banner/page.jsx";
import Nav from "./components/nav/page.jsx";
import Hero from "./components/hero/page.jsx";
import ServicesSection from "./components/service-section/page.jsx";
import Expertise from "./components/expertise-section/page.jsx";
import Contact from "./components/contact-us/page.jsx";
import Footer from "./components/footer/page.jsx";

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
