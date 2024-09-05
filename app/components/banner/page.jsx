import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#fff] p-4 flex justify-around sm:flex-row flex-col items-center ">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <FaEnvelope />
          <span>info@webmail.com</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaPhone />
          <span>+953 564 46 56</span>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <FaMapMarkerAlt />
        <address>
          <span>Pro Street, Temecula CA</span>
        </address>
      </div>
    </div>
  );
};

export default Banner;
