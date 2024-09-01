import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 p-10 text-gray-300 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Locations Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Locations</h3>
            <p>
              <strong>California HQ, United State</strong>
              <br />
              3466 Temecula Pkwy
              <br />
              Woodside California
            </p>
            <p className="mt-4">
              <strong>Istanbul, Turkiye</strong>
              <br />
              Gumushane Sok.
              <br />
              Cicek Plaza
              <br />
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Phone</h3>
            <p>+23 345 654 5678</p>
            <p>+45 334 345 0694</p>
            <h3 className="text-lg font-semibold mt-6 mb-3">Email address</h3>
            <p>contact@solutions.com</p>
          </div>
        </div>

        <div className="container mx-auto text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
          <p>© 2024 All Rights Reserved</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link legacyBehavior href="/about">
              <a className="hover:text-white transition-colors duration-300">
                About
              </a>
            </Link>
            <Link legacyBehavior href="/privacy-policy">
              <a className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </Link>
            <Link legacyBehavior href="/cookie-policy">
              <a className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </Link>
            <Link legacyBehavior href="/sitemap">
              <a className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
