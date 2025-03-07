import React,{useEffect} from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../Footer";
import brand from "../../assets/brand.jpg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import B from '../../assets/branding1.jpeg'
const Branding = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="md:pt-[130px] pt-[60px]">
      {/* first */}
      <section className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000]">
        <div className="px-4 py-10 flex flex-col md:flex-row gap-10">
          <div className="md:w-[50%] flex flex-col justify-center items-start gap-5">
            <h1 className="text-[32px] md:text-[50px] leading-tight textGradient4">
              Branding Essentials
              <span className="block text-[25px] md:text-[35px]">
                Crafting Your Unique Identity
              </span>
            </h1>
            <p className="textGradient6 text-white text-sm md:text-base">
              Discover the core elements of effective branding and how they
              shape your business identity. From visual design to messaging
              strategies, learn how to build a brand that resonates with your
              audience and drives long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-3xl bg-white drop-shadow-md textGradient5 font-bold border">
                Discover More <IoIosArrowRoundForward />
              </button>
              <div className="textGradient5 cursor-pointer">More</div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5 items-center">
              <div className="w-full md:w-[48%] h-[200px] bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] rounded-3xl">
                <ul className="bg-black h-full w-full rounded-3xl flex flex-col justify-center">
                  <li className="text-white p-3 flex items-center gap-2">
                    <ChevronRight className="mr-2 text-white" />
                    Brand Identity
                  </li>
                  <li className="text-white p-3 flex items-center gap-2">
                    <ChevronRight className="mr-2 text-white" />
                    Brand Messaging
                  </li>
                  <li className="text-white p-3 flex items-center gap-2">
                    <ChevronRight className="mr-2 text-white" />
                    Target Audience
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[48%] h-[200px] bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] rounded-3xl">
                <ul className="bg-black h-full w-full rounded-3xl flex flex-col justify-center">
                  <li className="text-white p-3 flex items-center gap-2">
                    <ChevronRight className="mr-2 text-white" />
                    Consistency
                  </li>
                  <li className="text-white p-3 flex items-center gap-2">
                    <ChevronRight className="mr-2 text-white" />
                    Brand Personality
                  </li>
                  <li className="text-white p-3 flex items-center gap-2">
                    <ChevronRight className="mr-2 text-white" />
                    Emotional Connection
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] flex justify-center">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src={brand}
                alt="brand"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
     {/* second */}
      <section className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000]">
        <div className="flex flex-col  gap-10 px-4 py-10 md:flex-row-reverse">
          <div className="md:w-[50%] flex flex-col justify-center items-center md:items-start gap-5">
            <div className="text-[#fff] text-[32px] md:text-[50px] mb-5 textGradient4 text-center md:text-left leading-tight">
              Innovative Brand Solutions
              <span className="block text-[20px] md:text-[25px]">
                Tailored Branding Strategies for Success
              </span>
            </div>
            <p className="text-[#fff] text-sm md:text-base max-w-[700px] mb-5 mx-auto md:mx-0 textGradient6 text-center md:text-left">
              We specialize in crafting powerful, creative brands that capture
              attention and drive results. Our personalized strategies help you
              build a strong, memorable identity that resonates with your
              audience. Whether you’re looking for a complete brand overhaul or
              a fresh look, we are here to help you achieve your goals.
            </p>
            <div className="text-center md:text-left">
              <Link to="/contact">
                <button className="bg-[#ffdd9e] text-[#000] py-3 px-6 rounded-full">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className=" md:w-[50%] flex justify-center bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
            <div className="rounded-3xl w-full h-full bg-[#e3d3d3] overflow-hidden">
              <img src={B} alt="" className="w-full h-full rounded-3xl" />
              </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default Branding;
