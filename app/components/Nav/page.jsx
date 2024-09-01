import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-black flex items-center justify-around px-28 py-6">
      <div>
        <span id="logo">
          <Link href="/">
            <span className="text-5xl font-semibold text-white">
              StreamWave
              <strong className="text-3xl text-purple-600">
                Innovations<span className="text-white">.</span>
              </strong>
            </span>
          </Link>
        </span>
      </div>
      <div>
        <ul className="flex gap-5 text-white">
          <li className="cursor-pointer border-b-2 border-transparent hover:border-purple-600 transition duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-purple-600 transition duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-purple-600 transition duration-300">
            <Link href="/services">Services</Link>
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-purple-600 transition duration-300">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-purple-600 transition duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
