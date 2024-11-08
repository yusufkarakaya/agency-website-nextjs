import React from 'react'
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaMobileAlt,
  FaVideo,
} from 'react-icons/fa'

const ServicesSection = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="max-w-[600px] m-auto pt-10">
        <h2 className="text-4xl text-center text-gray-900">
          <strong>LET’S MAKE SOMETHING GREAT TOGETHER</strong>
        </h2>
        <p className="text-xl text-center pt-5 text-gray-500">
          Take your brand to the next level. Partner with experts in web
          development, design, branding, and more to engage your audience
          effectively.
        </p>
      </div>
      <h3 className="text-center cursor-pointer mt-10">
        <strong className="relative inline-block p-2 border-b border-purple-600 overflow-hidden group">
          <span className="relative transition-colors duration-500">
            OUR SERVICES
          </span>
        </strong>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-16 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FaCode className="text-4xl text-purple-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-gray-700">
            Web Development
          </h2>
          <p className="text-gray-600">
            Build robust and scalable web applications tailored to your business
            needs.
          </p>
        </div>
        <div className="bg-white p-16 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FaPaintBrush className="text-4xl text-purple-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Web Design</h2>
          <p className="text-gray-600">
            Create visually stunning and user-friendly websites that captivate
            your audience.
          </p>
        </div>
        <div className="bg-white p-16 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FaBullhorn className="text-4xl text-purple-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Branding</h2>
          <p className="text-gray-600">
            Develop a strong brand identity that resonates with your target
            audience.
          </p>
        </div>
        <div className="bg-white p-16 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FaChartLine className="text-4xl text-purple-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-gray-700">SEO</h2>
          <p className="text-gray-600">
            Enhance your online presence with effective SEO strategies that
            drive organic traffic.
          </p>
        </div>
        <div className="bg-white p-16 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FaMobileAlt className="text-4xl text-purple-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Mobile App</h2>
          <p className="text-gray-600">
            Design and develop mobile applications that provide seamless user
            experiences on the go.
          </p>
        </div>
        <div className="bg-white p-16 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FaVideo className="text-4xl text-purple-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-gray-700">
            Video Editing
          </h2>
          <p className="text-gray-600">
            Create compelling video content with professional editing to enhance
            your brand's storytelling.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
