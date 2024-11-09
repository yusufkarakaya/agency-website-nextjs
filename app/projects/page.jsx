import React from 'react'
import Banner from '../components/banner/page.jsx'
import Nav from '../components/navbar/page.jsx'
import Footer from '../components/footer/page.jsx'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Digital Transformation for HealthTech',
      description:
        'We helped a healthcare company streamline operations with a digital-first approach.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 2,
      title: 'E-commerce Solution for Local Businesses',
      description:
        'Developed a robust e-commerce platform that empowers local businesses to reach new customers.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 3,
      title: 'Data-Driven Marketing Strategy',
      description:
        'Enabled a data-driven marketing strategy that increased customer engagement by 40%.',
      image: 'https://via.placeholder.com/400x250',
    },
  ]

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
          <h1 className="text-white text-5xl text-center">Our Projects</h1>
          <p className="text-white text-xl mt-4 text-center">
            With passion and intellect, we drive business value by helping you
            be known.
          </p>
        </div>
      </div>

      <section className="container m-auto py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Projects
