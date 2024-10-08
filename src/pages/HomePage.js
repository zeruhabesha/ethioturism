import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; // Include if you want scrollbars
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Imges2 from '../image/2.jpg';
import Imges3 from '../image/3.jpg';
import Imges4 from '../image/4.jpg';
import Imges5 from '../image/5.jpg';
import Imges6 from '../image/6.jpg';
import Imges7 from '../image/7.jpg';
import FAQ from '../image/faq.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRegListAlt, FaBullhorn, FaHandHoldingUsd, FaUsersCog } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineHome } from 'react-icons/ai';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Open the first FAQ item by default
  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once
    });
  }, []);

  const images = [
    {
      src: Imges3,
      title: 'Welcome to Ethiopia',
      link: '/about',
      description: 'Explore the rich heritage and natural beauty of Ethiopia.',
    },
    {
      src: Imges2,
      title: 'Lalibela Churches',
      link: '/churches',
      description: 'Discover the magnificent rock-hewn churches of Lalibela, a UNESCO World Heritage site.',
    },
    {
      src: Imges4,
      title: 'Simien Mountains',
      link: '/mountains',
      description: 'Experience the stunning views and unique wildlife of the Simien Mountains.',
    },
    {
      src: Imges5,
      title: 'Addis Ababa',
      link: '/addis',
      description: 'Visit the bustling capital city with rich cultural landmarks and modern attractions.',
    },
    {
      src: Imges6,
      title: 'Omo Valley Tribes',
      link: '/omo-valley',
      description: 'Immerse yourself in the vibrant cultures of the Omo Valley tribes.',
    },
    {
      src: Imges7,
      title: 'Lake Tana Monasteries',
      link: '/lake-tana',
      description: 'Explore ancient monasteries on the islands of Lake Tana.',
    },
  ];

  // FAQ Questions and Answers for Ethiopian Tourism
  const faqs = [
    {
      question: 'What is unique about Ethiopian tourism?',
      answer: 'Ethiopia offers a rich blend of ancient history, vibrant cultures, diverse landscapes, and world-famous heritage sites like Lalibela, Aksum, and the Simien Mountains.',
    },
    {
      question: 'How do I get started on my Ethiopian adventure?',
      answer: 'You can plan your trip by visiting our website, which offers a range of itineraries and travel guides to help you explore the best of Ethiopia.',
    },
    {
      question: 'What are the must-see attractions in Ethiopia?',
      answer: 'Some of the top attractions include the historic Lalibela Churches, Aksum Obelisks, Simien Mountains, Omo Valley, and the Blue Nile Falls.',
    },
    {
      question: 'Is Ethiopia safe for tourists?',
      answer: 'Yes, Ethiopia is generally safe for tourists. We recommend following local guidelines and staying informed about the latest travel advisories.',
    },
  ];

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = footerRef.current?.offsetTop;

    if (footerPosition && scrollPosition >= footerPosition) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeIndex1, setActiveIndex1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex1((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />

      <div className="mt-0" style={{ zIndex: 1, backgroundColor: 'white' }}>
        {/* Image Slider Section */}
        <div className="relative mt-0" style={{ zIndex: 1 }}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]} // Add Autoplay module here
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Configure autoplay
            className="image-swiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-screen">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'fixed',
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
                    <h1 className={`text-4xl font-bold mb-4 title-animation ${activeIndex1 === index ? 'active' : ''}`}>
                      {image.title}
                    </h1>
                    <p className="mb-4 text-center">{image.description}</p>
                    <a
                      href={image.link}
                      className="bg-dark-600 px-4 py-2 no-underline rounded text-white hover:bg-dark-700 flex items-center justify-center"
                    >
                      <FaArrowRight className="hover:animate-spin transform transition duration-500" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <main className="container mx-auto p-6" style={{ zIndex: 1 }}>
          <p className="text-lg mb-6">
            Welcome to Ethiopian Tourism, where ancient history, breathtaking landscapes, and vibrant cultures await you. From the rock-hewn churches of Lalibela to the majestic Simien Mountains, Ethiopia offers a truly unique travel experience.
          </p>
          <p className="text-base mb-6">
            Whether you're seeking adventure, cultural immersion, or historical exploration, Ethiopia has something for every traveler.
          </p>

          {/* Services Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-indigo-500 hover:text-dark-500">
                <div className="flex items-center mb-4">
                  <FaRegListAlt className="text-4xl text-dark-600 mr-4" />
                  <h3 className="text-xl font-semibold">Tour Packages</h3>
                </div>
                <p className="text-gray-600 hover:text-dark-500">
                  Explore Ethiopia with our carefully curated tour packages, showcasing the best of what the country has to offer.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-indigo-500 hover:text-dark-500">
                <div className="flex items-center mb-4">
                  <FaBullhorn className="text-4xl text-dark-600 mr-4" />
                  <h3 className="text-xl font-semibold">Guided Tours</h3>
                </div>
                <p className="text-gray-600 hover:text-dark-500">
                  Experience Ethiopia's rich culture and history with the help of our knowledgeable guides.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-indigo-500 hover:text-dark-500">
                <div className="flex items-center mb-4">
                  <FaHandHoldingUsd className="text-4xl text-dark-600 mr-4" />
                  <h3 className="text-xl font-semibold">Affordable Rates</h3>
                </div>
                <p className="text-gray-600 hover:text-dark-500">
                  Enjoy top-tier service at affordable rates, ensuring an unforgettable Ethiopian journey that fits your budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-indigo-500 hover:text-dark-500">
                <div className="flex items-center mb-4">
                  <AiOutlineCheckCircle className="text-4xl text-dark-600 mr-4" />
                  <h3 className="text-xl font-semibold">Custom Itineraries</h3>
                </div>
                <p className="text-gray-600 hover:text-dark-500">
                  Create your own adventure with custom itineraries tailored to your interests and schedule.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:bg-indigo-500 hover:text-dark-500">
                <div className="flex items-center mb-4">
                  <FaUsersCog className="text-4xl text-dark-600 mr-4" />
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                </div>
                <p className="text-gray-600 hover:text-dark-500">
                  We are here to support you throughout your Ethiopian journey, ensuring a seamless travel experience.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
        <section className="faq-section mt-12">
        <h2 className="text-4xl font-bold mb-8 font-poppins text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <img src={FAQ} alt="FAQ" className="w-full lg:w-1/2 lg:mr-4 mb-6 lg:mb-0 hidden lg:block" />
          <div className="w-full lg:w-1/2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                // initial="hidden"
                animate={activeIndex === index ? 'visible' : 'visible'}
                variants={faqVariants}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{faq.question}</h3>
                <motion.p
                  className={`text-gray-700`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={activeIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        </main>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
