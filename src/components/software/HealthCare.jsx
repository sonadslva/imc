import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserMd,
  FaNotesMedical,
  FaFlask,
  FaFileInvoiceDollar,
  FaPills,
  FaShieldAlt,
  FaUsersCog,
  FaBalanceScale,
  FaHospital,
  FaClinicMedical,
  FaTeeth,
  FaEye,
  FaAmbulance,
} from "react-icons/fa";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import HealthCareImg from "../../assets/healthcareimg.jpg";
import shade from "../../assets/SHADEorg.png";
import Footer from "../Footer";
import darkGradient from "../../assets/darkGradient.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";


const features = [
  {
    icon: <FaUserMd />,
    title: "Patient Registration & Appointment Management",
    desc: "Hassle-free booking, scheduling, and queue management.",
  },
  {
    icon: <FaNotesMedical />,
    title: "Electronic Medical Records (EMR)",
    desc: "Secure and centralized patient records for better diagnosis and treatment.",
  },
  {
    icon: <FaFlask />,
    title: "Laboratory & Diagnostic Management",
    desc: "Integrated lab module for efficient test processing and reporting.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Scan & Procedures Billing",
    desc: "Automated billing, claims processing, and compliance with regulations.",
  },
  {
    icon: <FaPills />,
    title: "Pharmacy & Inventory Control",
    desc: "Real-time stock tracking, expiry alerts, and prescription management.",
  },
  {
    icon: <FaUsersCog />,
    title: "Doctor & Staff Management",
    desc: "Easy scheduling, shift tracking, and performance monitoring.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Data Security & Compliance",
    desc: "Advanced security measures ensuring data privacy and regulatory compliance.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Financial Transparency",
    desc: "Clear and detailed financial insights for better decision-making.",
  },
];

const HealthCare = () => {
     const [openChat, setOpenChat] = useState(false)
  
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const businessTypes = [
    { icon: <FaHospital />, text: "Hospitals" },
    { icon: <FaClinicMedical />, text: "Clinics" },
    { icon: <FaUserMd />, text: "Medical Practices" },
    { icon: <FaTeeth />, text: "Dental Clinics" },
    { icon: <FaEye />, text: "Eye Care Centers" },
    { icon: <FaAmbulance />, text: "Emergency Services" },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductVideosAndImages();
  }, []);

  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);

      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "healthcare")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Video data:", videoData); // Debug log
      setProductVideos(videoData);

      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "healthcare")
      );
      const imageSnapshot = await getDocs(imageQuery);
      const imageData = imageSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Image data:", imageData); // Debug log
      setProductImages(imageData);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  const openFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full flex flex-col items-center text-white relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full">
        <img src={darkGradient} alt="" className="w-full h-full object-cover" />
      </div>
      <a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine />
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
      <section className="py-20 relative w-full pt-32 px-2">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-8">
          {/* Animated Image */}
          <motion.img
            src={HealthCareImg}
            alt="Healthcare"
            className="w-full lg:w-1/2 rounded-3xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Animated Text Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl text-start font-bold textGradient4">
              HEALTHCARE MANAGEMENT
            </h1>

            <p className="mt-4 textGradient6 text-start md:text-justify">
              We empower healthcare institutions with our advanced Hospital
              Information Management System 'SHADE'—a comprehensive solution
              designed to optimize hospital workflows, enhance patient care, and
              improve operational efficiency.
              <span className="block md:text-justify mb-2">
                Our HIMS software integrates patient management, billing,
                electronic medical records (EMR), appointment scheduling,
                pharmacy, lab management, and more—all in one seamless platform.
                Whether you run a single hospital, a multi-specialty clinic, or
                a healthcare network, our system ensures smooth and automated
                operations, reducing paperwork and enhancing productivity.
              </span>
            </p>

            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-start items-start w-[250px] bg-white mt-5"
            >
              <img
                src={shade}
                alt="shade"
                className="h-[80px] object-contain px-2"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-[1400px] mx-auto mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition border border-white"
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-4xl text-[#F99F2C]">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Product Showcase Section */}
      <section className="w-full pb-20 text-white relative">
        <div className="max-w-[1400px] mx-auto px-6 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
          >
            Healthcare Solutions Showcase
          </motion.h2>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              {/* Product Videos Slider */}
              {productVideos.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-6 textGradient6">
                    Product Videos
                  </h3>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="pb-4"
                  >
                    {productVideos.map((video) => (
                      <SwiperSlide key={video.id}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg w-full h-[320px]"
                        >
                          <iframe
                            className="w-full h-full"
                            src={video.videoUrl}
                            title={video.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Product Images Slider */}
              {productImages.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 textGradient6">
                    Product Images
                  </h3>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="pb-4"
                  >
                    {productImages.map((image) => (
                      <SwiperSlide key={image.id}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="bg-black/30 backdrop-blur-sm overflow-hidden shadow-lg w-full h-[250px] cursor-pointer"
                          onClick={() => openFullScreen(image)}
                        >
                          <img
                            src={image.imageUrl}
                            alt={image.name}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </>
          )}
        </div>

        <div className="max-w-[1400px] mx-auto px-6 pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
          >
            Business Applications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4  backdrop-blur-sm rounded-xl   hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3 text-[#000] bg-white w-20 h-20 rounded-full flex items-center justify-center ">
                  {type.icon}
                </div>
                <p className="text-white text-center text-sm">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full screen image overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={closeFullScreen}
          >
            <div className="relative max-w-6xl max-h-[600px] p-4">
              <button
                className="absolute top-4 right-4  rounded-full p-2 text-white"
                onClick={closeFullScreen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.name}
                className="max-w-full max-h-[90vh] object-contain"
              />
              {/* <div className="mt-2 text-white text-center">
                <h3 className="text-xl font-semibold">{selectedImage.name}</h3>
                {selectedImage.description && (
                  <p className="mt-1 text-white/80">
                    {selectedImage.description}
                  </p>
                )}
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center py-8 pt-10 sm:pt-20"
      >
        <h2 className="text-xl sm:text-3xl font-bold mb-3 textGradient4 sm:mb-4 ">
          Ready to Transform ?
        </h2>
        <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl textGradient6 mx-auto px-4 text-sm sm:text-base">
          Experience how SHADE can streamline your operations, reduce errors,
          and boost customer satisfaction.
        </p>
        <a href="/contact">
          <button className="bg-[#F99F2C] hover:bg-[#e8922b] text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg textGradient5 shadow-[#F99F2C]/20 text-sm sm:text-base">
            Contact Now
          </button>
        </a>
      </motion.div>

      <section className="bg-[#fff] py-10 text-[#000] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default HealthCare;