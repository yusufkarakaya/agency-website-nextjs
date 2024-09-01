import React from "react";

const Contact = () => {
  const formActionUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

  return (
    <div className="mt-24 mb-24">
      <h1 className="text-center text-3xl text-gray-700">
        <strong>CONTACT</strong>
      </h1>
      <p className="text-center text-gray-700">Get in touch with us.</p>
      <form
        action={formActionUrl}
        method="POST"
        className="w-full max-w-lg m-auto mt-10"
      >
        <div className="flex flex-wrap mb-4 -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="firstName"
              type="text"
              placeholder="Jane"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              name="lastName"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full mb-4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
              htmlFor="grid-email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              type="submit"
              className="bg-purple-600 text-white px-7 py-3 text-lg font-medium flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:bg-purple-700"
            >
              Send <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
