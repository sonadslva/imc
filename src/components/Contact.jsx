import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import darkGradient from "../assets/darkGradient.jpg";
import CircularText from "./CircularText";
import {motion} from "framer-motion"
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "./ChatBot";

const Contact = () => {
     const [openChat, setOpenChat] = useState(false)
  
  const [active, setActive] = useState(false);
  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "3e557a00-0b21-45e5-b274-496427ac9210");
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 3000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Error submitting form");
    }
  };

  return (
    <div className="pt-32 relative w-full bg-[#fff]">
      {/* <div className=" absolute top-0 right-0 bottom-0 left-0 -z-10">
        <img src={darkGradient} alt="" className="w-full h-full object-cover"/>
      </div> */}
      <a href="https://wa.me/+917593820007">
              <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
                <RiWhatsappLine/>
              </div>
            </a>
            
            {/* chatbot */}
            <div className="bottom-10 fixed right-10 z-[999]">
              {openChat ? (
                <div className="fixed bottom-10 z-[999] right-10">
                  <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
                </div>
              ) : (
                <div className="fixed bottom-10 z-[999] right-10">
                  <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
                </div>
              )}
            </div>
      <section className="mb-10 md:mb-20 max-w-[1400px] mx-auto w-full px-4 md:px-0">
      <div className="w-full max-w-[1400px] mx-auto">
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full mb-16 gap-5 md:gap-10">
            <div className="md:w-[60%] flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#352317] text-[36px] md:text-[50px]  leading-tight"
              >
                Get in Touch and Lets
                <span className="block">Make It Happen</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#000]  text-base md:text-lg"
              >
                Get in touch with us! Whether you have questions, need support,
                or want to learn more about our services, we're here to assist
                you. Simply fill out the form below, and we'll respond promptly.
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-[50%]"
            >
              <CircularText
                text="IMC*BUSINESS*SOLUTIONS"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <div className="flex flex-col-reverse md:flex-row justify-start items-start gap-10 w-full">
            {/* Contact Details Section */}
            <div className="w-full md:w-[50%]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-5  mb-10 text-lg md:text-xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-[#000]"
                >
                  info@imcbsglobal.com
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="text-[#000]"
                >
                  +91 75938 20007
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="text-[#000]"
                >
                  Palakkunnummal Building, Near Govt Ayurvedic Hospital Emily{" "}
                  <span className="block">
                    Kalpetta, Wayanad, Kerala – 673121
                  </span>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex"
              >
                <div className="bg-gradient-to-r p-[1px] backdrop-blur-3xl rounded-3xl">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "tel:+917593820007")}
                    className="text-[#000] w-full h-full bg-[#F7902C] backdrop-blur-sm text-xl md:text-3xl px-8 py-3 rounded-3xl border  hover:bg-gray-700"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-[50%] flex flex-col gap-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-[#000]  text-xl md:text-2xl"
              >
                Here to bring your concept to life, manage your ongoing project,
                or expand your existing development team.
              </motion.div>
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onSubmit={onSubmit}
              >
                <div className="w-full grid grid-cols-2 gap-5 mb-3 ">
                  {/* Input fields with individual animations */}
                  {["firstName", "lastName", "email", "phone"].map(
                    (field, index) => (
                      <motion.input
                        key={field}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                            ? "tel"
                            : "text"
                        }
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={`${
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }*`}
                        required
                        className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#000] border-b border-[#000]"
                      />
                    )
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="w-full mb-3"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    required
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#000] border-b border-[#000]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full text-[#000] px-8 py-3 bg-[#F7902C] rounded-3xl "
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full mb-10 md:mb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-0">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.0735491927476!2d76.07862677487005!3d11.618106688586558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84f992636da1e2d%3A0xe5e2fd2dafe1f7f3!2sIMC%20BUSINESS%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1739947667097!5m2!1sen!2sin"
              width="1400"
              height="450"
              allowFullScreen
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default Contact;