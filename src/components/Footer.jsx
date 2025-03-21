import React from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1400px] mx-auto px-5 py-10">
      {/* Logo and Intro Section */}
      <div className="md:flex md:justify-between w-full mb-10">
        <div className="w-auto h-[80px] mb-5 md:mb-0">
          <img src={logo} className="w-full h-full object-contain" alt="Logo" />
        </div>
        <div className="md:w-[60%] lg:w-[500px] text-start textGradient6 text-sm md:text-base">
          © 2025 IMC Business Solutions. Leading IT solutions provider in Kerala
          since 2017. Empowering businesses with innovative software and
          technology solutions.
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full mb-10">
        {/* Address */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            ADDRESS
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            Palakkunnummal Building ,
            <span className="block">Near Govt Ayurvedic Hospital</span>{" "}
            <span className="block">Emily - Kalpetta , </span>{" "}
            <span className="block">Wayanad - Kerala - 673121</span>
          </ul>
        </div>
        {/* Company Section */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            COMPANY
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li>
              <Link to="/company#aboutid">About IMC</Link>
            </li>
            <li>
              <Link to="/company#team">Team</Link>
            </li>
            <li>
              <Link to="/company#goalsmission">Goals & Missions</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/company#supports">Supports</Link>
            </li>
            <li>
              <Link to="/company#bussinessopportunities">
                Business Opportunities
              </Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>
        {/* Softwares Section */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            SOFTWARES
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li>
              <Link to="/inventory">
                Inventory Management
              </Link>
            </li>
            <li>
              <Link to="/healthcare">
                Health Care Management
              </Link>
            </li>
            <li>
              <Link to="/institution">
                Institution Management
              </Link>
            </li>
            <li>
              <Link to="/pharmacy">
                Pharmacy
              </Link>
            </li>
            <li>
              <Link to="/restaurant">Restaurants</Link>
            </li>
            
            
            <li>
              <Link to="/hospitality">Hospitality</Link>
            </li>
            
          </ul>
        </div>
        {/* Solutions Section */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            SOLUTIONS
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
          <li>
              <Link to="/erpsoftware">
                ERP Software
              </Link>
            </li>
            <li>
              <Link to="/websiteandWebApplications">
                Website & Web Application
              </Link>
            </li>
            <li>
              <Link to="/mobileApp">Mobile App Development</Link>
            </li>
            <li>
              <Link to="/businessBranding">Business Consulting</Link>
            </li>
            <li>
              <Link to="/digitalmarketing">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/hardwaresolutions">Hardware Soutions</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copy Right Section */}
      <div className="border-t w-full pt-5 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="text-sm text-center md:text-left">
          © 2025 IMC Business Solutions. All rights reserved.
        </div>
        <ul className="flex justify-center gap-4">
          <li className="cursor-pointer text-xl">
            <a
              href="https://www.instagram.com/imcbusinesssolution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://www.facebook.com/people/IMC-Business-Solution/100069040622427/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://api.whatsapp.com/send/?phone=917593820005&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://www.linkedin.com/in/imc-business-solutions-0b0066335/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://imcportfolio.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;