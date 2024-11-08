import React from 'react'
import Banner from '../components/banner/page.jsx'
import Nav from '../components/navbar/page.jsx'
import ContactForm from '../components/contact-us/page.jsx'
import Footer from '../components/footer/page.jsx'

const Contact = () => {
  return (
    <>
      <Banner />
      <Nav />
      <div className="relative bg-black p-32">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <h1 className="text-gray-400 text-[200px] font-bold">
            Empower Growth
          </h1>
        </div>
        <div className="relative container m-auto">
          <h1 className="text-white text-5xl text-center">Contact With Us</h1>
          <p className="text-white text-xl mt-4 text-center">
            With passion and intellect, we drive business value by helping you
            be known..
          </p>
        </div>
      </div>
      <section className="container m-auto ">
        <div className="flex flex-col md:flex-row justify-around items-center  ">
          <div className="mb-8 mt-8 md:mb-0">
            <h1 className="font-bold text-5xl leading-tight">
              Tell Us a story
            </h1>
            <p className="text-gray-600 text-lg mt-4 max-w-sm">
              Whether you have a question, a project idea, or just want to say
              hello, we're here to listen. Let's start a conversation and
              explore how we can bring your vision to life.
            </p>
          </div>
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
