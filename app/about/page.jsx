import React from 'react'
import Banner from '../components/banner/page.jsx'
import Nav from '../components/navbar/page.jsx'
import Footer from '../components/footer/page.jsx'

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
          <h1 className="text-white text-5xl text-center">About Us</h1>
          <p className="text-white text-xl mt-4 text-center">
            With passion and intellect, we drive business value by helping you
            be known.
          </p>
        </div>
      </div>
      <section className="container m-auto py-32 text-center">
        <h2 className="text-4xl font-bold px-10">Our Mission</h2>
        <p className="text-lg mt-4 px-10">
          At StreamWave Innovations, our passion drives us to make your brand
          stand out. Through innovative strategies, advanced technology, and a
          deep industry understanding, we help clients lead in their fields. Our
          team crafts solutions that exceed goals, blending storytelling with
          data-driven insights. Your success is our mission—ensuring you're
          known, respected, and remembered.
        </p>
      </section>

      {/* Team Section */}
      <section className="container m-auto  px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {/* Team Member 1 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-32 h-32 mx-auto rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-600">Chief Executive Officer</p>
            <p className="text-gray-700 mt-3">
              Jane brings over a decade of experience in driving business
              success through innovation and strategy.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-32 h-32 mx-auto rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
            <p className="text-gray-700 mt-3">
              John leads our tech team with a focus on scalable, cutting-edge
              solutions that bring real results.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="w-32 h-32 mx-auto rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold">Emily White</h3>
            <p className="text-gray-600">Head of Marketing</p>
            <p className="text-gray-700 mt-3">
              Emily crafts our marketing strategies, ensuring that each campaign
              resonates with the target audience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
