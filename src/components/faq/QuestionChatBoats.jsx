import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRocketchat } from "react-icons/fa";
import ChatBot from "../ChatBot";
import Footer from "../Footer";
import darkGradient from "../../assets/darkGradient.jpg";
import { RiWhatsappLine } from "react-icons/ri";



const QuestionChatBoats = () => {
  const [active, setActive] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    // Scroll to top when this component loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);
  
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center relative h-auto pt-[65px] md:pt-24 bg-[#fff]">
        {/* <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 -z-10">
          <img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
        <a href="https://wa.me/+917593820007">
                <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
                  <RiWhatsappLine/>
                </div>
              </a>
        {openChat ? (
          <div className="fixed bottom-10 z-[999] right-10">
            <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
          </div>
        ) : (
          <div className="fixed bottom-10 z-[999] right-10">
            <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
          </div>
        )}

        <section className="w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center mb-20 mt-[24px] md:mt-[10px] px-4">
          <div>
            {/* Highlight Banner */}
            <div className="w-full flex justify-center items-center mb-5">
              <div className="px-4 py-2 flex justify-center items-center rounded-full backdrop-blur-3xl gap-3 bg-[#5b413055] border">
                <div className="px-8 py-1 text-sm  font-semibold rounded-3xl bg-[#ff6106] text-[#352317]">
                  New
                </div>
                <div className=" text-[#352317] text-xs md:text-base">
                  AI can now answer chats for you
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-[24px] md:text-[30px] text-[#352317]  leading-tight text-center mb-5">
              Ask. Learn. Engage.
              <span className="block text-sm md:text-base">
                Empowering your business with intelligent chatbots
              </span>
            </div>

            {/* Description */}
            <div className="text-center text-[#000] max-w-[1000px] mx-auto mb-6 text-sm md:text-base">
              Need answers fast? Our AI-powered question based chatbot is here
              to help. Whether it's customers, employees, or students seeking
              information, the chatbot delivers accurate and instant answers
              24/7. From product inquiries and FAQs to complex problem-solving,
              your virtual assistant has it covered.
            </div>

            {/* Benefits List */}
            <ul className=" text-[#000] max-w-[900px] mx-auto list-disc list-inside mb-6 text-sm md:text-base text-center">
              <li>24/7 Availability: Never miss a query</li>
              <li>
                Accurate Answers: AI-trained to provide relevant, reliable
                responses
              </li>
              <li>Easy Integration: Seamlessly embed into websites and apps</li>
              <li>
                Personalized Interactions: Tailored to your business needs
              </li>
            </ul>

            {/* Call to Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
              {/* <button 
              onClick={() => setOpenChat(!openChat)} 
              className="px-8 py-3 rounded-full bg-[#fff] font-semibold flex items-center gap-2 text-sm md:text-base"
            >
              Get Started{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button> */}
              <button
                onClick={() => setOpenChat(true)}
                className="px-8 py-3 rounded-full bg-[#F3E5C9] font-semibold flex items-center gap-2  text-sm md:text-base"
              >
                Chat Now{" "}
                <span className="text-[#000000]">
                  <FaRocketchat />
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </>
  );
};

export default QuestionChatBoats;
